---
layout: post
title: Creating a DIY Raster Tile Server | Overzoom
subtitle: Utilizing NodeJS to Implement 2x Overzoom
date: 2021-08-12T13:54:22.764Z
img: lazy_camera_girl-orenwh0zdyw-unsplash.jpg
tags: raster tile
featured: true
---
One of the benefits from running an open source raster tile server and is total control over what gets returned to the client. In the [wmts-server](https://github.com/reyemtm/wmts-server) project I aim to extent the `maxzoom` of all raster tile endpoints by two levels. While the current function only uses a very basic method to create the necessary tile from its parent or grandparent tile, the outcome is very usable for web mapping.

<div style="columns:2">
<span style="width:48%;margin:1%;">![](/assets/img/overzoomx2tile.png)</span>
<span style="width:48%;margin:1%;">![](/assets/img/original_tile.png)</span>
</div>

## Why?

Why might I want to do this? In many web map libraries such as Leaflet and Mapbox GL JS, the renderer allows for native overzoom, so if your app is using one of these libraries enabling overzoom on the tile server might not seem necessary. However this is not the case across the board. For example, as of late summer 2021, ArcGIS Online will not show any raster tiles beyond what can be fetched from the tile server. Since these users all access the GIS data via Esri clients, I often ran into this limitation. In addition, the difference in total size of a raster tile file tree or `mbtiles` file cached to zoom level 20 and zoom level 21 is almost 2x. But what if we could cache our raster data to zoom level 20, and still allow all our clients, regardless of the map library, to access raster tiles to zoom level 22 (native max zoom level x2) or even to level 23, which is the furthest zoom level supported by ArcGIS Online.

## Idea

Since we have access to the actual tile server, the idea is simple: when the client requests a tile beyond the maximum zoom level of the tile cache, we fetch the parent tile from the database, expand this image (tile width x 2, or 512x512 in this case), and clip our the requested portion of the parent tile. As the missing zoom levels increase, we simply repeat this process until we have the desired child tile to send to the client. 

Initially I though that using some sort of Artificial Intelligence to enhance the existing parent tile would be necessary, but after failing to find a working AI library for NodeJS, I quickly abandoned this idea. It turns out that the result of the expand and clip method works perfectly fine, and the image clarity as compared to the overview representation of the original tiff image is about even - see the sample images above.

# Implementation

The resulting `OverZoom` function uses the `sharp` library to expand and clip the tiles, and the `tilebelt` library for fetching the parent tiles.

```JavaScript

```

