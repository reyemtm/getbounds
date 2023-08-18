---
title: Are Raster Tile Dead
subtitle: Can Cloud-Optimized GeoTIFFS Replace Raster Tiles?
tags:
  - gdal
  - openlayers
  - webmaps
---

---

- example OSU stadium 1.5" aerial imagery
- mbtiles file size(JPEG)
- COG file size (JPEG)
- performance

---

Cloud optimized geotiffs (COGs) are becoming an increasingly popular way to store and serve aerial imagery for web mapping applications. By using COGs, you can take advantage of cloud storage and computing services to efficiently host and deliver large amounts of geospatial data, while minimizing costs and maximizing performance. One of the key benefits of COGs is the ability to read them directly in web maps, without having to generate raster tiles.

In this post, we'll explore the benefits of using COGs for hosting and serving aerial imagery in web maps, and provide some tips and best practices for working with COGs in the cloud.

What are cloud optimized geotiffs?

A geotiff is a raster image format that includes geographic information embedded in the file, such as metadata and georeferencing information. COGs are a specific type of geotiff that are optimized for cloud storage and processing.

COGs are designed to be stored in cloud object storage systems such as Amazon S3 or Google Cloud Storage, and can be read directly by web map clients without the need to generate raster tiles. COGs are structured in a way that allows for efficient access to specific image subsets, without having to read and process the entire image file.

Why use COGs for aerial imagery in web maps?

There are several benefits to using COGs for hosting and serving aerial imagery in web maps:

Direct access to image subsets: With COGs, web map clients can read specific image subsets directly from the COG file, without the need to generate raster tiles. This can improve performance and reduce storage costs, as you don't need to generate and store raster tiles for every zoom level.

Efficient storage: COGs are optimized for cloud object storage, which means they can be stored more efficiently than traditional geotiffs. COGs can also be compressed using lossy compression algorithms such as JPEG, which can significantly reduce file sizes while retaining visual clarity.

Fast access: Because COGs can be read directly by web map clients, they can be accessed and served more quickly than traditional geotiffs. This is especially important for web mapping applications, where users expect fast and responsive map tiles.

Cost-effective: COGs can be stored and served using cloud-based services, which can be more cost-effective than traditional hosting solutions. Cloud object storage systems typically charge based on storage and bandwidth usage, which can be more predictable and scalable than traditional hosting solutions.

How to work with COGs in the cloud

Here are some tips and best practices for working with COGs in the cloud:

Use COG-compliant software: When creating or processing COGs, it's important to use software that is compliant with the COG specification. This ensures that your COGs are structured correctly and can be efficiently read by web map clients.

Use cloud object storage: COGs are designed to be stored in cloud object storage systems such as Amazon S3 or Google Cloud Storage. These systems are optimized for storing large amounts of data and can provide high levels of durability and availability.

Use lossy compression: COGs can be compressed using lossy compression algorithms such as JPEG, which can significantly reduce file sizes while retaining visual clarity. This can help reduce storage costs and improve performance.

Use content delivery networks (CDNs): To further optimize the delivery of COGs to end users, you can use content delivery networks (CDNs) such as Amazon CloudFront or Google Cloud CDN. CDNs cache frequently accessed files closer to the end user, reducing latency and improving performance.
