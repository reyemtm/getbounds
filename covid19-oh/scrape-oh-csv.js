const fetch = require("node-fetch")
const cheerio = require("cheerio")
const fs = require("fs");
const Papa = require("papaparse")
const t = new Date(Date.now());
const yesterday = new Date(Date.now() - 86400000);
const twodays = new Date(Date.now() - (86400000 * 2))

function formatDate(d) {
  let ye = new Intl.DateTimeFormat('en', { year: 'numeric' }).format(d)
  let mo = new Intl.DateTimeFormat('en', { month: '2-digit' }).format(d)
  let da = new Intl.DateTimeFormat('en', { day: '2-digit' }).format(d)
  return `${mo}/${da}/${ye}`
}

function formatDateDash(d) {
  let ye = new Intl.DateTimeFormat('en', { year: 'numeric' }).format(d)
  let mo = new Intl.DateTimeFormat('en', { month: '2-digit' }).format(d)
  let da = new Intl.DateTimeFormat('en', { day: '2-digit' }).format(d)
  return `${mo}-${da}-${ye}`
}

let cache = JSON.parse(fs.readFileSync("./source/covid19-oh/covid19-oh-counties-timeseries.json"));
fs.writeFileSync(`./source/covid19-oh/covid19-oh-counties-timeseries-cache-${formatDateDash(yesterday)}.json`, JSON.stringify(cache, 0, 2));

fetch("https://coronavirus.ohio.gov/static/COVIDSummaryData.csv")
  .then(res => {
    if (res.status === 200) {
      return res.text()
    } else {
      console.log("error in res")
    }
  })
  .then(csv => {
    var results = Papa.parse(csv, {
      header: true
    });  
    parseData(results.data)
  })

function parseData (data) {
  //GET COUNTIES
  
  var counties = [];
  data.map((row,i) => {
    var countyCol = Object.keys(row)[0];
    if (countyCol.indexOf('County') === -1) {
      throw new Error('First column of csv is no longer county!');
    }
    var county = Object.values(row)[0]
    if (counties.indexOf(county) < 0 && county.length >1 && county != "Grand Total") counties.push(county)
  })
  // console.log(counties)

  //GET LATEST DATE

  //DATE TWO WEEKS AGO
  var date = new Date(Date.now() - (86400000 * 14))

  var today = new Date();

  data.map(row => {
    var newDate = new Date(Object.values(row)[3]);

    if (newDate > date) date = newDate;

    if (Object.values(row)[4] && Object.values(row)[4] != '') {
      var newDate2 = new Date(Object.values(row)[4]);
      if (newDate2 > date) date = newDate2;
    }

  })

  console.log(date);

  if (formatDate(today) != formatDate(date)) {
    console.log("error latest update from csv does not match today's date");
    process.exit(0)
  }
  //PARSE TOTALS FOR DATE
  var totals = [];

  counties.map(c => {
    var cases = 0;
    var deaths = 0;
    var recovered = 0;

    data.map(row => {
      var county = Object.values(row)[0];
      if (county == c) {
        cases = cases + Number(Object.values(row)[5])
        deaths = deaths + Number(Object.values(row)[6])
      }
    })

    var dates = {};
    dates[formatDate(date)] = {
      cases: Number(cases),
      deaths: Number(deaths),
      recovered: 0,
      active: cases - deaths - recovered
    }
    totals[c] = dates
  });
  console.log(totals)
  addToCache(cache, totals)

}

function addToCache (cache, countyData) {
  cache.map(c => {
    
    var date = formatDate(t);

    c.checked = new Date(Date.now());
    c.dates[date] = {}
    c.dates[date].cases = 0;
    c.dates[date].recovered = 0;
    c.dates[date].deaths = 0;
    c.dates[date].active = 0;


    for (let i in countyData) {
      if (c.name == i) {
        var date = Object.keys(countyData[i])[0];
        var obj = countyData[i][date]

        console.log(obj)

        c.dates[date].cases = Number(obj.cases)
        c.dates[date].deaths = Number(obj.deaths);
        c.dates[date].active = Number(obj.active);
        c.dates[date].recovered = Number(obj.recovered)
      }
    }
  })

  console.log(JSON.stringify(cache[0],0,2))

  fs.writeFileSync("./source/covid19-oh/covid19-oh-counties-timeseries.json", JSON.stringify(cache, 0, 2))
  console.log("finished writing new covid data");

  var totalcases = [];

  cache.map(c => {
    var cases = 0;
    for (let d in c.dates) {
      cases = c.dates[d].cases
      c[d] = c.dates[d].cases
    }
    delete c.dates
    delete c.rate
    delete c.dailyrate
    delete c.new
    c.totalcases = cases
    totalcases.push(c);

  });

  fs.writeFileSync("./source/covid19-oh/covid19-oh-counties-cases.csv", Papa.unparse(totalcases))
}