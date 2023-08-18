---
layout: project
title: City of Lancaster Public Transit
subtitle: A NodeJS GTFS Feed & Interactive Map Generator
author: Malcolm Meyer
img: projects-transit.png
tags:
  - mapbox
  - nodejs
  - open source
  - web maps
categories: 
 - projects
 - featured
date: 2022-02-09
featured: true
published: true
# Project Settings for new Projects Layout
project:
  - 
    url: https://www2.ci.lancaster.oh.us/geoportal/apps/transit
    tech:
      - Mapbox GL JS
      - Node JS
      - Parcel
    images: ["projects-transit"]
    description: "This project consists of a NodeJS script that generates a GTFS feed and interactive map. The only requirements are a GeoJSON routes file, a GeoJSON and stops file, and a handful of static GTFS text files. The result is a feed that can be published to Google, Transit, or any transit feed service, as well as an interactive map with schedules for each route. The schedules can be fixed route with specific times or loop routes that run every hour."
    client: "City of Lancaster (Employer)"
---