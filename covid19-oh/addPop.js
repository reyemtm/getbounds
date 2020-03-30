const fs = require("fs");

var counties = JSON.parse(fs.readFileSync("topojson_us_counties.geojson"))
var pop18 = JSON.parse(fs.readFileSync("county_pop_2018.json"));

var popCrosswalk = [];

pop18.map(p => {
  popCrosswalk[p.fips] = p.pop2018
})

console.log(popCrosswalk)

var newCounties = {
  type: "FeatureCollection",
  features: []
};

counties.features.map(f => {
  f.properties["pop2018"] = Number(popCrosswalk[f.id]),
  f.properties.fips = f.id
});

fs.writeFileSync("./counties.geojson", JSON.stringify(counties,0,2));
fs.writeFileSync("./counties.min.geojson", JSON.stringify(counties));