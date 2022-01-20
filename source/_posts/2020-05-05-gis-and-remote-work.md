---
layout: post
title: GIS and Remote Work
subtitle: An Exploration of a GIS Remote Work Toolkit
date: 2020-09-20T12:21:00.000Z
img: home_office.png
tags: 
 - mapbox
 - esri
 - qgis
 - hardware
featured: false
---
In the aftermath of the Coronavirus pandemic, remote work may well be come the new normal, as businesses and government agencies discover that productivity can be maintained or even increased when implementing remote work options. And the tools to implement this transition at the employee level are neither complicated or expensive. In my case, even without a high-end laptop, a VPN connection, a remotely accessible central database, or even a cloud-based file sync service, remote GIS work was a painless transition from the traditional office setting.

Much of tools and processes that led to the success of my transition to remote work were already in place before the pandemic. I use ArcGIS Pro as my go-to GIS desktop application for managing our limited cloud GIS data, QGIS for my daily-driver for enterprise GIS editing, and our web applications not managed via ArcGIS Online are hosted and deployed using [Netlify](https://www.netlify.com). All of the tools to manage these applications can be installed on any modern laptop, though it does help to have a dedicated graphics card for certain GIS workflows. And thanks to the open licenses of QGIS, VS Code, netlify-cli, etc. (and the cloud-based licensing of ArcGIS Pro) there was no need for me to mess with usb-key dongles or deactivating desktop licenses. 

![](/assets/img/md_home_office.webp "Desk with laptop and monitor.")*Photo of my home office with the original laptop setup.*

As for the database to house our enterprise GIS data, I had recently migrated 90% of our this data from shapefiles to a PostgreSQL database. To access this data remotely without a VPN or by opening up ports on our server, I simply created a backup from the existing Postgres database via pgAdmin. Since both Postgres and PostGIS use an open license, I was able to install these on my laptop and restore this backup without issue. This whole process was seamless and I was up and running in my new home office in less than a day. I did refrain from performing many edits to the data in the Postgres backup during this initial phase. Still, for daily tasks involving analysis and map-making this setup worked out quite well.

A few months into the lockdown my employer provided me with a new laptop and a VPN connection, so I am back to using the main enterprise database with the full editing ability via QGIS while remote. Accessing Postgres via the VPN connection is not ideal, but the editing lag time is tolerable.

If there is one area where this whole approach falls short it is with the local editing of data hosted in ArcGIS Online via ArcGIS Pro. This is not due to working remotely; rather it is due to the shortcomings of using a feature service as an authoritative data store. While I plan to deploy "Enterprise" at some point in the future, for the moment ArcGIS Online will have to do.

For those wanting a deeper dive into the software and tools in my toolkit, here is a list of the main hardware and software components I have used throughout my remote work journey.

**Hardware**

* Personal Laptop (Used for ~ 2 months)

  * Lenovo Yoga 14 with Windows 10
  * NVIDIA 940M, 8GB Ram, Intel i5-6200U @ 2.3 GHz
  * 256 GB SSD (OS) 256 GB m.2 SSD (Data Drive)
* Work Provided Laptop (a step up)

  * Dell XPS 15 with Windows 10
  * NVIDIA GTX 1650, 32GB RAM, i9-9980HK @2.4 GHz, 1 TB SSD 
* 5 TB USB 3.0 External (Project files copied from the office)

  * No longer in use now that I have the VPN connection
* LG 24" LCD TV (External Monitor - Personal)

**Desktop GIS Software**

* ArcGIS Pro (Latest)
* PostgreSQL 11/PostGIS 3
* `npm install -g live-server mapshaper netlify-cli vtile agol-cache`
* QGIS 3.10
* VS Code

**Desktop Misc Software**

* FreeFileSync
* Xcopy

**Web Services**

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
* Pandora
* Plex hosted on the Lenovo M93P
* TuneIn Radio

The only thing that's missing from my hardware setup is a standing desk and an awesome map to hang on my wall. Suggestions welcome!
