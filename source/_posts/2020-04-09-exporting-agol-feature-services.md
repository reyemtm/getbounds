---
layout: post
title: Exporting AGOL Feature Services to GeoJSON
subtitle: Using NodeJS and Batches to Transform an ArcGIS Online Feature Service
  to GeoJSON
date: 2020-04-27T23:32:02.125Z
img: agol-cache2.png
tags: esri, nodejs
style:
  code: |-
    .none {
      display: none;
    }
header: none
featured: false
---
Recently I had the need to pull data from ArcGIS Online into my custom Mapbox web maps. While it would be possible to use the WMS publishing feature in AGOL to display this layer, what would be ideal is to have access to the raw data. The data also needs updated on a regular basis, so manually downloading a copy is out of the question.

Another method to view this data would be to query a feature service directly from AGOL and return GeoJSON. While this would work from some of the layers, a few exceed the default `maxRecordsCount` in AGOL. To get around this limitation I followed advice from [this post](https://blog.cartong.org/2019/03/29/harvesting-large-quantity-data-from-arcgis-rest-services-using-tool/). The result is a NodeJS tool that extracts all the layers from a Feature Service URL and exports them all to GeoJSON. It does this by downloading the individual features in batches until all the features have been extracted. The tool [agol-cache](https://www.npmjs.com/package/agol-cache) is available on npm and GitHub.

A sample of the service definition can be found below.
```JavaScript
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
```

To run the tool provide a valid Feature Service url and an optional path to extract the GeoJSON files.

```JavaScript
const cache = require('agol-cache');

const urls = [
  'https://services9.arcgis.com/IUhP9plEzDTayUVC/arcgis/rest/services/Water_System_View/FeatureServer'
]

cache(urls[0], { folder: './agol-cache' })
```

The tool works with ArcGIS Online Feature Services and has not been tested with Map Services or services published from ArcGIS Server. 