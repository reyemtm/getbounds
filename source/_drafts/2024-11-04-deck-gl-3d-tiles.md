---
title: Deck GL and 3D Tiles
subtitle: Generate Colorized 3D Tiles from LiDAR and Ortho Imagery
tags:
  - web maps
  - deckgl
categories:
  - blog
date: 2024-11-04
img: deckgl-tiles.jpg 
---

<img class="wide" src="https://www.getBounds.com/assets/img/lg_deckgl-tiles.webp" alt="Deck GL and 3D Tiles" style="height:400px;margin-bottom:2rem" />

<!-- <iframe src="https://getbounds.com/apps/deckgl-3dtiles" width="100%" height="600px"> -->

This post walks you through the process of creating colorized 3D Tiles suitable for displaying on a web map from LiDAR and ortho imagery. For this example we will use LiDAR from the [Elevation Source Data (3DEP) - Lidar, IfSAR](https://github.com/mfbonfigli/gocesiumtiler) dataset, high-resolution ortho imagery from [Ohio's open imagery program](https://gis1.oit.ohio.gov/geodatadownload/), and the command-line geospatial tools pdal, gdal, and gocesiumtiler.

To get started, download and install PDAL and gocesiumtiler:
*Instructions for macOS, for other operating systems please refer to the respective documentation.*

1. **PDAL Installation:**
   - Open Terminal and install PDAL using Homebrew:
     ```sh
     brew install pdal
     ```

2. **gocesiumtiler Installation:**
    - Install Go using the [default installer](https://go.dev/doc/install) or homebrew:    
      ```sh
      brew install go
      ```
   - Clone the gocesiumtiler repository from GitHub:
     ```sh
     git clone https://github.com/mfbonfigli/gocesiumtiler
     ```
   - Navigate to the repository directory:
     ```sh
     cd gocesiumtiler
     ```
   - Build the CLI executable:
     ```bash
     go build -o gocesiumtiler ./cmd/main.go
     ```

Next we need to download the data. In this example we will use data for the Ohio Buckeye's famous stadium.

- [OSU LiDAR](https://rockyweb.usgs.gov/vdelivery/Datasets/Staged/Elevation/LPC/Projects/OH_Columbus_2019_B19/OH_Columbus_2019/LAZ/USGS_LPC_OH_Columbus_2019_B19_BS822728.laz)
- [OSU Stadium TIFF](https://gis1.oit.ohio.gov/ZIPARCHIVES_III/IMAGERY/1FTGEOTIFF/_ENHANCED/FRA_2024/S1820725.zip)

<div class="side-by-side">

![osu lidar](/assets/img/sample-lidar-osu.jpg)

![osu tiff](/assets/img/sample-ortho-osu.jpg)

</div>

*For simplicity we will rename the laz file to input.laz and the tiff file to ortho.tif.*

In order to ensure the imagery will color the lidar correctly, we need to verify the EPSG code for each dataset. For the LiDAR data, we can use PDAL:

```sh
pdal info --metadata input.laz
```

This will export a large amount of metadata about the LAS file, but in this case we are interested in the cartesion coordinate system. 

```
...
  "id": {
    "authority": "EPSG",
    "code": 3754
  }
```

To check the EPSG code of your orthoimage (TIFF file), use `gdalinfo`:

```sh
gdalinfo ortho.tif
```

```
...
    CS[Cartesian,2],
        AXIS["easting",east,
            ORDER[1],
            LENGTHUNIT["US survey foot",0.304800609601219]],
        AXIS["northing",north,
            ORDER[2],
            LENGTHUNIT["US survey foot",0.304800609601219]],
    ID["EPSG",6551]
```

In this instance the two coordinate systems are very close - which can be verified by overlaying the two in QGIS and checking if there are any discrepancies when using the default transformation, if any.

Next, we need to create a pipeline to colorize the LiDAR data, convert it to Web Mercator, and force it into LAS version 1.3. To do this, create a PDAL pipeline JSON file with the following content:

```json
{
  "pipeline": [
    {
      "type": "readers.las",
      "filename": "input.laz"
    },
    {
      "type": "filters.colorization",
      "raster": "ortho.tif"
    },
    {
      "type": "filters.range",
      "limits": "Red[1:],Green[1:],Blue[1:]"
    },
    {
      "type": "filters.assign",
      "value": "Alpha = 255"
    },
    {
      "type": "filters.reprojection",
      "out_srs": "EPSG:3857"
    },
    {
      "type": "writers.las",
      "minor_version": 3,
      "dataformat_id": 3,
      "discard_high_return_numbers": true,
      "filename": "output_lidar_data_3857.las"
    }
  ]
}
```

Save this as `pipeline.json`. Then run the pipeline with PDAL:

```sh
pdal pipeline pipeline.json
```

Now that we have the colorized LiDAR data in Web Mercator, we can use gocesiumtiler to create 3D tiles.

```sh
./gocesiumtiler file -out ./cesium-tiles -epsg 3857 -r 1 -z 0 -d 20 -m 5000 ./input.las
```

To clamp the tiles to the ground, retrieve the minimum elevation value using PDAL:

```sh
pdal info input.laz --stats
```

```JSON
{
  "average": 749.7651415,
  "count": 2954370,
  "maximum": 957.48,
  "minimum": 663.63,
  "name": "Z",
  "position": 2,
  "stddev": 37.20012168,
  "variance": 1383.849053
},
```

Look for the minimum value under the `Z` dimension in the output. Use this value to clamp the tiles to the ground under the `-z` flag:

```sh
./gocesiumtiler file -out ./cesium-tiles -epsg 3857 -r 1 -z -663 -d 20 -m 5000 ./input.las
```

The resulting 3D tiles can be viewed in a Mapbox or MapLibre map using the `deck.gl` library and the MapboxOverlay. The following code snippet demonstrates how to load the 3D tiles into a deck.gl layer:

```javascript
import {Deck} from '@deck.gl/core';
import {MapboxOverlay} from '@deck.gl/mapbox';
import {Tile3DLayer} from '@deck.gl/geo-layers';

const deck = new Deck({
  map: new MapboxOverlay({
    style: 'mapbox://styles/mapbox/light-v10',
    accessToken
  }),
  layers: [
    new Tile3DLayer({
      data: 'https://example.com/cesium-tiles/tileset.json',
      loader: 'cesium',
      onTilesetLoad: (tileset) => {
        console.log(tileset);
      }
    })
  ] 
});
```

