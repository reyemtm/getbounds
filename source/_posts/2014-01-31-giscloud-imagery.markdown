---
title: 'Desktop to the Cloud: GIS Cloud and Rasters'
date: 2014-01-31 21:00:00 Z
tags:
- esri
layout: post
categories: ["blog"]
---
One of the clients I work with utilizes unmanaged raster catalogs as part of their work flow. We manage over 20 raster catalogs with close to 4gb of imagery in both georeferenced jpgs and regular tifs. The imagery is black and white for the most part, some using the cg4 compression to get insanely small file sizes. We are now in the process of moving to the cloud, and they have chosen www.giscloud.com for their hosting, for reasons beyond the scope of this short post. The question: how to get these raster catalogs - which multiple images stitched together via the catalog with no data set so that they can overlap - into one image, small in file size and readable on the cloud.

The answer to this should be simple, just use one of the various mosaic tools in ArcMap. Well that path turned into a day of crashes and half-stitched images with nothing much to show for my work. Data Management/Raster/Raster Dataset/Mosaic gave the most favorable results. This method copies a series of rasters into another destination raster. However, in the cloud I did not have the option to adjust the display parameters such as nearest neighbor to bilinear. As these images are very compressed and include small text, I need the images smoothed out with bilinear re-smapling in order to make the text more readable. The solution: export large-scale jpg layouts.

You can export image maps from Arc either via the data view or layout view. The one advantage of exporting via data view is that the world file is automatically created. However, in this project, to get a satisfactory image I had to export at 1400 dpi. So I chose to export via layout view, with a layout close to ANSI E and image type jpg at 400 dpi/60% compression. The one caveat here is that in layout view you cannot export a world file with jpgs. The workaround is to create a bookmark for the extent of your layout. Then you can switch to data view, import the image, and it will already be in place when you georeference it, you just have to update georeferencing. However, this does not always create a world, necessary for the cloud server. This is a simple fix, just go to Data Management/Raster/Raster Properties/Export Raster World File. I created a simple model to batch-export the world files for all the rasters.
