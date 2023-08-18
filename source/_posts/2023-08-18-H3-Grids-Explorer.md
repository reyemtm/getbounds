title: H3 Grids Explorer
subtitle: A Web Tool for Exoploring H3 Grid Levels
author: Malcolm Meyer
img: h3-grids.jpg
tags:
  - web maps
categories:
  - blog
date: 2023-08-18 07:45:00
---
What are [H3 grids](https://h3geo.org/)? Created by Uber Engineering, the H3 grid system divides the Earth's surface into a hierarchical hexagon grid structure. Each hexagon is assigned a unique index based on its position in the hierarchy, allowing for efficient spatial indexing and querying.

```
{
  level: 5
  grid: "8529ab6bfffffff"
}
```

How does this compare to other geospatial grid indexing systems? The [H3 docs](https://h3geo.org/docs) website has several examples including comparisons to [S2](https://h3geo.org/docs/comparisons/s2), [Geohash](https://h3geo.org/docs/comparisons/geohash), and [Hexbins](https://h3geo.org/docs/comparisons/hexbin). In general, H3 grids offer an equal area system with reusable grid identifiers, all with an equal number of neighbors, making it useful for analyzing disparate geographic data.

When using H3 grids in a project, it is important to understand which grid hierarchy or level would be suitable for your analysis. Facing this question in a recent project, I created a simple tool for exploring H3 grid levels in an interactive web map. The tool adjusts the grid level as you zoom in and out, and allows you to 'freeze' the grid at a specific level. This allows you to explore how a specific H3 grid level would look over your geographic region of interest.

<iframe id="grid-iframe" src="https://h3grids.getbounds.com" height="600" width="100%"></iframe>

<button style="float:right;border=none;background:transparent;cursor:pointer"><em>View fullscreen</em></button>

<script>
  const iframe = document.querySelector("#grid-iframe")
  const button = document.querySelector('em');
  button.addEventListener('click', () => {
    iframe.requestFullscreen()
  })
</script>