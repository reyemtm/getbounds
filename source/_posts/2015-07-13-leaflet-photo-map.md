---
title: Leaflet Photo Map
date_updated: 2018-10-28
date: 2015-07-13 00:00:00 Z
tags:
- leaflet
layout: post
description: This web map is an example of the Leaflet Photo plugin using photos from
  a family vacation in 1985. Photos include Yellowstone, Watertown Park, Baraboo Circus
  Museum and a Sod House.
subtitle: A Trip Out West circa 1985
plugins:
- photo-map
map: leaflet
header-img: header-vacay-2.png
img: header-vacay-2.png
---

*Update: This map originally used Google's Picasa Web API, but this will [soon be shut down](https://developers.google.com/picasa-web/). Instead of migrating to another Google service, I simply extracted the EXIF data from the photos ([using this tool](http://www.br-software.com/extracter.html)). The resulting csv was converted to json, which worked as a drop-in replacement for former Picasa feed.*

<iframe src="/apps/photo-map.html" width="100%" height="600px" frameborder="0" style="border: solid thick #1c1d21;"></iframe>

This is an example of the [Leaflet.Photo](https://github.com/turban/Leaflet.Photo) plugin, based almost entirely on Bjørn Sandvik's post [here](http://blog.thematicmapping.org/2014/08/showing-geotagged-photos-on-leaflet-map.html). I did add a tweak that adjusts the photo when opened to a percentage of the size of the map div, but other than that I followed his example and the result is really cool. These are photos long since forgotten, of a trip my family took out west back in 1985. Most of the pictures were taken with a Kodak Disc 4000, or a similar model. Sod houses, the Lower Falls, Mount Rushmore, buffalo...it's all here.