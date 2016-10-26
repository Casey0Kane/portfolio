'use strict';
var interests = [];

function Interests (options) {
  this.interest1 = options.interest1;
  this.interest2 = options.interest2;
  this.interest3 = options.interest3;
  this.interest4 = options.interest4;
  this.interest5 = options.interest5;
};

Interests.prototype.toHtml = function() {
  var $newInterest = $('interest.template').clone();
  $newInterest.removeClass('template');
  $newInterest.find('one').text(this.interest1);
  $newInterest.find('two').text(this.interest2);
  $newInterest.find('three').text(this.interest3);
  $newInterest.find('four').text(this.interest4);
  $newInterest.find('five').text(this.interest5);
  return $newInterest;
};

interestArticles.forEach(function(ele) {
  interests.push(new Interests(ele));
});

interests.forEach(function(interests) {
  $('#interests').append(interests.toHtml());
});

var about = [];

function About (options) {
  this.aboutMe = options.aboutMe;
};

About.prototype.toHtml = function() {
  var $newAbout = $('div').clone();
  $newAbout.find('div').text(this.aboutMe);
  return $newAbout;
};

aboutDiv.forEach(function(ele) {
  about.push(new About(ele));
});

about.forEach(function(about) {
  $('div').append(about.toHtml());
});
