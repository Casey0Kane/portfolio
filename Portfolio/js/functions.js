'use strict';

var articles = [];

function Article (options) {

  this.title = options.title;
  this.category = options.category;
  this.author = options.author;
  this.authorUrl = options.authorUrl;
  this.publishedOn = options.publishedOn;
  this.body = options.body;
};

Article.prototype.toHtml = function() {
  var $newArticle = $('article.template').clone();
  $newArticle.removeClass('template');

  $newArticle.attr('data-category', this.category);

  $newArticle.find('address a').text(this.author);
  $newArticle.find('section[class="article-body"]').html(this.body);
  $newArticle.find('h1').text(this.title);
  $newArticle.find('address a').attr('href', this.authorUrl);
  $newArticle.find('time[pubdate]').attr('title', this.publishedOn);
  $newArticle.find('time').text('published' + ' ' + 'about ' + parseInt((new Date() - new Date(this.publishedOn)) / 60 / 60 / 24 / 1000) + ' days ago');

  return $newArticle;
};


blogArticles.sort(function(currentObject, nextObject) {
  return (new Date(nextObject.publishedOn)) - (new Date(currentObject.publishedOn));
});

blogArticles.forEach(function(ele) {
  articles.push(new Article(ele));
});

articles.forEach(function(article) {

  $('#articles').append(article.toHtml());

});
