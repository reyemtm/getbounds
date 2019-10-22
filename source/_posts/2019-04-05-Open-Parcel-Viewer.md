---
layout: post
title: Open Parcel Viewer
subtitle: A Client-Side Parcel Viewer built with Leaflet
date: 2019-04-05 12:08:56
tags:
 - leaflet
 - projects
img: open-parcel-viewer-web.jpg
code: https://github.com/ovrdc/parcel-viewer
demo: https://ovrdc.github.io/parcel-viewer
---
The Open Parcel Viewer is a client-side application written in plain javascript and jquery. It is capable of rendering up to 50k polygons on desktop and mobile. The app uses Leaflet as the mapping api and Jekyll as a build tool. Color, initial map center/zoom and the search field can be defined in the yaml front matter, with minimal to zero extra coding needed. The polygons should be in topojson format.

<div id="iframe"><img id="img" src="/assets/img/open-parcel-viewer-web.jpg"></div>

For more on the backstory of the Open Parcel Viewer check out my post on [Leaflet & GeoJSON Tiles](blog/leaflet-and-geojson-tiles/)


<script>
var iframe = document.getElementById('img');
iframe.addEventListener('click', function() {
  this.parentElement.innerHTML = '<iframe src="https://ovrdc.github.io/parcel-viewer" allowfullscreen="true" mozallowfullscreen="true" webkitallowfullscreen="true" width="100%" height="460" frameborder="0" style="border: solid thick #333;"></iframe>'
});
</script>