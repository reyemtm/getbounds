---
layout: post
title: Generating Cloud Optimized GeoTIFFs and Raster Tiles with GDAL
subtitle: "TLDR: gdalbuildvrt, gdal_translate, gdal_warp and gdaladdo"
date: 2021-09-02T17:38:58.483Z
img: cover_dem_rivers_wide.png
tags: gdal
featured: true
---
## Overview

* Load raw TIFFs into QGIS
* Load reference GPS points
* Check the accuracy of the raw TIFFs
* Create a mosaic
* Create a Cloud Optimized GeoTIFF from the mosaic in your desired projection and transformation
* Create another COG or mosaic in EPSG:3857

  * Create an MBTiles database from the TIFF created above
  * Add additional overviews to the MBTiles database
  * Serve with an mbtiles server OR extract the raw files and serve with a web server

    * **OR** 
* Use COG in WebMercator as the input for the tile server

  * Split the COG into 3 separate bands
  * Serve with Terracotta

- - -

## Build a Mosaic

[GDAL Build VRT Reference](https://gdal.org/programs/gdalbuildvrt.html)

Build the mosaic using only the first three bands and adding a fourth alpha band to allow for transparency. 

> Generating a new alpha band will allow the COG created in the next step to have transparency on the edges and not in the black or white values.

```bash
gdalbuildvrt -b 1 -b 2 -b 3 -addalpha mosaic.vrt REF/*.tif
```

- - -

## Generate a Cloud Optimized GeoTIFF in NAD83

[GDAL Translate Reference](https://gdal.org/programs/gdal_translate.html)

[COG Driver Reference](https://gdal.org/drivers/raster/cog.html)

> The COG generated from GDAL is much smaller than the output from Arc*. In testing the ArcGIS Pro countywide export took over a week and was canceled.

```bash
gdal_translate mosaic.vrt cog.tif -a_srs EPSG:3735 -of COG -co COMPRESS=JPEG -co BIGTIFF=YES -co QUALITY=85
```

- - -

## Generate a COG or Virtual Raster in WebMercator EPSG:3857

[GDAL Warp Reference](https://gdal.org/programs/gdalwarp.html)

> The COG or VRT will be used as the input for the raster tiles.

**COG**

```bash
gdalwarp mosaic.vrt cog_web.tif ^
-t_srs EPSG:3857 ^
-s_srs "+proj=lcc +lat_0=38 +lon_0=-82.5 +lat_1=40.0333333333333 +lat_2=38.7333333333333 +x_0=600000 +y_0=0 +ellps=GRS80 +towgs84=-0.9956,1.9013,0.5215,0.025915,0.009246,0.011599,-0.00062 +units=us-ft +no_defs" ^
-of COG -co COMPRESS=JPEG -co BIGTIFF=YES -co QUALITY=85
```

**VRT**

```bash
gdalwarp cog.tif web.vrt ^
-t_srs EPSG:3857 ^
-s_srs "+proj=lcc +lat_0=38 +lon_0=-82.5 +lat_1=40.0333333333333 +lat_2=38.7333333333333 +x_0=600000 +y_0=0 +ellps=GRS80 +towgs84=-0.9956,1.9013,0.5215,0.025915,0.009246,0.011599,-0.00062 +units=us-ft +no_defs" ^
-of VRT ^
-dstalpha ^
-et 0 ^
-r lanczos ^
-overwrite
```

**Notes**

**Command Line Options**

\-t_srs	: Target COG projection
-s_srs	: Override the source projection with our custom transformation
-of		 : Out Format - in this case vrt
-dtsalpha: Force the creation of an alpha band for transparency, overriding any existing alpha band
-et		 : Maximum error threshold for the reprojection, set to zero
-r		   : Resampling method - **the default leads to artifacts, both lanczos and cubic created good results**
-overwrite: Overwrite the existing file if one exists

- - -

## Generate Tiles with gdal_translate and gdaladdo

[GDAL Translate Reference](https://gdal.org/programs/gdal_translate.html)

[GDAL MBTiles Driver Reference](https://gdal.org/drivers/raster/mbtiles.html)

```bash
gdal_translate -of MBTILES ^
--config GDAL_NUM_THREADS ALL_CPUS ^
-co ZOOM_LEVEL_STRATEGY=LOWER ^
-co RESAMPLING=CUBIC ^
-co TILE_FORMAT=PNG ^
web.vrt tiles.mbtiles
```

```bash
gdaladdo tiles.mbtiles -r cubic 2 4 8 16 32 64 128 256
```

**Notes**

* Creating the tiles from the COG is much faster than from using the raw TIFF mosaic.
* Using the `UPPER` parameter does create sharper tiles at the highest zoom level, but creates a file 3-4x as large as using the `LOWER` parameter since it creates the tiles at one zoom level higher.
* Three are many resampling options, but  I found the `CUBIC` setting to create good results.

  * **RESAMPLING**=NEAREST/BILINEAR/CUBIC/CUBICSPLINE/LANCZOS/MODE/AVERAGE. Defaults to BILINEAR.

- - -

## Other Methods

These methods create satisfactory outputs, but can cause projection shifts. These may still be satisfactory for imagery where precise accuracy is not as important. In addition, the QGIS tool exports the rendered map, not just the raster, allowing for the creation of tiled custom basemaps.

* gdal2tiles
* QGIS Generate XYZ Tiles (directory & mbtiles)

**GDAL**

```bash
python.exe scripts/gdal2tiles.py -xyz -z 0-18 input/cog.tif output/tiles
```

## References

<https://alastaira.wordpress.com/2011/07/11/maptiler-gdal2tiles-and-raster-resampling/>

<https://gitlab.com/GitLabRGI/geopackage-python/blob/master/Packaging/tiles2gpkg_parallel.py>

<https://gitlab.com/GitLabRGI/geopackage-python/blob/master/Tiling/gdal2tiles_parallel.py>