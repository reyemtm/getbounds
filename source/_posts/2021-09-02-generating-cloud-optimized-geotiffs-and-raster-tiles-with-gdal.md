---
layout: post
title: Generating Cloud Optimized GeoTIFFs and Raster Tiles with GDAL
subtitle: "TLDR: gdalbuildvrt, gdal_translate, gdal_warp and gdaladdo"
date: 2021-09-02T17:38:58.483Z
img: tiles.png
tags: gdal
style:
  code: ""
featured: true
---
The following outlines the basic steps for generating Cloud Optimized GeoTIFFs and raster tiles from one or more raw TIFF files.

## Create the Mosaic


[GDAL Build VRT Reference](https://gdal.org/programs/gdalbuildvrt.html)

> Separate the bands and add an alpha band that gdal can use.


```bash
gdalbuildvrt mosaic.vrt -b 1 -b 2 -b 3 -addalpha //path/to/tif/files/*.tif
```



## Create the Desktop Cloud Optimized GeoTIFF

[GDAL Translate Reference](https://gdal.org/programs/gdal_translate.html)

[COG Driver Reference](https://gdal.org/drivers/raster/cog.html)



> Force the NAD83 projection using either EPSG:6551 (NAD83 2011) or 3735.



```bash
gdal_translate mosaic.vrt cog.tif ^
-a_srs EPSG:6551 ^
-of COG -co RESAMPLING=CUBIC -co COMPRESS=JPEG -co BIGTIFF=YES ^
--config GDAL_CACHEMAX 9999 ^
--config GDAL_NUM_THREADS ALL_CPUS
```



## Create a Mosaic in WebMercator from the Original Mosaic



> Use the ITRF00 transformation suitable for both 6551 and 3735.



```bash
gdalwarp mosaic.vrt web.vrt ^
-t_srs EPSG:3857 ^
-s_srs "+proj=lcc +lat_0=38 +lon_0=-82.5 +lat_1=40.0333333333333 +lat_2=38.7333333333333 +x_0=600000 +y_0=0 +ellps=GRS80 +towgs84=-0.9956,1.9013,0.5215,0.025915,0.009246,0.011599,-0.00062 +units=us-ft +no_defs" ^
-dstalpha ^
-et 0 ^
-r lanczos ^
-of VRT ^
-overwrite
```



## Create the COG in WebMercator for use in a COG Server

[GDAL Warp Reference](https://gdal.org/programs/gdalwarp.html)



*If you want to use the COG in ArcGIS Server then use JPEG compression.*



> Using the default resampling works fine as does AVERAGE, BILINEAR and CUBIC (default).



```bash
gdal_translate web.vrt cog_web.tif ^
-of COG ^
-co TILING_SCHEME=GoogleMapsCompatible  ^
-co NUM_THREADS=ALL_CPUS ^
-co BIGTIFF=yes ^
-co BLOCKSIZE=256 ^
-co COMPRESS=WEBP ^
-co QUALITY=65 ^
-co OVERVIEWS=IGNORE_EXISTING ^
-co OVERVIEW_COMPRESS=WEBP ^
-co SPARSE_OK=TRUE ^
--config GDAL_CACHEMAX 9999 ^
--config GDAL_NUM_THREADS ALL_CPUS
```



## Check your COG with the `coggeotiff` cli tool



```bash
cogeotiff --info -f cog_web.tif -t
```



---



## Generate Tiles with gdal_translate and gdaladdo

[GDAL Translate Reference](https://gdal.org/programs/gdal_translate.html)

[GDAL MBTiles Driver Reference](https://gdal.org/drivers/raster/mbtiles.html)

> Use this method to output mbtiles instead of a COG for serving raster tiles.

```bash
gdal_translate -of MBTILES ^
--config GDAL_NUM_THREADS ALL_CPUS ^
-co ZOOM_LEVEL_STRATEGY=LOWER ^
-co RESAMPLING=CUBIC ^
-co TILE_FORMAT=PNG ^
web.vrt tiles.mbtiles
```

```bash
gdaladdo tiles.mbtiles -r average 2 4 8 16 32 64 128 256
```

---

## Other Methods

These methods create satisfactory outputs and can be faster, but can cause projection shifts. These may still be satisfactory for imagery where precise accuracy is not as important. In addition, the QGIS tool exports the rendered map, not just the raster, allowing for the creation of tiled custom basemaps. 

* gdal2tiles
* QGIS Generate XYZ Tiles (directory & mbtiles)

```bash
python.exe scripts/gdal2tiles.py -xyz -z 0-18 input/cog.tif output/tiles
```

## Resources

[@basemaps cog server](https://github.com/linz/basemaps)


[cogeotiff cli tool](https://github.com/blacha/cogeotiff)

<https://alastaira.wordpress.com/2011/07/11/maptiler-gdal2tiles-and-raster-resampling/>

<https://gitlab.com/GitLabRGI/geopackage-python/blob/master/Packaging/tiles2gpkg_parallel.py>

<https://gitlab.com/GitLabRGI/geopackage-python/blob/master/Tiling/gdal2tiles_parallel.py>