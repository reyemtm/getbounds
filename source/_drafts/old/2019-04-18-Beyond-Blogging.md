layout: post
title: Beyond Blogging
subtitle: Publishing Webmaps with Static Site Generators
tags:
  - hexo
  - jekyll
  - leaflet
  - mapbox
published: false
date: 2019-04-18 12:03:38
img:
---
Maintaining a consistent UI across all your web applications can be a complex task. While this can be managed by using a framework template, I prefer to keep it simple and use [static site generators](https://www.staticgen.io). In the same vein as GeoNode and ArcGIS Online, the public facing result o is an application portal with multiple, targeted web applications, all with a consistent UI.

![[map-portal]](/assets/img/coz-map-portal.png)

Instead of using a UI shell and a configuration file that then loads components, this method allows for the majority of the code to be static HTML, CSS and JavaScript. This equates to fast load times and simple deployment. 

map gallery which is just post loop
ui customizations across all posts or maps
css frameworks built upon any framework and switch
 layer toggles, icons
 frontmatter to customize each post with css, header, etc
 frontmatter to customize each post with css, header, etc
 - simple to add build tools like parcel or gulp into the build process
 - ability to move maps from development to staging to production using categories
p - flexibility to add other non-map pages to my map portal using the same ui

Creating maps using a logging engine. This post is a look at using a static site generator, usually used for creating websites and blogs, 2 generate a web map UI and to push out a webmap portal. Using a logging engine in this manner achievesone very important thing which is to keep a consistent UI across all your weapon. Any changes need to the user interface Willie pushed to all maps assuming that change is not break something in a map script. Different engines will have different methods of dealing with JavaScript markdown HTML etc however the basic format is the same. The template for creating maps in this way is 1 create a layout template for the map portal for landing page, too create a layout template for the map itself. This layout template for the map could be as complex or as simple as you want. Utilizing front matter you could push many different variables into the map itself such as which basemap to use what layers to draw etc etc. I generally make the template barely basic and then customize the map using JavaScript. Utilizing this method has made rating maps very easier more streamlined and by pushing most of the code into JavaScript and moving it from play out front matter it is allow me to utilize code helpers such to code documentation such as JS doc to explain all the code. This means that someone else could come in and fairly quickly dissect the map layouts templates and decode two then start working with you Max. Return return but of course you don't need to just use map templates. Because these modern static site generator are so versatile can create pretty much any template imagine.