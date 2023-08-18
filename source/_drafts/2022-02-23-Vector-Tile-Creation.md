---
layout: draft
title: Vector Tile Creation
subtitle: Various Methods to Generate Vector Tiles
author: Malcolm Meyer
tags:
  - vector tiles
  - mapbox
date: 2022-09-15 09:54:00
---
## Tools

### QGIS

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
 - Output a directory of folders or an `.mbtile` sqlite file.