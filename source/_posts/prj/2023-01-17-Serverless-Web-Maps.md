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
    description: "This project uses the sql.js-httpvfs library to serve vector and raster tiles from mbtiles hosted on object storage. The mbtiles could live alongside the website or be hosted on any publicly accessible url. A service worker intercepts the tile requests then returns tile data from the mbtiles fetched using simple SQL queries."
    client: "Demo"
---