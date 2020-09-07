const fetch = require("node-fetch")
const fs = require("fs");
const Papa = require("papaparse");
const t = new Date(Date.now());
const logger = require("log-update");
const { count } = require("console");

const opts = process.argv;

console.log(opts)

const customDate = (opts.length === 3) ? opts[2] : 0;

function formatDate(d, separator) {
  var s = (!separator) ? "/" : separatorlg
  let ye = new Intl.DateTimeFormat('en', { year: 'numeric' }).format(d)
  let mo = new Intl.DateTimeFormat('en', { month: '2-digit' }).format(d)
  let da = new Intl.DateTimeFormat('en', { day: '2-digit' }).format(d)
  return `${mo}${s}${da}${s}${ye}`
}

logger("fetching live data")
fetch("https://coronavirus.ohio.gov/static/COVIDSummaryData.csv")
  .then(res => {
    if (res.status === 200) {
      return res.text()
    } else {
      throw new Error ("error in res");
    }
  })
  .then(csv => {
    console.log("downloaded")
    fs.writeFileSync("./source/covid19-oh/current.csv", csv)
    var results = Papa.parse(csv, {
      header: true,
      quotes: true,
      skipEmptyLines: true
    });  
    parseData(results.data)
  })
  .catch(err => {
    console.log(err)
  });

//logger("fetching cached data")
// var csv = fs.readFileSync("./source/covid19-oh/current.csv", "utf8")
// var results = Papa.parse(csv, {
//   header: true,
//   quotes: true,
//   skipEmptyLines: true
// });  
// parseData(results.data)

function parseData (data) {

  console.log(data[0])

  //TODO GET POPULATION OF EACH COUNTY FROM POPULATION DATA USING COUNTY NAME - { population : population}
  
  //COUNTY LEVEL
  //[x] TODO GET LATEST NUMBERS - CHECK
  //TODO GET NUMBER LATEST - 1 DAY
  //TODO CREATE RATE 7-DAY AVERAGE
  //TODO GET IS TODAY AN INCREASE OR DECREASE FROM 7 DAY AVERAGE

  //TODO GET HIGHEST NUMBER FOR EACH DAY
  //FILTER OUT LAST ROW AND ROWS THAT DO NOT CONTAIN COUNTIES

  var cleanedStateData = cleanOhioCountyData(data, "county");
  var countyKey = cleanedStateData[1];
  var stateData = cleanedStateData[0];
  logger("cleaned");


  var stateData2 = normalizeDates(stateData)
  logger("state data normalized")

  var countyList = getValueList(stateData2, countyKey).sort();
  console.log("county list completed")

  var dateList = getValueList(stateData2, "Onset Date").sort();
  console.log("date list completed");

  var countyData = [];

  // countyList.forEach(c => {
  //   countyData.push({
  //     county: c,
  //     current: 0,
  //     total: 0
  //   })
  // })

  function cleanOhioCountyData(rows, value) {
    var keys = Object.keys(rows[0]);

    var countyKey = keys.filter((k,i) => {
      return k.toLowerCase().includes(value)
    })
  
    var cleanJsonArray = data.filter(r => {
      return r[countyKey] && !(r[countyKey].toLowerCase()).includes("total")
    })

    return [
      cleanJsonArray,
      countyKey
    ]
  }

  function normalizeDates(rows) {
    rows.map(row => {
      if (row["Onset Date"]) {        
        row["Onset Date"] = formatDate(new Date(row["Onset Date"]))
      }
    })
    return rows
  }

  function getValueList(rows, key) {
    var valueListArray = [];

    rows.forEach(r => {
      if (valueListArray.indexOf(r[key]) < 0) valueListArray.push(r[key])
    });

    valueListArray.sort();

    return valueListArray
  }

  dateList.sort()

  var dateListPastWeek = dateList.slice(dateList.length - 7, dateList.length);

  console.log(dateListPastWeek)

  var latest = dateList[dateList.length - 1]

  console.log("last date with new cases", latest);

  var today = new Date();

  if (formatDate(today) != latest) {
    console.warn("warning...latest update from csv does not match today's date");
  }

  //TODO CALCULATE STATE TOTAL, STATE DAILY AND STATE 7-DAY AVERAGE, PUT IT IN STATE: OHIO, COUNTY: NULL
  var stateCasesTotal = 0;
  var stateSevenDayAvg = 0;
  var stateLatest = 0;
  var stateYeserday = 0;
  var stateDeathsTotal = 0;


  countyList.forEach((c,i) => {

    var cases = 0;
    var deaths = 0;
    var recovered = 0;
    var latestCases = 0;
    var latestDeaths = 0;
    var yesterdayCases = 0;
    var yesterdayDeaths = 0;
    var sevenDays = 0;

    logger("looping through", i, "of", countyList.length)

    stateData2.forEach(row => {
      var county = Object.values(row)[0];
      if (county == c) {

        cases = cases + Number(Object.values(row)[6]);
        deaths = deaths + Number(Object.values(row)[7])

        this.date = Object.values(row)[3]

        //cases are sometimes spread out with multiple of the same date representing cases
        if (this.date === latest) {
          latestCases = latestCases + Number(Object.values(row)[6]);
          latestDeaths = latestDeaths + Number(Object.values(row)[7]);
        }

        if (this.date === formatDate(new Date(latest) - 86400000)) {
          yesterdayCases = yesterdayCases + Number(Object.values(row)[6]);
          yesterdayDeaths = yesterdayDeaths + Number(Object.values(row)[7]);
        }

        dateListPastWeek.forEach(day => {
          if (this.date === day) {
            sevenDays = sevenDays + Number(Object.values(row)[6]);
          }
        })

      }
    })

    var sevenDayAvg = (!(Number(sevenDays) / 7)) ? 0 : (Number(sevenDays) / 7)
    
    var properties = {
      county: c,
      updated: new Date(Date.now()),
      date: new Date(latest),
      cases: Number(cases),
      deaths: Number(deaths),
      recovered: 0,
      active: cases - deaths - recovered,
      latest_cases: latestCases,
      latest_deaths: latestDeaths,
      yesterday_cases: yesterdayCases,
      yesterday_deaths: yesterdayDeaths,
      seven_day_avg: sevenDayAvg
    }

    countyData.push(properties)

  });

  countyData.forEach(c => {
    console.log(c.latest_cases)
    stateCasesTotal = stateCasesTotal + c.cases
    stateDeathsTotal = stateDeathsTotal + c.deaths;
    stateLatest = stateLatest + c.latest_cases
    stateYeserday = stateYeserday + c.yesterday_cases
  })

  countyData.push({
    updated: new Date(Date.now()),
    date: new Date(latest),
    state: "Ohio",
    county: null,
    cases: stateCasesTotal,
    latest_cases: stateLatest,
    yesterday_cases: stateYeserday
  })

  var string = JSON.stringify(countyData, 0, 2)

  fs.writeFileSync("source/covid19-oh/current.json", string)

  logger("wrote new json file")

}

function addToCache (cache, countyData, latestDate, date) {

  console.log(latestDate, date)
  var today = (!date) ? formatDate(t) : date;
  var previous = new Date();
  var todayDate = new Date(today);
  previous.setDate(todayDate.getDate() - 1);

  console.log(formatDate(previous));

  // process.exit()

  fs.writeFileSync(`./source/covid19-oh/archive/covid19-oh-counties-timeseries-cache-${formatDateDash(previous)}.json`, JSON.stringify(cache, 0, 2));

  cache.map(c => {

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
        var rate = c.dates[today].cases - c.dates[formatDate(previous)].cases
        c.dailyrate = (rate === 0) ? 0 : Number( (rate / c.dates[formatDate(previous)].cases).toFixed(2) )
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