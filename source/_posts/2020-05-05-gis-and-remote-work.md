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

Much of tools and processes that have lead to the success of my transition to remote work were already in place. Before I started working remotely, ArcGIS Pro was my go-to GIS desktop application for managing cloud GIS data, QGIS was my daily-driver for GIS editing, and our web applications not managed via ArcGIS Online were, for the most part, hosted and deployed using [Netlify](https://www.netlify.com). I had also migrated 90% of our GIS data from shapefiles to a PostgreSQL database. This data can be editing with QGIS and viewed in ArcGIS Pro, and both of these applications can installed on any modern computer. We have the licensing for ArcGIS Pro setup via ArcGIS Online, so accessing this is no problem. And of course QGIS is free and open source, so there is no licensing issues there. Now for the database, for this I created a backup via pgAdmin and restored this backup to the same version of Postgres and PostGIS now running on my laptop. I am refraining from making any significant changes to the GIS data for now, but in general my daily workflow has not changed all that much.

For those wanting a deeper dive into the software and tools in my toolkit, here is a list of the main hardware and software components when I started my remote work journey.

**Inital Hardware**

* Lenovo Yoga 14 with Windows 10
  * NVIDIA 940M, 8GB Ram, Intel i5-6200U @ 2.3 GHz
  * 256 GB SSD (OS) 256 GB m.2 SSD (Data Drive)
* 5 TB USB 3.0 External (Project files copied from the office)
* LG 24" LCD TV (External Monitor)

**Software**

* ArcGIS Pro (Latest)
* Mapbox GL JS/Mapbox Print PDF
* PostgreSQL 11/PostGIS 3
* QGIS 3.0
* VS Code

**Web Applications**
* ArcGIS Online
* Netlify

**Command-Line Tools**

* NodeJS & ``npm install everything``

**Backup & Sync**

* FreeFileSync
* Xcopy

**Media Hardware**
* $100 Lenovo M93P Tiny running Ubuntu 20.04
* Chromecast Audio
* Speaker from thrift store

**Media Software**

* Chromecast Audio
* Plex (Hosted on a $100 Lenovo M93P Tiny running Ubuntu 20.04)
* Pandora
* Speaker from thrift store
