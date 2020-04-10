---
layout: post
title: Exporting AGOL Feature Services
subtitle: Using NodeJS to Export an ArcGIS Online Feature Service to GeoJSON
date: 2020-04-09T17:39:25.792Z
img: agol-cache2.png
tags: esri
style:
  code: |-
    .none {
      display: none;
    }
header: none
featured: false
---
Recently I had the need to pull data from ArcGIS Online into my custom Mapbox web maps. While it would be possible to simply use the WMS publishing feature in AGOL and display this layer, what would be ideal is to have access to the raw data. In addition, this data needs updated on a daily basis, so manually downloading a copy is out of the question.

While it is possible to query a feature service and return GeoJSON, some of the features exceed the default `maxRecordsCount` in AGOL. To get around this limitation I followed the advice from [this post](https://blog.cartong.org/2019/03/29/harvesting-large-quantity-data-from-arcgis-rest-services-using-tool/) and created a simple NodeJS tool to export all the layers listed in the feature service definition to GeoJSON -  [agol-cache](https://www.npmjs.com/package/agol-cache) .

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

To run the tool simply define a valid Feature Service url and an optional path to extract the GeoJSON files.

```JavaScript
const cache = require('agol-cache');

const urls = [
  'https://services9.arcgis.com/IUhP9plEzDTayUVC/arcgis/rest/services/Water_System_View/FeatureServer'
]

cache(urls[0], { folder: './agol-cache' })
```

The tool works with ArcGIS Online Feature Services and has not been tested with Map Services or services published from ArcGIS Server. While the tool accomplishes everything needed for this use case, pull requests for additional features are welcome.

Now even after extracting the data to GeoJSON, the data is still not ready to be pulled into a Mapbox web map. This is due to the fact that, as stated above, some of the files are extremely large and should not be loaded directly into the client. The next step in my workflow is to cut the raw data larger than two megabytes into vector tiles using [geojson2mvt](https://www.npmjs.com/package/geojson2mvt).



Test