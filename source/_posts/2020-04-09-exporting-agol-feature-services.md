---
layout: post
title: Exporting AGOL Feature Services
subtitle: A Simple Method to Export an ArcGIS Online Feature Service to GeoJSON
date: 2020-04-09T17:39:25.792Z
img: /assets/img/screenshot-codepen.io-2020.04.10-09_55_09.png
tags: esri
style:
  code: |-
    .none {
      display: none;
    }
header: none
featured: false
---
Recently in my day job I had the need to pull data from ArcGIS Online into my custom Mapbox web maps. While it would be possible to simply use the WMS publishing feature in AGOL and display this layer, what would be ideal is to have access to the raw data. In addition, this data needs updated on a daily basis, so manually downloading a copy is out of the question. While iIt is possible to query a feature service and return GeoJSON, some of the features exceed the default ``maxRecordsCount`` in AGOL. 