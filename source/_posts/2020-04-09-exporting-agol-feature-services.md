---
layout: post
title: Exporting AGOL Feature Services to GeoJSON
subtitle: Using NodeJS and Batches to Transform an ArcGIS Online Feature Service
  to GeoJSON
date: 2020-04-27T23:32:02.125Z
img: agol-cache2.png
tags: 
 - esri
 - javascript
 - nodejs
featured: false
---
Recently I had the need to pull data from ArcGIS Online into a Mapbox GL JS web map. While it would be possible to use the WMS publishing feature in AGOL to display this layer, what would be ideal is to have access to the raw data. The data also needs updated on a regular basis, so manually downloading a copy from AGOL is not an option.

Another method to view this data would be to query the feature service directly from AGOL and return GeoJSON using something similar to the query below.

<pre><code>
var geojson = "https://services9.arcgis.com/IUhP9plEzDTayUVC/ArcGIS/rest/services/Muskingum_County_Benchmarks/FeatureServer/0/query?where=fid+%3E+0&f=pgeojson"
</code></pre>

While this would work for some layers, a few exceed the default `maxRecordsCount` in AGOL. To get around this limitation I followed the advice from [this post](https://blog.cartong.org/2019/03/29/harvesting-large-quantity-data-from-arcgis-rest-services-using-tool/). The basic method described is to batch download the features from each layer until all of the features have been extracted. I turned this method into a NodeJS tool that does just that. Give it an AGOL Feature Service url and it will find all the layers and extract all the features, saving them as GeoJSON. To find all the available layers, first the tool queries the service URL. The tool then creates an array of layers to download.

<pre><code>
"layers": [
  {
    "id": 0,
    "name": "Benchmarks",
    "parentLayerId": -1,
    "defaultVisibility": true,
    "subLayerIds": null,
    "minScale": 0,
    "maxScale": 0,
    "geometryType": "esriGeometryPoint"
  }
]
</code></pre>

This tool [agol-cache](https://www.npmjs.com/package/agol-cache) is available on npm and GitHub. It has not been thoroughly tested, as it does exactly what I need and nothing more. For example, while it would be possible to extract domains and values, this tool simply extracts the raw layer properties. 

A sample query using `agol-cache`.

<pre><code>
const cache = require('agol-cache');

const urls = [
  'https://services9.arcgis.com/IUhP9plEzDTayUVC/ArcGIS/rest/services/Muskingum_County_Benchmarks/FeatureServer'
]

cache(urls[0], { folder: './agol-cache' })
</code></pre>


*The tool works with ArcGIS Online Feature Services and has not been tested with Map Services or services published from ArcGIS Server.* 