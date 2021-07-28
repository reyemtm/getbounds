---
layout: post
title: Query Elevations using USGS and GMRT
subtitle: Enhance GeoJSON with SRTM and USGS 3DEP Elevation Data
date: 2021-06-10T18:30:53.949Z
img: usgs_elevations.png
tags: '["nodejs", "geojson"]'
featured: false
---
Both the [USGS](https://nationalmap.gov/epqs/) and the [GMRT](https://www.gmrt.org/services/index.php) provide APIs to query elevations at a given location. Using these APIs, and with a bit of help from [TurfJS](https://turfjs.org), we can easily enhance geographic data with elevations. The example below uses a simple Node script called `elevation-query` which exposes the global variable `elQ`. The tool takes in an array of points and returns an array of elevations for each point as well as a GeoJSON FeatureCollection of point features with elevation in the coordinates. Elevations are in meters. 

```JavaScript
elQ.getElevations([[-82,39], [-82,40]])
```

The USGS API uses data from the [3DEP program](https://www.usgs.gov/core-science-systems/ngp/3dep) where available, and the GMRT API uses data from the [STRM 30 meter dataset](https://www2.jpl.nasa.gov/srtm/) as well as bathymetry data.

<iframe width="100%" height="401" frameborder="0"
  src="https://observablehq.com/embed/@reyemtm/query-elevations-using-usgs-and-gmrt?cells=canvasContainer"></iframe>

It is also possible to create the point array from a GeoJSON LineString by using the included **getPointArray()** function. This function works by virtually slicing the line using the given **max** parameter, then returning the endpoint of each slice as well as the fist and last point of the line. This is done using the **turf.along()** function, starting at zero and retrieving a point along the line every **x** meters, where **x** is the length of the line divided by the number of slices.

In order to use USGS as the provider it needs to be specified in the options. This API will use data from the 3DEP program where available, and fallback to the SRTM 30 meter data if the 3DEP is not available for that location.

```JavaScript
elQ.getElevations(pointArray, {provider: 'usgs'})
```

### References

[https://observablehq.com/@reyemtm/query-elevations-using-usgs-and-gmrt](https://observablehq.com/@reyemtm/query-elevations-using-usgs-and-gmrt)
