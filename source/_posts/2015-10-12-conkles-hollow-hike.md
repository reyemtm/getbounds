---
title: Conkle's Hollow Fall Hike
date: 2019-04-10
datefirstposted: 2015-10-12 00:00:00 Z
tags:
- leaflet
layout: post
description: Using the Leaflet Elevation plugin to show a the elevation cross-section of
  a GPS track recorded with MyTracks at Conkle's Hollow Nature Preserve in the Hocking
  Hills region of Ohio.
subtitle: Mapping GPS Tracks
img: c-hollow.jpg
---

One of the great things about the Leaflet mapping library is the wide variety of community supported plugins. This simple map uses two great plugins - [Leaflet Elevation](https://github.com/MrMufflon/Leaflet.Elevation) and [Leaflet Ajax](https://github.com/calvinmetcalf/leaflet-ajax). The ajax plugin is provides a simple way to load data, while the elevation plugin does just that - shows the elevation from a GeoJSON file in a nice little chart, added to the map as a Leaflet Control. If using a GeojSON file, the coordinates need to have a z value, for example
```
[
    -82.572833,
    39.454684,
    235
]
```
The plugin is easy to style using css, which is good because I am not a fan of the default themes. I did notice a bug when using the ``imperial: true`` option. The vertical line coming off the hike path disappears when using this option, but otherwise it works as expected. This is another simple way to show data on a map with minimal effort. The only requirements are D3 and the elevation plugin library.

<iframe src="/apps/conckles-hollow-hike.html" width=100% height="600px" frameborder=0 style="border: solid thick #1c1d21;">


