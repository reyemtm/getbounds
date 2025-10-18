---
layout: post
author: Malcolm Meyer
title: Filtering Arrays in MapLibre
subtitle: Techniques for Substring Matching in MapLibre GL JS and Mapbox GL JS
categories: ["blog"]
tags: ["maplibre", "mapbox", "web maps", "vector tiles"]
img: maplibre-filter.jpg
date: 2025-10-15
head: >-
  <link rel='stylesheet' href='https://cdnjs.cloudflare.com/ajax/libs/maplibre-gl/5.7.3/maplibre-gl.css' integrity='sha512-IylZQnfgxyZ4rs0/u4TjuOthOSWKwh47nrCPuscGnyidnt1mrhKdja/uUxfvkLaMusDAWV3DgKHHpfzNdTdGhw==' crossorigin='anonymous'/>
  <script src='https://cdnjs.cloudflare.com/ajax/libs/maplibre-gl/5.7.3/maplibre-gl.min.js' integrity='sha512-Gx0xDElSrwjxjT9mjMg+OsoA0ekI8IkwuPurccWk5afkFBzXQHE0eQsQ7syopu9MJ0HD1EYGmVXjY8SPZt5FAg==' crossorigin='anonymous'></script>
  <script src='https://cdnjs.cloudflare.com/ajax/libs/Turf.js/6.5.0/turf.min.js'></script>
  <style>
    .maplibregl-popup-content {
      font-family: monospace;
      font-size: 12px;
      font-weight: bold;
      padding: 6px 8px;
    }
  </style>
---

When filtering data in MapLibre GL JS, you will often have data stored as an array, such as a `tags` field. If this field is stored as a true JSON array (and this array persists into the rendered vector tiles), you can use the built-in expression syntax for exact matches inside an array. For example, if each feature has an array such as: `"tags": ["grid-1", "historic-district"]`, you can create an expression to show just those features whose tags array include `grid-1`.

```JavaScript
map.setFilter("layer-id", ["in", "grid-1", ["get", "tags"]]);
```

In the map below the grids are filtered using the method above, with the first grid cell (bottom-left) tagged as `["grid-1", "historic-district"]` and the next as `["grid-2", "historic-district"]`, etc.

<div id="map1" style="width: 100%; height: 400px;"></div>

This approach is clean and structured, however it only supports exact matches. For example: `grid` won’t match `grid-1`. If your use case requires prefix or substring matching, you will need an alternative method. If you have access to the raw data, one solution is storing this array as a CSV-style string, such as `"tags_csv": "grid-1,historic-district"`. This allows substring filtering using `["index-of"]`:

```JavaScript
map.setFilter("layer-id", [">=", ["index-of", "grid", ["get", "tags_csv"]], 0]);
//OR
map.setFilter("layer-id", [">=", ["index-of", "district", ["get", "tags_csv"]], 0]);
```

In the map below, the same grid data is used but the tags are stored as a CSV string. The filter highlights all features tagged with `district` (the whole grid) using the substring match method. The drawback to this method is that you cannot do exact matches without risk of false positives (e.g., searching for `grid-1` will also return `grid-10`, `grid-11`, etc.).

<div id="map2" style="width: 100%; height: 400px;"></div>

One issue to understand is that when storing data as a JSON array, vector tile generation tools (like [tippecanoe](https://github.com/felt/tippecanoe)) will encode these as JSON-encoded strings. In this case the only option is to use the substring matching method. However, when filtering on `grid-2`, you get all features that contain that substring, including `grid-20`, `grid-21`, etc. This can be mitigated by including quotes in the search string.

```JavaScript
"properties": {
  "tags":'[\"grid-1\",\"historic-district\"]';
}

map.setFilter("layer-id", [">=", ["index-of", '"grid-2"', ["get", "tags"]], 0]);
```

<div id="map3" style="width: 100%; height: 400px;"></div>


<script>

const map1 = new maplibregl.Map({
  container: 'map1',
  center: [-74.006, 40.7128],
  zoom: 12,
  attribution: false,
  attributionControl: false,
  interactive: false
});
const map2 = new maplibregl.Map({
  container: 'map2',
  center: [-74.006, 40.7128],
  zoom: 12,
  attributionControl: false,
  interactive: false

});
const map3 = new maplibregl.Map({
  container: 'map3',
  center: [-74.006, 40.7128],
  zoom: 12,
  attributionControl: false,
  interactive: false
});
//create a square grid inside the bbox of the map
const bounds = map1.getBounds().toArray().flat();
const grid = turf.squareGrid(bounds, 1, {units: 'kilometers'});
//add a tags property to each feature
grid.features.forEach((feature, index) => {
  feature.properties.tags = ["grid-" + (index + 1), "historic-district"];
  feature.properties.tags_csv = "grid-" + (index + 1) + ",historic-district";
  feature.properties.tags_encoded = `[\"grid-${index + 1}\",\"historic-district\"]`;
});

map1.addSource('grid-source', {
  type: 'geojson',
  data: grid
});
map2.addSource('grid-source', {
  type: 'geojson',
  data: grid
});
map3.addSource('grid-source', {
  type: 'geojson',
  data: grid
});
const layers1 = [{
  id: 'grid-layer-base',
  type: 'fill',
  source: 'grid-source',
  paint: {
    'fill-color': "white",
    'fill-opacity': 1,
    'fill-outline-color': 'black'
  }
},
{
  id: 'grid-layer',
  type: 'fill',
  source: 'grid-source',
  paint: {
    'fill-color': 'cornflowerblue',
    'fill-opacity': 1,
    'fill-outline-color': 'transparent'
  },
  filter: ['in', 'grid-1', ['get', 'tags']]
},
{
  id: 'grid-layer-line',
  type: 'line',
  source: 'grid-source',
  paint: {
    'line-color': 'black',
    'line-width': 3
  },
}]
layers1.forEach((layer) => {
  map1.addLayer(layer);
  map2.addLayer(layer);
  map3.addLayer(layer);
});

map1.fitBounds(turf.bbox(grid), {padding: 16});
map2.fitBounds(turf.bbox(grid), {padding: 16});
map3.fitBounds(turf.bbox(grid), {padding: 16});

map2.setFilter('grid-layer', [">=", ["index-of", 'district', ["get", "tags_csv"]], 0]);
map3.setFilter('grid-layer', [">=", ["index-of", '"grid-2"', ["get", "tags_encoded"]], 0]);

//add tooltip on hover
const popup = new maplibregl.Popup({
  closeButton: false,
  closeOnClick: false
});
const popup2 = new maplibregl.Popup({
  closeButton: false,
  closeOnClick: false
});
const popup3 = new maplibregl.Popup({
  closeButton: false,
  closeOnClick: false
});

const onMousemove = (e) => {
  const map = e.target;
  const features = map.queryRenderedFeatures(e.point, {
    layers: ['grid-layer', 'grid-layer-base']
  });
  if (!features.length) {
    popup.remove();
    return;
  }
  const coordinates = e.lngLat;
  const tags = features[0].properties.tags;
  popup.setLngLat(coordinates).setHTML(tags).addTo(map);
}
map1.on('mousemove', onMousemove);
map2.on('mousemove', onMousemove);
map3.on('mousemove', onMousemove);

map1.on('mouseout', () => {
  popup.remove();
});
map2.on('mouseout', () => {
  popup.remove();
});
map3.on('mouseout', () => {
  popup.remove();
});


//map2 will show the historic-districts using the csv method

</script>