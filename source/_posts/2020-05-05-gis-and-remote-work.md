---
layout: post
title: GIS and Remote Work
subtitle: An Exploration of a GIS Remote Work Toolkit
date: 2020-05-05T10:28:13.739Z
img: remote_work_iii.jpg
tags: mapbox esri qgis hardware
featured: false
---
In the aftermath of the Coronavirus pandemic, remote work may well be come the new normal, as businesses and government agencies discover that productivity can be maintained or even increased. And the tools to implement remote work at the employee level are neither complicated or expensive. In my case, even without a high-end laptop, a VPN connection, a remotely accessible central database, or even a cloud-based file sync service, remote GIS work was a very easy transition, at least in regards to technology and hardware.

Much of tools and processes that have lead to the success of my transition to remote work were already in place before the pandemic. ArcGIS Pro was my go-to GIS desktop application for managing cloud GIS data, QGIS was my daily-driver for GIS editing, and our web applications not managed via ArcGIS Online were, for the most part, hosted and deployed using [Netlify](https://www.netlify.com). I had also migrated 90% of our GIS data from shapefiles to a PostgreSQL database. This data can be editing with QGIS and viewed in ArcGIS Pro, and both of these applications can installed on any laptop thanks to the cloud-based licensing of ArcGIS Pro (and of course the open license of QGIS). For the database I created a backup of the existing Postgres database via pgAdmin and restored this backup to the same version of Postgres and PostGIS now running on my (personal) laptop. While using this setup I refrained from editing the data, but for daily tasks involving analysis and map-making this worked out quit well.

A few months into the lockdown my employer provided me with a new laptop and a VPN connection, so I am back to using the main enterprise database with full editing ability while remote. If there is one area where this whole approach has fallen short is the local editing of data hosted in ArcGIS Online via ArcGIS Pro. But this is not due to working remotely rather it is due to the shortcomings of using a feature service as an authoritative data store.

For those wanting a deeper dive into the software and tools in my toolkit, here is a list of the main hardware and software components when I started my remote work journey.

**Inital Hardware**

* Personal Laptop (Used for ~ 2 months)
  * Lenovo Yoga 14 with Windows 10
  * NVIDIA 940M, 8GB Ram, Intel i5-6200U @ 2.3 GHz
  * 256 GB SSD (OS) 256 GB m.2 SSD (Data Drive)
* Work Provided Laptop
  * Dell XPS 15 with Windows 10
  * NVIDIA GTX 1650, 32GB RAM, i9-9980HK @2.4 GHz, 1 TB SSD 
* 5 TB USB 3.0 External (Project files copied from the office)
  * No longer in use now that I have the VPN connection
* LG 24" LCD TV (External Monitor - Personal)

**Desktop GIS Software**

* ArcGIS Pro (Latest)
* PostgreSQL 11/PostGIS 3
* ``npm install -g live-server mapshaper netlify-cli``
* QGIS 3.0
* VS Code

**Desktop Misc Software**

* FreeFileSync
* Xcopy

**Web Software**
* ArcGIS Online
* Mapbox
* Netlify

**Media Hardware**
* Lenovo M93P Tiny running Ubuntu 20.04
* Chromecast Audio
* Samsung SMT-320 Tablet running Lineage OS
* Speaker from thrift store

**Media Software**

* Chromecast
* Plex hosted on the Lenovo M93P
* Pandora
