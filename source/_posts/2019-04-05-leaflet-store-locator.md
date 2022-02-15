---
layout: post
title: Leaflet Store Locator
subtitle: A Leaflet Version of the Original Mapbox JS Store Locator Example
date: 2019-04-05 11:57:15
tags:
 - mapbox
 - leaflet
featured: true
img: storelocate.png
repo: https://github.com/reyemtm/leaflet-store-locator/
categories: ["blog"]
---

This simple, responsive store locator is based on the original [Mapbox JS](https://www.mapbox.com/help/building-a-store-locator/) example, tweaked to use Leaflet 1.0 and custom icons. The sidebar uses a jQuery filter function (thanks jsfiddle). The nearest store function uses TurfJS, based loosely on [this example](https://www.mapbox.com/blog/coffee-with-turf/). The production version uses [surge.sh](https://surge.sh) for deployment. This app was originnally created in collaboration with Nick Kroncke for [Shagbark](https://shagbarkmill.com/).

<iframe src="https://reyemtm.github.io/leaflet-store-locator/demo.html" allowfullscreen="true" mozallowfullscreen="true" webkitallowfullscreen="true" width="100%" height="700" frameborder="0" style="border: solid thin lightgray;"></iframe>
