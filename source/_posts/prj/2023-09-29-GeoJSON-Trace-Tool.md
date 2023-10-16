---
layout: project
title: GeoJSON Network Trace Tool
subtitle: Trace a GeoJSON Linear Network in the Browser
author: Malcolm Meyer
img: geojson-trace.png
tags:
  - mapbox
  - web maps
categories: 
 - projects
date: 2023-09-23
published: true
project:
  - 
    url: https://reyemtm.github.io/geojson-network-control
    iframe: https://reyemtm.github.io/geojson-network-control/#12.85/39.94767/-82.00338
    repo: https://github.com/reyemtm/geojson-network-control
    images: ["geojson-trace"]
    description: "GeoJSON Network Trace is a Mapbox GL JS plugin which enables upstream and downstream network tracing for seamless point and linear GeoJSON data. It was created as a quick and simple method to validate linear storm and sewer networks. In the original version I utilized TurfJS and `booleanPointOnLine()`, however this was too resource intensive. I swapped this method out for a simple for loop on the coordinate array of each line in the network to check for the existence of the origin point.
    

    For more background on this tool see [this blog post](/blog/network-tracing-with-turfjs/)."
    client: "Employer"
---
