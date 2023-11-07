
---
layout: project
title: MapCompare
subtitle: Rendering Comparisons of Vector Tiles and COGs in Web Mapping Libraries
author: Malcolm Meyer
img: map-compare.png
tags:
  - web maps
categories: 
 - projects
date: 2023-11-07
published: true
iframeHeight: 800
project:
  - 
    url: https://reyemtm.github.io/map-compare/v2-cog/?map=ol
    iframe: https://reyemtm.github.io/map-compare/v2-cog/?map=ol
    repo: https://github.com/reyemtm/map-compare
    images: ["map-compare", "map-compare-ii"]
    description: >-
      MapCompare was originally created as a demonstration to compare the overall experience of utilizing vector tiles in various web map libraries. During FOSS4G2024 I added a comparison of loading cloud-optimized GeoTIFFs directly from object storage. I could only find COG support for OpenLayers and Leaflet, but will update the project if other libraries add support in the future.
      
      
      While I have not done any true performance testing, in the case of vector tiles, Mapbox feels the smoothest of all four libraries, and has one of the fastest if not the fastest load times. For the COG rendering, OpenLayers has a clear advantage over Leaflet, with sharper rendered tiles and faster load times for subsequent zoom levels. 
    client: Demo
---
