'use strict';

//global vars
var itemImageLeft = document.getElementById('left');
var itemImageMiddle = document.getElementById('middle');
var itemImageRight = document.getElementById('right');
var imageSection = document.getElementById('click-me');
// var itemImageLeftArrayIndex = 0;

var allItems = [];

//item constructor
var Item = function (name, src) {
  this.name = name;
  this.src = src;
  this.timesLiked = 0;
  this.timesShown = 0;
  allItems.push(this);
};


//all items (20 items)
new Item ('bag', './img/bag.jpg');
new Item ('banana', './img/bababa.jpg');
new Item ('bathroom', './img/bathroom.jpg');
new Item ('boots', './img/boots.jpg');
new Item ('breakfast', './img/breakfast.jpg');
new Item ('bubblegum', './img/bubblegum.jpg');
new Item ('chair', './img/chair.jpg');
new Item ('cthulhu', './img/cthulhu.jpg');
new Item ('dog-duck', './img/dog-duck.jpg');
new Item ('dragon', './img/dragon.jpg');
new Item ('pen', './img/pen.jpg');
new Item ('pet-sweep', './img/pet-sweep.jpg');
new Item ('scissors', './img/scissors.jpg');
new Item ('shark', './img/shark.jpg');
new Item ('sweep', './img/sweep.jpg');
new Item ('tauntaun', './img/tauntaun.jpg');
new Item ('unicorn', './img/unicorn.jpg');
new Item ('usb', './img/usb.gif');
new Item ('water can', './img/water-can.jpg');
new Item ('wine glass', './img/wine-glass.jpg');

