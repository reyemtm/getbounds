/**
 * slight refinement of https://github.com/nkmk/hexo-list-related-posts - MIT
 */

var assign = require('lodash.assign');
var striptags = require('striptags');

function addCount(array, searchProperty, newProperty) {
  return array.reduce(function(newArray, item) {
    var i = objectArrayIndexOf(newArray, item[searchProperty], searchProperty);
    if(i === -1){
      item[newProperty]  = 1;
      newArray.push(item);
    }else{
      newArray[i][newProperty]  = newArray[i][newProperty] + 1;
    }
    return newArray;
  }, []);
}

function objectArrayIndexOf(array, searchTerm, property) {
  for(var i = 0; i < array.length; i++){
    if (array[i][property] === searchTerm) return i;
  }
  return -1;
}

function dynamicSort(property, isAscending) {
  var sortOrder = -1;
  if(isAscending) sortOrder = 1;
  return function (a, b) {
    var result = (a[property] < b[property]) ? -1 :
                 (a[property] > b[property]) ? 1 : 0;
    return result * sortOrder;
  };
}

function shuffle(array) {
  var currentIndex = array.length, temporaryValue, randomIndex ;
  while (0 !== currentIndex) {
    randomIndex = Math.floor(Math.random() * currentIndex);
    currentIndex -= 1;
    temporaryValue = array[currentIndex];
    array[currentIndex] = array[randomIndex];
    array[randomIndex] = temporaryValue;
  }
  return array;
}

function listRelatedPosts(options) {
  if (!options) {
    options = {};
  }

  options = assign({
    maxCount: 3,
    pClass: 'related-posts-none',
    ulClass: 'related-posts',
    liClass: 'related-posts-item',
    aClass: 'related-posts-link',
    generateAbstract: false,
    abstractClass: 'related-posts-item-abstract',
    abstractLength: 110,
    orderBy: 'date',
    isAscending: false,
    card: true
  }, options);

  var orderOption = ['date', 'random'];
  if(orderOption.indexOf(options.orderBy) === -1){
    options.orderBy = 'date';
  }

  var postList = [];
  this.page.tags.each(function(tag){
    tag.posts.each(function(post){
      postList.push(post);
    });
  });

  postList = addCount(postList, '_id', 'count');

  var thisPostPosition = objectArrayIndexOf(postList, this.page._id, '_id');
  postList.splice(thisPostPosition, 1);

  if(options.orderBy === 'random'){
    shuffle(postList);
  }else{
    postList.sort(dynamicSort(options.orderBy, options.isAscending));
  }
  postList.sort(dynamicSort('count', false));

  var result = '';
  var root = this.config.root;
  var count = Math.min(options.maxCount, postList.length);

  if(count === 0){
    result += "";
  }else{
    // result += '<ul class="' + options.ulClass + '">';
      if (options.card) {
      for (var i = 0; i < count; i++) {
        var post = postList[i];
        // result += '<li class="' + options.liClass + '">' + '<a class="' + options.aClass + '" href="' + root + postList[i].path + '">' + postList[i].title + '<br>' + postList[i].subtitle + '</a><div class="' + options.abstractClass + '">' + striptags(postList[i].content).substring(0, options.abstractLength) + '</div></li>';
        if (!post.img) {
          post.img = "serving-vector-tiles.jpg";
        }
        if (!post.subtitle) {
          post.subtitle = "";
        }
        result += `
        <a rel="prefetch" href="/${post.path}" class="">
          <article class="">
            <img src="/assets/img/md_${post.img.split(".")[0]}.webp" alt="${post.img.replace(".png", "")}" loading=lazy>
            <div>
              <h2>
              ${post.title}
              </h2>
              <p>
                ${post.subtitle}
              </p>
            </div>
          </article>
        </a>
        `
      }
    } else {
      for (var i = 0; i < count; i++) {
        result += '<li class="' + options.liClass + '">' + '<a class="' + options.aClass + '" href="' + root + postList[i].path + '">' + postList[i].title + '</a></li>';
      }
    }
  }

  return result;
}

hexo.extend.helper.register('list_related_posts', listRelatedPosts);