---
layout: post
title: Beyond Blogging
subtitle: "Publishing Webmaps with Static Site Generators"  
date: 2019-04-18 12:03:38
tags:
 - hexo
 - jekyll
 - leaflet
 - mapbox
img: 
published: false
---
Maintaining a consistent UI can be a complex task, which is why at OVRDC and the City of Zanesville I decided to manage this task via [static site generators](https://www.staticgen.io). I prefer to keep the web applications I build focused, instead of creating a catch-all web app with every map layer and application widget. What this also means is instead of maintaining one application, I need to maintain multiple applications. In the same vein as GeoNode and ArcGIS Online, the public facing result is an application portal with multiple, targeted web applications. In the context of a municipality, most if not all of these applications share similar components. While it mightHowever this means creating multiple web applicati, but this also means that I need to have some way to maintain a consistent UI between all the web applications. 

map gallery which is just post loop
ui customizations across all posts or maps
css frameworks built upon any framework and switch
 layer toggles, icons
 frontmatter to customize each post with css, header, etc
 - simple to add build tools like parcel or gulp into the build process
 - ability to move maps from development to staging to production using categories
p - flexibility to add other non-map pages to my map portal using the same ui

Creating maps using a logging engine. This post is a look at using a static site generator, usually used for creating websites and blogs, 2 generate a web map UI and to push out a webmap portal. Using a logging engine in this manner achievesone very important thing which is to keep a consistent UI across all your weapon. Any changes need to the user interface Willie pushed to all maps assuming that change is not break something in a map script. Different engines will have different methods of dealing with JavaScript markdown HTML etc however the basic format is the same. The template for creating maps in this way is 1 create a layout template for the map portal for landing page, too create a layout template for the map itself. This layout template for the map could be as complex or as simple as you want. Utilizing front matter you could push many different variables into the map itself such as which basemap to use what layers to draw etc etc. I generally make the template barely basic and then customize the map using JavaScript. Utilizing this method has made rating maps very easier more streamlined and by pushing most of the code into JavaScript and moving it from play out front matter it is allow me to utilize code helpers such to code documentation such as JS doc to explain all the code. This means that someone else could come in and fairly quickly dissect the map layouts templates and decode two then start working with you Max. Return return but of course you don't need to just use map templates. Because these modern static site generator are so versatile can create pretty much any template imagine.