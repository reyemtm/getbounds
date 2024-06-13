---
layout: post
title: Web GIS and Microservices
subtitle: A Quick Look at Redefining the Typical Monolithic GIS Server
date: 2020-10-21T19:05:59.644Z
img: parcel-wide-new.png
tags: postgres
featured: false
---
With the advent of vector tiles, bringing GIS data to the web has never been easier. Vector tiles are supported by all the major open source JavaScript mapping libraries. Creation tools are available for GO, JavaScript, Python, Rust and more. 

The two main services in this example microservice architecture are from CrunchyData.

pg_tileserv - https://github.com/CrunchyData/pg_tileserv
pg_featureserve - https://github.com/CrunchyData/pg_featureserv
koopjs - https://koopjs.github.io/
vtile - https://github.com/reyemtm/vtile
agol-cache - https://github.com/reyemtm/agol-cache

Missing OGC WMS and WFS

Benefits

simple architecture 
permissive licensing - Apache & MIT
simple to replace
