---
layout: post
title: Open Parcel Viewer
subtitle: A Client-Side Parcel Viewer built with Leaflet
date: 2019-04-05 12:08:56
tags:
 - leaflet
 - projects
img: open-parcel-viewer-web.png
code: https://github.com/ovrdc/parcel-viewer
demo: https://ovrdc.github.io/parcel-viewer
categories: ["blog"]
---
The Open Parcel Viewer is a client-side application written in plain javascript and jquery. It is capable of rendering up to 50k polygons on desktop and mobile. The app uses Leaflet as the mapping api and Jekyll as a build tool. Color, initial map center/zoom and the search field can be defined in the yaml front matter, with minimal to zero extra coding needed. The polygons should be in topojson format.

<iframe src="https://reyemtm.github.io/parcel-viewer/#11/38.8103/-82.3933" allowfullscreen="true" mozallowfullscreen="true" webkitallowfullscreen="true" width="100%" height="460" frameborder="0" style="border: solid thick #333;"></iframe>

For more on the backstory of the Open Parcel Viewer check out my post on [Leaflet & GeoJSON Tiles](blog/leaflet-and-geojson-tiles/)