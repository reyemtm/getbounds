---
title: Conkle's Hollow Fall Hike
subtitle: Mapping GPS Tracks with Leaflet
tags:
  - leaflet
layout: post
description: >-
  Using the Leaflet Elevation plugin to show a the elevation cross-section of a
  GPS track recorded with MyTracks at Conkle's Hollow Nature Preserve in the
  Hocking Hills region of Ohio.
img: c-hollow.png
date_updated: 2019-04-10 00:00:00
date: 2015-10-12 00:00:00
categories: ["blog"]
---
One of the benefits of using the open source Leaflet mapping library is the wide variety of available community supported plugins. This simple map uses two great plugins - [Leaflet Elevation](https://github.com/MrMufflon/Leaflet.Elevation) and [Leaflet Ajax](https://github.com/calvinmetcalf/leaflet-ajax). The ajax plugin provides a simple way to load data, while the elevation plugin shows elevation from a GeoJSON file in an interactive chart, added to the map as a Leaflet Control. The GeoJSON file must include coordinates.

```Javascript
var example = [
        -82.572833,
        39.454684,
        235
    ]
```

The plugin is easy to style using css, which is good because I am not a fan of the default themes. I did notice a bug when using the ``imperial: true`` option. The vertical line coming off the hike path disappears when using this option, but otherwise it works as expected. This is another simple way to show data on a map with minimal effort. The plugin does require the D3 library.

<iframe src="/apps/conckles-hollow-hike.html" width=100% height="400px" frameborder=0 style="border: solid thick #1c1d21;"></iframe>