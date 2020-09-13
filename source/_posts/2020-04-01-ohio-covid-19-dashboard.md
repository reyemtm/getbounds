---
layout: post
title: Ohio COVID-19 Dashboard
subtitle: 'A Simple, Client Side Tracking Dashboard for COVID-19 in Ohio'
author: Malcolm T Meyer
img: covid-19.png
tags:
  - mapbox
date: 2020-04-01 14:55:00
updated: 2020-09-13
---

*Update: There are a wide variety of great COVID-19 trackers in the wild, including ones from Bing, Google, National Geographic, and the New York Times. Therefore I will no longer be updating this data visualization.*

Ohio and Governor Mike Dewine have been at the forefront of the fight against the coronavirus epidemic. This pandemic has reached all corners of Ohio, from rural Appalachia to our urban centers. To track the spread and scope of the virus for my home state I created a simple [COVID-19 tracking dashboard](/covid19-oh/). This dashboard tracks total cases, the rate of growth, and the spread of the virus by county.

<iframe src="/covid19-oh/?static=true" class="div-wide covid" width="100%" height="900px" frameborder="none" scrolling="no" style="border:none;"></iframe>

Data for this dashboard comes directly from Ohio Department of Health (ODH). For a in-depth analysis of this data, ODH has created a [detailed dashboard](https://coronavirus.ohio.gov/wps/portal/gov/covid-19/home/dashboard) that breaks down infections by age, gender, hospitalizations, and more.

I originally published this dashboard before the official ODH visualization went live. Access to reliable data has been a challenge, and data sources have changed multiple times since I first began tracking the epidemic in Ohio in early March. Initially the data source for this dashboard consisted of a shared Google spreadsheet. As the virus began to spread to more and more counties, keeping this sheet updated became increasingly difficult. Fortunately the ODH began publishing their data in a machine-readable format. Using a simple NodeJS script this dashboard can now be updated automatically once new ODH data is available. Other sources consulted for the initial stages of this project include the [Johns Hopkins University GitHub repo](https://github.com/CSSEGISandData/COVID-19/tree/master/csse_covid_19_data), the [Corona Data Scraper](https://coronadatascraper.com/) project, and the [University of Virginia](https://www.trackcorona.live/).

<br>
<h5>Global COVID-19 Dashboards</h5>


[Bing Dashboard](https://bing.com/covid)

[John Hopkins Univeristy](https://gisanddata.maps.arcgis.com/apps/opsdashboard/index.html#/bda7594740fd40299423467b48e9ecf6)

[University of Virginia](https://nssac.bii.virginia.edu/covid-19/dashboard/)

[TrackCorona](https://www.trackcorona.live/)

[World of Meters](https://www.worldometers.info/coronavirus/)


<h3 class="zp-headline zp-headline"></h3>
