---
layout: draft
title: Vector Tile Creation
subtitle: Three Methods to Generate Vector Tiles from the Command Line
author: Malcolm Meyer
tags:
  - vector tiles
  - mapbox
  - open data
date: 2022-02-23 09:54:00
---
## Tools

### ogr2ogr
 - You probably already have this installed on your machine
 - Does not seem to produce accurate metadata
 - Vector tile output is not as clean as other methods (show image here)

### tippecanoe
 - Advanced tool with a large number of settings
 - can merge multiple files into one set of tiles
 - has support for very large datasets, especially when using line-delineated GeoJSON

### vtile
 - Installs with a simple `npm install -g vtile` or run via `npx vtile`
 - No support for multiple files (not yet)
 - Support for large files dependent on available memory (Node setting)
 - Tile creation uses the same library used in Mapbox GL JS <= v1.3.0