'use strict';

//global vars
var imageSection = document.getElementById('click-me');

var itemImageLeft = document.getElementById('left');
var itemImageMiddle = document.getElementById('middle');
var itemImageRight = document.getElementById('right');

var itemLeftText = document.getElementById('item-1-text');
var itemMiddleText = document.getElementById('item-2-text');
var itemRightText = document.getElementById('item-3-text');

var currentLeftImageArrayIndex = 0;
var currentMiddleImageArrayIndex = 10;
var currentRightImageArrayIndex = 19;

var allItems = [];

//item constructor
var Item = function (name, src) {
  this.name = name;
  this.src = src;
  this.timesLiked = 0;
  this.timesShown = 0;
  allItems.push(this);
};

//prototypes

// Item.prototype.renderItem = function (){
//   itemImageLeft.src = this.src;
// };

// event listeners and handlers
var ItemClickHandler = function (event) {
  if (event.target.id === 'left' || event.target.id === 'middle' || event.target.id === 'right') {

    do {
      var randomNumberLeft = Math.floor(Math.random() * allItems.length);
    } while (randomNumberLeft === currentLeftImageArrayIndex || randomNumberLeft === currentRightImageArrayIndex || randomNumberLeft === currentMiddleImageArrayIndex);

    do {
      var randomNumberMiddle = Math.floor(Math.random() * allItems.length);
    } while (randomNumberMiddle === currentLeftImageArrayIndex || randomNumberMiddle === randomNumberLeft || randomNumberMiddle === currentRightImageArrayIndex);

    do {
      var randomNumberRight = Math.floor(Math.random() * allItems.length);
    } while (randomNumberRight === currentLeftImageArrayIndex || randomNumberRight === randomNumberLeft || randomNumberRight === currentRightImageArrayIndex);





    if(event.target.id === 'left'){
      allItems[currentLeftImageArrayIndex].timesLiked++;
    }else if (event.target.id === 'middle'){
      allItems[currentMiddleImageArrayIndex].timesLiked++;
    }else{
      allItems[currentRightImageArrayIndex].timesLiked++;
    }

    allItems[currentLeftImageArrayIndex].timesShown++;
    allItems[currentMiddleImageArrayIndex].timesShown++;
    allItems[currentRightImageArrayIndex].timesShown++;
    console.log(allItems[currentRightImageArrayIndex]);

    currentLeftImageArrayIndex = randomNumberLeft;
    currentMiddleImageArrayIndex = randomNumberMiddle;
    currentRightImageArrayIndex = randomNumberRight;

    event.target.src = allItems[randomNumberLeft].src;
    event.target.src = allItems[randomNumberMiddle].src;
    event.target.src = allItems[randomNumberRight].src;

    itemLeftText.textContent = allItems[randomNumberLeft].name;
    itemMiddleText.textContent = allItems[randomNumberMiddle].name;
    itemRightText.textContent = allItems[randomNumberRight].name;
  }

};

imageSection.addEventListener('click', ItemClickHandler);

// var middleItemClickHandler = function (event) {
//   do {
//     var randomNumber = Math.floor(Math.random() * allItems.length);
//   } while(randomNumber === itemImageMiddleArrayIndex);

//   allItems[itemImageMiddleArrayIndex].timesLiked++;
//   allItems[itemImageMiddleArrayIndex].timesShown++;

//   itemImageMiddleArrayIndex = randomNumber;
//   event.target.src = allItems[randomNumber].src;
// };

// itemImageMiddle.addEventListener('click', middleItemClickHandler);

// var rightItemClickHandler = function (event) {
//   do {
//     var randomNumber = Math.floor(Math.random() * allItems.length);
//   } while(randomNumber === itemImageRightArrayIndex);

//   allItems[itemImageRightArrayIndex].timesLiked++;
//   allItems[itemImageRightArrayIndex].timesShown++;

//   itemImageRightArrayIndex = randomNumber;
//   event.target.src = allItems[randomNumber].src;
// };

// itemImageRight.addEventListener('click', rightItemClickHandler);

//========================================================================
//all items (20 items)
//========================================================================
new Item ('bag', './img/bag.jpg');
new Item ('banana', './img/banana.jpg');
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
new Item ('sweep', './img/sweep.png');
new Item ('tauntaun', './img/tauntaun.jpg');
new Item ('unicorn', './img/unicorn.jpg');
new Item ('usb', './img/usb.gif');
new Item ('water can', './img/water-can.jpg');
new Item ('wine glass', './img/wine-glass.jpg');
//========================================================================
