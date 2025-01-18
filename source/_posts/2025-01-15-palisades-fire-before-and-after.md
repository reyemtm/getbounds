---
layout: post
title: Palisades Fire Before and After
subtitle: A Sample of Available Satellite Data for Post-Disaster Visual Assessment
author: Malcolm Meyer
date: 2025-01-17 08:00:00
categories: ["blog"]
tags: ["gdal", "satellite-imagery"]
img: post-palisades-fire.webp
style: >-
  .post img {
    border: solid thin lightgray
  }
  body {
   overflow-x: hidden;
  }
---

<iframe id="map1" src="/apps/fire-swipe-map/?version=open" height="450"></iframe>
<figcaption style="margin:-1rem 0 1rem 0">Click on the visualization to interact with the map.</figcaption>

Inspired by [this post](https://www.linkedin.com/pulse/when-our-community-burned-where-satellite-information-pag%C3%A1n-phd-8rxwf/) on LinkedIn from Brianna R. Pagán, Ph.D., in which she describes the lack of available real-time satellite data during the 2025 Palisades Fire, I wanted to see what types of satellite data were available now, several days into the disaster. By January 16th, 2025, nine days after the start of the fire, data from several providers had been made available, including Sentinel-2, Umbra, and Maxar.

The map above shows two satellite imagery captures, January 2nd (left) and January 12th, 2025, from the Sentinel-2 satellite constellation. Comparing these two images, we can clearly see the Palisades fire rapid expansion across the Santa Monica Mountains and into the Pacific Palisades neighborhood (map - bottom-right).

Sentinel-2 passes over the earth every five days, so it's not a rapid source of information but can be very useful, especially depending on the timing of the image capture and the relevant events. However,  some of these contain extensive cloud cover, such as the image below. The images chosen for the map contain less than 20% cloud cover. When searching for images, you can filter by cloud cover percentage to find the best images for your analysis.

![Sentinel-2 Cloud Cover](/assets/img/4x3_s2-cloud-cover.webp)
<figcaption style="margin: -1rem 0 1rem 0">Sentinel-2 Capture from January 7, 2025. Smoke can be clearly seen near the Pacific Palisades neighborhood. <a href="https://earth-search.aws.element84.com/v1/collections/sentinel-2-c1-l2a/items/S2B_T11SLT_20250107T183647_L2A" target="_blank">Image Metadata</a></figcaption>

What's missing in this visualization is the ability to quantify the impact across the urban infrastructure. Damage to individual buildings is hard to determine as the resolution of the Sentinel-2 data is only 10 meters per pixel. In this case, the first available commercial satellite I came across was from Umbra and Maxar. Both companies added the wildfires to their open data programs, giving free access to their imagery over portions of the affected areas. While this data is free to access, data licensing varies on the source which could limit the use of the data for commercial purposes.

<iframe id="map2" src="/apps/fire-swipe-map/?version=commercial" height="450"></iframe>
<figcaption style="margin: -1rem 0 1rem 0">Captures from Umbra on January 8th (SAR, left) and Maxar on January 10th covering portions of the Palisades Fire. <a href="https://radiantearth.github.io/stac-browser/#/external/s3.us-west-2.amazonaws.com/umbra-open-data-catalog/stac/2025/2025-01/2025-01-08/0aeddcd7-be10-48c2-a85f-7d634efaeafd/0aeddcd7-be10-48c2-a85f-7d634efaeafd.json?.asset=asset-gec" target="_blank">Umbra Metadata</a><a href="https://stacindex.org/catalogs/maxar-open-data-catalog-ard-format#/item/3ASjitMxUyc5THh8EmvKnoRZFbf1utN21NbV91oMefNNSnEjwmdXSsi667HzHB/EhasWoEgo6keehwcHhSM8e8DJ1EFG7zXRNE5wLVmPhfkiJrXwMdvaYyBTSqsXcjiWkNYt9VKdkhcLzVNATG9zEDNqKfJDJbAYZwAqxxouEnxE7ZjrBih2KzHaAq/KZHdnKcdvXLPR3bQV2t82VTpkc4VFoYyHuUhR3BRYP2Rhwte8uGf7MUV27iHLL7V4ct3oTvdRZLt9nKvpc24Wktw35upv1cAnvdu2XWWiKvMWBcq?si=2&t=1#13/34.074133/-118.602905" target="_blank">Maxar Metadata</a></figcaption>

Using this higher-resolution data, we can easily make out damage to individual structures. Visual assessment of he Maxar data is straightforward, with damage to homes clearly visible, but the Umbra data requires a bit more interpretation. The SAR data is represented as a grayscale image where pixel intensity corresponds to the strength of the radar signal (backscatter) returned to the satellite. In the image above, the static or fuzziness in the image represents increased backscatter, which could represent damage to the structures, while intact buildings are represented by a more seamless return. However, this is not a direct correlation, and further analysis would be needed to determine the extent of the damage.

Additionally, with the SAR image, you can see that the projection is slightly off, potentially due to the [slant effect](https://natural-resources.canada.ca/maps-tools-and-publications/satellite-imagery-elevation-data-and-air-photos/tutorial-fundamentals-remote-sensing/microwave-remote-sensing/radar-image-distortions/9325) of the SAR method. This is my first time working with SAR data, so it's not clear if the shift can be corrected with information from the metadata or if this is a limitation of the data itself. More information on Umbra deliverables can be found in the [Canopy Documentation](https://docs.canopy.umbra.space/docs/introduction).

Finally, while you can task these commercial satellites multiple times per day, and in the case of Umbra they can give usable results even through cloud-cover, to cover an area as large as the Palisades Fire the cost could would be significant - in the thousands to hundreds of thousands of dollars depending on the area and resolution.

## How I Built It

To create the first map above, I used data from the Sentinel-2 satellite constellation pulled from Element 84's [Earth Search Console](https://console.earth-search.aws.element84.com/). You can find the same imagery via [SkyFi](https://app.skyfi.com/welcome), which includes additional providers such as Umbra. If you are brave you can search the raw [Spatio Temporal Asset catalogs (STAC)](https://stacindex.org/catalogs) for each of these providers, but the process can be tedious. Once you find an image from the Earth Console, you need to view the [image metadata](https://earth-search.aws.element84.com/v1/collections/sentinel-2-l2a/items/S2A_11SLT_20250112_0_L2A) to get the download link for the visual GeoTIFF asset.

```JavaScript
"visual": {
  "href": "https://sentinel-cogs.s3.us-west-2.amazonaws.com/sentinel-s2-l2a-cogs/11/S/LT/2025/1/S2A_11SLT_20250112_0_L2A/TCI.tif",
  "type": "image/tiff; application=geotiff; profile=cloud-optimized",
  "title": "True color image"
}
```
<figcaption style="margin: -0.5rem 0 1rem 0">Excerpt from the Sentinel-2 image metadata</figcaption>

Thanks to [Geomatica](https://github.com/geomatico/maplibre-cog-protocol) and [geotiff.js](https://geotiffjs.github.io/), we can add a cloud-optimized GeoTIFF directly into a MapLibre map. However, before we can use the Sentinel-2 imagery, we first need to convert it into a compatible compression format. The default compression used in the Sentinel-2 visual GeoTIFF imagery is `DEFLATE`, which is not supported by the browser. To convert the GeoTIFF into a compatible format, we can use `gdal_translate` from [GDAL](https://gdal.org/). For this visualization, I used a version of the script from my [previous blog post](https://www.getbounds.com/blog/generating-cloud-optimized-geotiffs-and-raster-tiles-with-gdal/) on how to create cloud-optimized GeoTIFFs. After the conversion, I uploaded the GeoTIFFs to Cloudflare since the plugin allows for reading directly from object storage.

Once the images are converted, we can simply load them into the map and enable the swipe effect using the [MapLibre Swipe Plugin](https://github.com/maplibre/maplibre-gl-compare). 

---

## Resources

- [Earth Search Console](https://console.earth-search.aws.element84.com/)
- [Google Sheet of Related Data, Resources, and Maps](https://docs.google.com/spreadsheets/d/1nz67dFSsy8cGZ1G1j-vv1DufOjxI9i0jCjZfpYBw5BU/edit#gid=0)
- [MapLibre GL JS](https://docs.mapbox.com/mapbox-gl-js/api/)
- [MapLibre GeoTIFF Plugin](https://github.com/geomatico/maplibre-cog-protocol)
- [MapLibre Swipe Plugin](https://github.com/maplibre/maplibre-gl-compare)
- [Maxar Dataset](https://stacindex.org/catalogs/maxar-open-data-catalog-ard-format#/item/3ASjitMxUyc5THh8EmvKnoRZFbf1utN21NbV91oMefNNSnEjwmdXSsi667HzHB/EhasWoEgo6keehwcHhSM8e8DJ1EFG7zXRNE5wLVmPhfkiJrXwMdvaYyBTSqsXcjiWkNYt9VKdkhcLzVNATG9zEDNqKfJDJbAYZwAqxxouEnxE7ZjrBih2KzHaAq/KZHdnKcdvXLPR3bQV2t82VTpkc4VFoYyHuUhR3BRYP2Rhwte8uGf7MUV27iHLL7V4ct3oTvdRZLt9nKvpc24Wktw35upv1cAnvdu2XWWiKvMWBcq?si=2&t=1#13/34.038505/-118.543714)
- [Sentinel-2](https://sentinel.esa.int/web/sentinel/missions/sentinel-2)
- [Sentien-2 AWS Registry](https://registry.opendata.aws/sentinel-2/)
- [SkyFi](https://app.skyfi.com/)
- [Umbra STAC](https://radiantearth.github.io/stac-browser/#/external/s3.us-west-2.amazonaws.com/umbra-open-data-catalog/stac/catalog.json?.language=en)

