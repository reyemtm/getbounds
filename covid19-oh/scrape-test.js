const fetch = require("node-fetch")
const Papa = require("papaparse");
const fs = require("fs")

function formatDate(d) {
  let ye = new Intl.DateTimeFormat('en', { year: 'numeric' }).format(d)
  let mo = new Intl.DateTimeFormat('en', { month: '2-digit' }).format(d)
  let da = new Intl.DateTimeFormat('en', { day: '2-digit' }).format(d)
  return `${mo}/${da}/${ye}`
}

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

  var counties = [];

  data.map(row => {
    var countyCol = Object.keys(row)[0];
    if (countyCol.indexOf('County') === -1) {
      throw new Error('wrong county column');
    }
    var county = Object.values(row)[0]
    if (counties.indexOf(county) < 0 && county.length > 1 && county != "Grand Total") counties.push(county)
  })

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
    console.warn("error latest update from csv does not match today's date");
    // process.exit(0)
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
        if (i === 1) console.log(Object.keys(row))
        cases = cases + Number(Object.values(row)[6])
        deaths = deaths + Number(Object.values(row)[7])
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

}