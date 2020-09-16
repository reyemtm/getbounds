---
title: Portfolio
subtitle: code | gis | print | web
header: >-
 <link rel="stylesheet" href="https://cdnjs.cloudflare.com/ajax/libs/lightgallery-js/1.3.0/css/lightgallery.min.css" />
css: >-
 .post {
    max-width: 120rem
 }
 .post .col-3 {
   flex: 0 0 calc(25% - 10px);
   margin: 5px;
   max-width: 25%;
 }
---
<div class="columns row" id="lightgallery">
<a class="col-3" data-sub-html="A prototype application for client-side analysis of COVID 19 in the US. <br><a href='https://pandemix.getbounds.com/' target='_blank'>Project Link</a>" href="https://malcolmmeyer.com/img/pandemix_web.jpg" >
  <img loading="lazy" data-src="https://malcolmmeyer.com/img/thumbs/pandemix_web.webp"  src="https://malcolmmeyer.com/img/thumbs/pandemix_web.webp" alt="A prototype application for client-side analysis of COVID 19 in the US.">
</a>
<a class="col-3" data-sub-html="A web application exploring data from the American Community Survey with a story component. <br><a href='https://www.ovrdc.org/apps/block-group-explorer.html#8/40.129/-82.719' target='_blank'>Project Link</a>" href="img/01-ohio-block-group-explorer-explorer-story-with-3d-views.png" >
  <img loading="lazy" data-src="https://malcolmmeyer.com/img/thumbs/01-ohio-block-group-explorer-explorer-story-with-3d-views.webp"  src="https://malcolmmeyer.com/img/thumbs/01-ohio-block-group-explorer-explorer-story-with-3d-views.webp" alt="A web application exploring data from the American Community Survey with a story component.">
</a>
<a class="col-3" data-sub-html="A web application exploring data from the American Community Survey with a story component. <br><a href='https://www.ovrdc.org/apps/block-group-explorer.html#8/40.129/-82.719' target='_blank'>Project Link</a>" href="img/01-ohio-block-group-explorer-explorer-story-with-3d-views.png" >
  <img loading="lazy" data-src="https://malcolmmeyer.com/img/thumbs/01-ohio-block-group-explorer-explorer-story-with-3d-views.webp"  src="https://malcolmmeyer.com/img/thumbs/01-ohio-block-group-explorer-explorer-story-with-3d-views.webp" alt="A web application exploring data from the American Community Survey with a story component.">
</a>
<a class="col-3" data-sub-html="A web application exploring data from the American Community Survey with a story component. <br><a href='https://www.ovrdc.org/apps/block-group-explorer.html#8/40.129/-82.719' target='_blank'>Project Link</a>" href="img/01-ohio-block-group-explorer-explorer-story-with-3d-views.png" >
  <img loading="lazy" data-src="https://malcolmmeyer.com/img/thumbs/01-ohio-block-group-explorer-explorer-story-with-3d-views.webp"  src="https://malcolmmeyer.com/img/thumbs/01-ohio-block-group-explorer-explorer-story-with-3d-views.webp" alt="A web application exploring data from the American Community Survey with a story component.">
</a>
</div>

<script src="https://cdnjs.cloudflare.com/ajax/libs/lightgallery-js/1.3.0/js/lightgallery.min.js"></script>
<script defer src="https://cdnjs.cloudflare.com/ajax/libs/lg-share/1.2.1/lg-share.min.js"></script>
<script defer src="https://cdnjs.cloudflare.com/ajax/libs/lg-zoom/1.2.1/lg-zoom.min.js"></script>
<script defer src="https://cdnjs.cloudflare.com/ajax/libs/lg-thumbnail/1.2.1/lg-thumbnail.min.js"></script>
<script defer src="https://unpkg.com/webp-hero@0.0.0-dev.21/dist-cjs/polyfills.js"></script>
<script defer src="https://unpkg.com/webp-hero@0.0.0-dev.21/dist-cjs/webp-hero.bundle.js"></script>
<script>

  /*https://jenil.github.io/chota/#docs*/

  var gallery = document.getElementById("lightgallery")

  window.onload = function() {

  lightGallery(gallery, {
      mode: 'lg-fade',
      speed: 800,
      preload: 2,
      thumbnail: true
    });

    function canUseWebP() {
      var elem = document.createElement('canvas');
      if (!!(elem.getContext && elem.getContext('2d'))) {
          // was able or not to get WebP representation
          return elem.toDataURL('image/webp').indexOf('data:image/webp') == 0;
      }
      // very old browser like IE 8, canvas not supported
      return false;
    }

    var webp = canUseWebP()
    console.log("can this page use webp images?", webp)

    if (!webp) {
      var webpMachine = new webpHero.WebpMachine()
      webpMachine.polyfillDocument()
    }

  }
</script>
