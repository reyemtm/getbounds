---
layout: post
title: "QGIS Tutorial: Contours"
subtitle: Create Smooth Contours from a DEM
date: 2021-10-28T17:32:14.192Z
img: dem_cover.jpg
tags: qgis
featured: false
---


The contour tool in QGIS only works on an entire DEM, so if this is not desired, the raster needs to be clipped first.



If the raster needs clipped, use the clip tool from the QGIS processing toolbox. Once you have the proper sized DEM, from the QGIS toolbar, choose ``Raster->Extraction->Contour``, using the appropriate interval for the desired contours. The interval will be in the units of the raster projection. In this example the DEM was downloaded from [Ohio's Open Data](https://ogrip.oit.ohio.gov/ProjectsInitiatives/OSIPDataDownloads.aspx) site and is in NAD83 State Plane, so we will be using 10 feet.



![Digital Elevation Model with false color and contours.]()



The resulting contours will be very detailed and not all that suitable for cartography or web mapping. To get a traditional smoothed topographic line the contours first need to be generalized. This can be accomplished in QGIS using the ``simplify`` and ``smooth`` tools.



Use the `simplify` tool, start with a tolerance of 2, leaving all other settings as defaults. If the result is still too detailed, try a higher simplification tolerance. In this instance I decided to go with a tolerance of 10.



While the simplify tool does lessen the amount of vertices, it also creates sharp angles compared with the original contours. To create the generalized contours that you are used to seeing on a topographic map,  simply run these simplified contours through the QGIS `smooth` tool.



![Original contours (in black) with simplified contours overlay (in blue).]()

The `smooth` tool takes in three parameters: iterations, offset and maximum angle.


> The iterations parameter dictates how many smoothing iterations will be applied to each geometry. A higher number of iterations results in smoother geometries with the cost of greater number of nodes in the geometries.



As with the previous tool, start with a low value for the iterations until you find a value that creates the desired output. For this example I am using 5, which results in a fairly smooth and simplified set of contours as can be seen in the image below.



![Smooth contours with hillshade.]()



*This article was inspired by this post on GIS StackExchange* - [https://gis.stackexchange.com/questions/276897/producing-smooth-and-consistent-contour-lines-from-srtm](https://gis.stackexchange.com/questions/276897/producing-smooth-and-consistent-contour-lines-from-srtm)