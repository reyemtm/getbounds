---
layout: project
title: Tilequery
subtitle: Query Remote Vector Tiles in Node JS and the Browser
author: Malcolm Meyer
img: tilequery.jpg
date: 2021-01-01
tags:
  - node js
  - open source
categories: 
  - projects
published: true
project:
  -
    url: https://reyemtm.github.io/tilequery
    repo: https://github.com/reyemtm/tilequery/
    images: ["tilequery"]
    client: "Internal"
    iframe: https://reyemtm.github.io/tilequery
    description: >-
    
      Tilequery queries remote vector tiles and returns GeoJSON features within a bounding box or point buffer. The returned geometry is only as accurate as the data in the tiles. The less tiles that need queried (lower zoom level) the faster the response, but lower zooms have less accurate geometry, so the two factors need to be taken into account when utilizing tilequery.


      Polygons and lines will be returned if queried but are cut at the tile boundaries. In those cases it is usefull for querying feature properties but not feature geometry.

      
      <figure class="highlight php"><table><tbody><tr><td class="code"><pre><code class="hljs php"><span class="hljs-title function_ invoke__">tilequery</span>({<br>  <span class="hljs-attr">point</span>: [e.lngLat.lng, e.lngLat.lat], <br>  <span class="hljs-attr">radius</span>: <span class="hljs-number">0.1</span>,<br>  <span class="hljs-attr">units</span>: <span class="hljs-string">'miles'</span>,<br>  <span class="hljs-attr">tiles</span>: <span class="hljs-string">'https://reyemtm.github.io/tilequery/tiles/{z}/{x}/{y}.mvt'</span>,<br>  <span class="hljs-attr">layer</span>: <span class="hljs-string">'test'</span>, <br>  <span class="hljs-attr">zoom</span>: <span class="hljs-number">14</span>,<br>  <span class="hljs-attr">buffer</span>: <span class="hljs-literal">true</span><br>})<br></code></pre></td></tr></tbody></table></figure>


      A pre-built version is available on [GitHub](https://github.com/reyemtm/tilequery/tree/master/docs/dist) and [npm](https://www.npmjs.com/package/tilequery) and can be used directly in the browser with the global variable tilequery or in Node JS. The example below highlights points within 0.1 miles of the mouse pointer and returns feature properties in the sidebar.


      This project is based in part on the [vtquery](https://github.com/mapbox/vtquery) tool by Mapbox.
    

---