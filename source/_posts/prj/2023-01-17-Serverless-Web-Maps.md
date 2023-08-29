---
layout: project
title: Serverless Web Maps
subtitle: Using SQLite in the Browser and Service Workers to Power Web Maps from Object Storage
author: Malcolm Meyer
img: mbtiles-serverless-netlify.png
tags:
  - mapbox
  - web maps
categories: 
 - projects
 - featured
date: 2023-01-17
updated: 2023-08-25
featured: true
published: true
# Project Settings for new Projects Layout
project:
  - 
    url: https://mbtiles-serverless.netlify.app/
    tech:
      - Mapbox GL JS
      - Node JS
    images: ["mbtiles-serverless-netlify"]
    description: "This project uses the [sql.js-httpvfs](https://github.com/phiresky/sql.js-httpvfs) library to serve vector and raster tiles from mbtiles hosted on object storage. The mbtiles could live alongside the website or be hosted on any publicly accessible url. A service worker intercepts the tile requests then returns tile data from the mbtiles fetched using simple SQL queries.

    <figure class='highlight oxygene'><table><tbody><tr><td class='code'><pre><code class='hljs oxygene'><span class='hljs-keyword'>const</span> tileData = <span class='hljs-keyword'>await</span> worker.db.query(<br>  `<span class='hljs-keyword'>SELECT</span> tile_data<br>    <span class='hljs-keyword'>FROM</span> tiles<br>    <span class='hljs-keyword'>WHERE</span> zoom_level = ?<br>    <span class='hljs-keyword'>AND</span> tile_column = ?<br>    <span class='hljs-keyword'>AND</span> tile_row = ?`,<br>    [zoom, col, (<span class='hljs-number'>1</span> &lt;&lt; zoom) - <span class='hljs-number'>1</span> - row]<br>  )<span class='hljs-punctuation'>;</span><br></code></pre></td></tr></tbody></table></figure>
    "
    client: "Demo"
---