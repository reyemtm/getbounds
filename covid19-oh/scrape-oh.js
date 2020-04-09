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

const dates = [
  formatDate(t), formatDate(yesterday), formatDate(twodays)
]

console.log(dates);

var tries = 1;

getData(formatDateDash(t))

function getData(date) {
  var url = `https://raw.githubusercontent.com/CSSEGISandData/COVID-19/master/csse_covid_19_data/csse_covid_19_daily_reports/${date}.csv`
  fetch(url)
  .then(res => {
    console.log(res.status, url)
    if (res.status != 200) {
      if (tries) {
        console.log("no data trying yesterday")
        getData(formatDateDash(yesterday))
      tries =0
        return 0
      }else{
        console.log("error, res not 200")
      }
      tries = 0;
    }else{
      return res.text()
    }
  })
  .then(csv => {
    if (csv) {
    console.log("covid data download successful", date)
    var results = Papa.parse(csv, {
      header: true
    });
    processData(results.data);
      }
  })
  .catch(err => {
    console.log(err)
  
  });
}



let cache = JSON.parse(fs.readFileSync("./source/covid19-oh/covid19-oh-counties-timeseries.json"));
fs.writeFileSync(`./source/covid19-oh/covid19-oh-counties-timeseries-cache-${dates[1].replace(/\//g, "-")}.json`, JSON.stringify(cache, 0, 2));

function processData(data) {
  console.log("attempting to process covid data")

  var countyData = data.filter(d => {
    return d["Province_State"] === "Ohio"
  });

  cache.map(c => {
    c.checked = new Date(Date.now());
    c.dates[dates[0]] = {};
    c.dates[dates[0]].cases = 0;
    c.dates[dates[0]].recovered = 0;
    c.dates[dates[0]].deaths = 0;

    for (let i in countyData) {
      if (c.fips == countyData[i].FIPS) {
        c.dates[dates[0]].cases = Number(countyData[i].Confirmed)
        c.dates[dates[0]].deaths = Number(countyData[i].Deaths);
        c.dates[dates[0]].active = Number(countyData[i].Active);
        c.dates[dates[0]].recovered = Number(countyData[i].Recovered)
      }
    }
  })

  // console.log(JSON.stringify(cache,0,2))

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

  })
  fs.writeFileSync("./source/covid19-oh/covid19-oh-counties-cases.csv", Papa.unparse(totalcases))
}

//OLD SCRIPT FOR SCRAPING ODH DATA
/*
fetch('https://coronavirus.ohio.gov/wps/portal/gov/covid-19/')
  .then(res => {
    return res.text()
  })
  .then(data => {
    let $ = cheerio.load(data);
    let updated = $('.odh-ads__last-updated').text();
    let siteDate = updated.split("\n")[2].trim() + "20";
    let $cases = $('p:contains("Number of counties with cases:")').text();
    let casesParsed = $cases.split(" – ")[1].trim();
    // console.log(casesParsed)
    let parsed = casesParsed.replace(/([()])/g, '');
    let array = parsed.split(',');

    let $d = $('p:contains("Number of deaths")').text();
    console.log($d)
    let d1 = $d.split(" – ")[1].trim();
    let dParsed = d1.replace(/([()])/g, '')
    let dArray = dParsed.split(", ");

    let dJoin = {};

    dArray.map(d => {
      dJoin[d.split(" ")[0]] = Number(d.split(" ")[1])
    })

    cache.map(c => {
      c.checked = new Date(Date.now());
      c.dates[siteDate] = {};
      c.dates[siteDate].cases = 0;
      c.dates[siteDate].recovered = 0;
      c.dates[siteDate].deaths = 0;

      for (let i in array) {
        let county = array[i].trim();
        let name = (county.split(" ")[0]).replace(" ", "");
        if (c.name == name) {
          c.dates[siteDate].cases = Number(county.split(" ")[1])
          c.dates[siteDate].deaths = (!dJoin[name]) ? 0 : dJoin[name];
        }
      }

      c.dates[siteDate].active = c.dates[siteDate].cases - c.dates[siteDate].deaths - c.dates[siteDate].recovered;
      // c.new = null;
      // console.log(dates[1])
      // c.dailyrate = (!c.dates[siteDate].cases) ? 0 : (!c.dates[dates[1]].cases) ? 100 : c.dates[siteDate].cases / c.dates[dates[1]].cases
    })

    fs.writeFileSync("./source/covid19-oh/covid19-oh-counties-timeseries.json", JSON.stringify(cache, 0, 2))

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

    })
    fs.writeFileSync("./source/covid19-oh/covid19-oh-counties-cases.csv", Papa.unparse(totalcases))


  });
  */
