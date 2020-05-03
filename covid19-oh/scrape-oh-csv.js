const fetch = require("node-fetch")
const fs = require("fs");
const Papa = require("papaparse")
const t = new Date(Date.now());
const yesterday = new Date(Date.now() - 86400000);


//NEED TO GET LAST DATE IN CSV AND THEN USE THIS AS THE DATE TOWARDS THE END

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
fs.writeFileSync(`./source/covid19-oh/archive/covid19-oh-counties-timeseries-cache-${formatDateDash(yesterday)}.json`, JSON.stringify(cache, 0, 2));

fetch("https://coronavirus.ohio.gov/static/COVIDSummaryData.csv")
  .then(res => {
    if (res.status === 200) {
      return res.text()
    } else {
      throw new Error ("error in res");
    }
  })
  .then(csv => {
    fs.writeFileSync("./source/covid19-oh/current.csv", csv)
    var results = Papa.parse(csv, {
      header: true
    });  
    parseData(results.data)
  })
  .catch(err => {
    console.log(err)
  });

function parseData (data) {
  //GET COUNTIES

  //CREATE ARRAY OF DATES AND FIND LATEST ONE AND USE THIS FOR EXTRACTING THE LATEST NEW CASES

  var dates = [];
  data.map(row => {
    var d1 = Object.values(row)[3];
    if (d1 && dates.indexOf(new Date(d1).getTime()) < 0 && d1 != "Total" && d1 != null) {
      dates.push(new Date(d1).getTime())
    }
  });

  dates.sort();

  console.log(dates)

  var latest = formatDate(new Date(dates[dates.length - 1]))

  console.log("last date with new cases", latest)

  var counties = [];

  data.map(row => {
    var countyCol = Object.keys(row)[0];
    if (countyCol.indexOf('County') === -1) {
      throw new Error('wrong county column');
    }
    var county = Object.values(row)[0]
    if (counties.indexOf(county) < 0 && county.length > 1 && county != "Grand Total") counties.push(county)
  })

  // console.log(counties)
  // process.exit(0)

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

  // console.log(date);

  if (formatDate(today) != formatDate(date)) {
    console.warn("warning...latest update from csv does not match today's date");
  }
  
  //PARSE TOTALS FOR DATE
  var totals = [];

  counties.map(c => {
    var cases = 0;
    var deaths = 0;
    var recovered = 0;

    data.map((row,i) => {
      var county = Object.values(row)[0];
      if (county == c) {
        // if (i === 1) console.log(Object.keys(row))
        cases = cases + Number(Object.values(row)[6])
        deaths = deaths + Number(Object.values(row)[7])
      }
    })

    var dates = {};
    dates[latest] = {
      cases: Number(cases),
      deaths: Number(deaths),
      recovered: 0,
      active: cases - deaths - recovered
    }
    totals[c] = dates
  });
  // console.log(totals)
  addToCache(cache, totals, latest)

}

function addToCache (cache, countyData, latestDate) {
  cache.map(c => {
    console.log(latestDate)
    var today = formatDate(t);

    c.checked = new Date(Date.now());
    c.dates[today] = {}
    c.dates[today].cases = 0;
    c.dates[today].recovered = 0;
    c.dates[today].deaths = 0;
    c.dates[today].active = 0;


    for (let i in countyData) {
      if (c.name == i) {
        console.log(countyData[i])
        var obj = countyData[i][latestDate]

        c.dates[today].cases = Number(obj.cases)
        c.dates[today].deaths = Number(obj.deaths);
        c.dates[today].active = Number(obj.active);
        c.dates[today].recovered = Number(obj.recovered);
        var rate = c.dates[today].cases - c.dates[formatDate(yesterday)].cases
        c.dailyrate = (rate === 0) ? 0 : Number( (rate / c.dates[formatDate(yesterday)].cases).toFixed(2) )
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