---
layout: post
title: Serving Vector Tiles
subtitle: A Quick Look at Five Vector Tile Servers
date: 2019-04-05 12:08:36
tags:
 - mapbox
 - vector tiles
featured: false
draft: true
img: serving-vector-tiles.jpg
---
## Tegola

``./tegola cache seed --bounds -84,38,-81,42 --max-zoom 18 ``

### Benefits
- Can read from postgis database
- Caching option

### Issues
- Cannot convert from EPSG:3735 to EPSG:3857 (NAD 83 Ohio SP South to Web Mercator)
- On-the-Fly tile creation is slow compared to t_rex and geojson-vt but it does have a caching option

## geojson-vt NodeJS Server

#### Benefits
- Written in vanilla JavaScript
- Simple
- Fast

#### Issues
- Tile artifacts in Mapbox GL JS

## t_rex

#### Issues
- PostgreSQL as a datasource not working
- Tile artifacts in Mapbox GL JS
- Slower than the Node Server

## Geoserver

#### Benefits
- OGC Compliant server with WMS, WFS, WFS-T, raster tiles, vector tiles and and raw data files
- WMS searching for layer search
- Has it's own caching system
- Can use a variety of data sources from PostGIS to shapefiles and more


#### Issues
- Resource heavy
- Complicated setup and configuration
- Tile artifacts in Mapbox GL JS

## D.I.R.T HTTP API

#### Benefits

#### Issues