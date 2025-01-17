/**
 * slight refinement of https://github.com/nkmk/hexo-list-related-posts - MIT
 */

var assign = require("lodash.assign");
var striptags = require("striptags");

function addCount(array, searchProperty, newProperty) {
  return array.reduce(function (newArray, item) {
    var i = objectArrayIndexOf(newArray, item[searchProperty], searchProperty);
    if (i === -1) {
      item[newProperty] = 1;
      newArray.push(item);
    } else {
      newArray[i][newProperty] = newArray[i][newProperty] + 1;
    }
    return newArray;
  }, []);
}

function objectArrayIndexOf(array, searchTerm, property) {
  for (var i = 0; i < array.length; i++) {
    if (array[i][property] === searchTerm) return i;
  }
  return -1;
}

function dynamicSort(property, isAscending) {
  var sortOrder = -1;
  if (isAscending) sortOrder = 1;
  return function (a, b) {
    var result = a[property] < b[property] ? -1 : a[property] > b[property] ? 1 : 0;
    return result * sortOrder;
  };
}

function shuffle(array) {
  var currentIndex = array.length,
    temporaryValue,
    randomIndex;
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

  options = assign(
    {
      maxCount: 4,
      pClass: "related-posts-none",
      ulClass: "related-posts",
      liClass: "related-posts-item",
      aClass: "related-posts-link",
      generateAbstract: false,
      abstractClass: "related-posts-item-abstract",
      abstractLength: 110,
      orderBy: "date",
      isAscending: false,
      card: true,
    },
    options
  );

  var orderOption = ["date", "random"];
  if (orderOption.indexOf(options.orderBy) === -1) {
    options.orderBy = "date";
  }

  var postList = [];
  this.post.tags.each(function (tag) {
    tag.posts.each(function (post) {
      postList.push(post);
    });
  });

  //if postList is empty, return two random posts
  if (postList.length === 0) {
    console.log("No related posts found, returning two random posts");
    postList = this.site.posts.filter(function (post) {
      return post.published;
    });
    shuffle(postList);
    postList = postList.slice(0, 2);
  }

  postList = addCount(postList, "_id", "count");

  var thisPostPosition = objectArrayIndexOf(postList, this.post._id, "_id");
  postList.splice(thisPostPosition, 1);

  if (options.orderBy === "random") {
    shuffle(postList);
  } else {
    postList.sort(dynamicSort(options.orderBy, options.isAscending));
  }
  postList.sort(dynamicSort("count", false));

  var result = "";
  var root = this.config.root;
  var count = Math.min(options.maxCount, postList.length);

  if (count === 0) {
    // result += '<p class="' + options.pClass + '">No related post.</p>';
    result += "";
  } else {
    // result += '<ul class="' + options.ulClass + '">';
    result +=
      '<h3 class="zp-headline zp-headline-dark"><span>Related Posts</span></h3><div class="row">';
    if (options.card) {
      for (var i = 0; i < count; i++) {
        // result += '<li class="' + options.liClass + '">' + '<a class="' + options.aClass + '" href="' + root + postList[i].path + '">' + postList[i].title + '<br>' + postList[i].subtitle + '</a><div class="' + options.abstractClass + '">' + striptags(postList[i].content).substring(0, options.abstractLength) + '</div></li>';
        if (!postList[i].img) {
          postList[i].img = "serving-vector-tiles.jpg";
        }
        if (!postList[i].subtitle) {
          postList[i].subtitle = "";
        }
        result += `
        <div class="col-6 col-6-md col-6-lg" >
          <div class="card" style="padding:0;">
            <header>
              <a rel="prefetch" href="/${postList[i].path}"><figure style="background-image: url('/assets/img/${postList[i].img}');")></figure></a>
              <a class="post-title" rel="prefetch" href="/${postList[i].path}">
                <h3>${postList[i].title}</h3>
                <h5>${postList[i].subtitle}</h5>
              </a>
            </header>
          </div>
        </div>`;
      }
    } else {
      for (var i = 0; i < count; i++) {
        result +=
          '<li class="' +
          options.liClass +
          '">' +
          '<a class="' +
          options.aClass +
          '" href="' +
          root +
          postList[i].path +
          '">' +
          postList[i].title +
          "</a></li>";
      }
    }
    // result += "</ul>"
    result += "</div>";
  }

  return result;
}

hexo.extend.helper.register("list_related_posts", listRelatedPosts);
