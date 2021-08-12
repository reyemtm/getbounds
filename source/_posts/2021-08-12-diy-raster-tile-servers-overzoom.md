---
layout: post
title: DIY Raster Tile Servers | Overzoom
subtitle: Utilizing NodeJS to Implement 2x Overzoom
date: 2021-08-12T13:54:22.764Z
img: https://unsplash.com/photos/orEnWh0zdyw/download?force=true&w=1920
tags: raster tile
featured: true
---
One of the benefits from running an open source raster tile server and is total control over what gets returned to the client. In the [wmts-server](https://github.com/reyemtm/wmts-server) project I aim to extent the `maxzoom` of all raster tile endpoints by two levels. While the current function only uses a very basic method to create the necessary tile from its parent or grandparent tile, the outcome is very usable for web mapping.

<div style="columns:2">
<span style="width:48%;margin:1%;">![](/assets/img/overzoomx2tile.png)</span>
<span style="width:48%;margin:1%;">![](/assets/img/original_tile.png)</span>
</div>

## Why?

Why might I want to do this? In many web map libraries such as Leaflet and Mapbox GL JS, the renderer allows for native overzoom, so if your app is using one of these libraries enabling overzoom on the tile server might not seem necessary. However this is not the case across the board. For example, as of late summer 2021, ArcGIS Online will not show any raster tiles beyond what can be fetched from the tile server. Since these users all access the GIS data via Esri clients, I often ran into this limitation. In addition, the difference in total size of a raster tile file tree or `mbtiles` file cached to zoom level 20 and zoom level 21 is almost 2x. But what if we could cache our raster data to zoom level 20, and still allow all our clients, regardless of the map library, to access raster tiles to zoom level 22