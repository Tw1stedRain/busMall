'use strict';

//global vars
var imageSection = document.getElementById('click-me');
var ctx = document.getElementById('myChart').getContext('2d');

var itemImageLeft = document.getElementById('left');
var itemImageMiddle = document.getElementById('middle');
var itemImageRight = document.getElementById('right');

var itemLeftText = document.getElementById('item-1-text');
var itemMiddleText = document.getElementById('item-2-text');
var itemRightText = document.getElementById('item-3-text');

// var currentLeftImageArrayIndex = 0;
// var currentMiddleImageArrayIndex = 10;
// var currentRightImageArrayIndex = 19;
var lastDisplayed = [];
var allItems = [];

var clickCounter = 0;

var itemNames = [];
var itemLikes = [];

//item constructor
var Item = function (name, src) {
  this.name = name;
  this.src = src;
  this.timesLiked = 0;
  this.timesShown = 0;
  allItems.push(this);
};

if(!localStorage.getItem('currentTotalVotes')){
  new Item('Droid bag', './img/bag.jpg');
  new Item('Banana Cutter', './img/banana.jpg');
  new Item('Bathroom Stand', './img/bathroom.jpg');
  new Item('Open Toed Boots', './img/boots.jpg');
  new Item('Full Breakfast Maker', './img/breakfast.jpg');
  new Item('Meaty Bubblegum', './img/bubblegum.jpg');
  new Item('Bubble chair', './img/chair.jpg');
  new Item('cthulhu', './img/cthulhu.jpg');
  new Item('dog is duck', './img/dog-duck.jpg');
  new Item('dragon meat', './img/dragon.jpg');
  new Item('pen', './img/pen.jpg');
  new Item('pet-sweep', './img/pet-sweep.jpg');
  new Item('Pizza scissors', './img/scissors.jpg');
  new Item('Sharky Sleepy', './img/shark.jpg');
  new Item('Baby sweep', './img/sweep.png');
  new Item('tauntaun', './img/tauntaun.jpg');
  new Item('unicorn meat', './img/unicorn.jpg');
  new Item('wiggle usb', './img/usb.gif');
  new Item('water can', './img/water-can.jpg');
  new Item('wine glass', './img/wine-glass.jpg');
} else{
  allItems = JSON.parse(localStorage.getItem('currentTotalVotes'));
}

var ItemClickHandler = function (event) {
  if (event.target.id === 'left' || event.target.id === 'middle' || event.target.id === 'right') {

    // do {
    //   var randomNumberLeft = Math.floor(Math.random() * allItems.length);
    // } while (randomNumberLeft === currentLeftImageArrayIndex || randomNumberLeft === currentRightImageArrayIndex || randomNumberLeft === currentMiddleImageArrayIndex);

    // do {
    //   var randomNumberMiddle = Math.floor(Math.random() * allItems.length);
    // } while (randomNumberMiddle === currentLeftImageArrayIndex || randomNumberMiddle === randomNumberLeft || randomNumberMiddle === currentRightImageArrayIndex);

    // do {
    //   var randomNumberRight = Math.floor(Math.random() * allItems.length);
    // } while (randomNumberRight === currentLeftImageArrayIndex || randomNumberRight === randomNumberLeft || randomNumberRight === currentRightImageArrayIndex);

    var randomNumberLeft = Math.floor(Math.random() * allItems.length);
    var randomNumberMiddle = Math.floor(Math.random() * allItems.length);
    var randomNumberRight = Math.floor(Math.random() * allItems.length);

    while(lastDisplayed.includes(randomNumberLeft) || lastDisplayed.includes(randomNumberMiddle) || lastDisplayed.includes(randomNumberRight) || randomNumberLeft === randomNumberMiddle || randomNumberMiddle === randomNumberRight || randomNumberRight === randomNumberLeft){
      randomNumberLeft = Math.floor(Math.random() * allItems.length);
      randomNumberMiddle = Math.floor(Math.random() * allItems.length);
      randomNumberRight = Math.floor(Math.random() * allItems.length);
    }

    lastDisplayed[0] = randomNumberLeft;
    lastDisplayed[1] = randomNumberMiddle;
    lastDisplayed[2] = randomNumberRight;

    if (event.target.id === 'left') {
      allItems[randomNumberLeft].timesLiked++;
    } else if (event.target.id === 'middle') {
      allItems[randomNumberMiddle].timesLiked++;
    } else {
      allItems[randomNumberRight].timesLiked++;
    }

    allItems[randomNumberLeft].timesShown++;
    allItems[randomNumberMiddle].timesShown++;
    allItems[randomNumberRight].timesShown++;

    itemImageLeft.src = allItems[randomNumberLeft].src;
    itemImageMiddle.src = allItems[randomNumberMiddle].src;
    itemImageRight.src = allItems[randomNumberRight].src;

    itemLeftText.textContent = allItems[randomNumberLeft].name;
    itemMiddleText.textContent = allItems[randomNumberMiddle].name;
    itemRightText.textContent = allItems[randomNumberRight].name;

    clickCounter++;
    if (clickCounter === 25) {

      localStorage.setItem('currentTotalVotes', JSON.stringify(allItems));

      var chartData = {
        labels: itemNames,
        datasets: [{
          label: 'Number of Likes',
          data: itemLikes,
          backgroundColor: [
            'rgba(255, 99, 132, 0.2)',
            'rgba(54, 162, 235, 0.2)',
            'rgba(255, 206, 86, 0.2)',
            'rgba(75, 192, 192, 0.2)',
            'rgba(153, 102, 255, 0.2)',
            'rgba(255, 159, 64, 0.2)',
            'rgba(245, 150, 40, 0.2)',
            'rgba(54, 162, 235, 0.2)',
            'rgba(255, 206, 86, 0.2)',
            'rgba(75, 192, 192, 0.2)',
            'rgba(54, 162, 235, 0.2)',
            'rgba(255, 206, 86, 0.2)',
            'rgba(75, 192, 192, 0.2)',
            'rgba(54, 162, 235, 0.2)',
            'rgba(255, 206, 86, 0.2)',
            'rgba(75, 192, 192, 0.2)',
            'rgba(54, 162, 235, 0.2)',
            'rgba(255, 206, 86, 0.2)',
            'rgba(75, 192, 192, 0.2)',
            'rgba(54, 162, 235, 0.2)',
            'rgba(255, 206, 86, 0.2)'
          ],
          borderColor: [
            'rgba(255,99,132,1)',
            'rgba(54, 162, 235, 1)',
            'rgba(255, 206, 86, 1)',
            'rgba(75, 192, 192, 1)',
            'rgba(153, 102, 255, 1)',
            'rgba(255, 159, 64, 1)',
            'rgba(54, 162, 235, 1)',
            'rgba(255, 206, 86, 1)',
            'rgba(75, 192, 192, 1)',
            'rgba(153, 102, 255, 1)',
            'rgba(255, 159, 64, 1)',
            'rgba(54, 162, 235, 1)',
            'rgba(255, 206, 86, 1)',
            'rgba(75, 192, 192, 1)',
            'rgba(153, 102, 255, 1)',
            'rgba(255, 159, 64, 1)',
            'rgba(54, 162, 235, 1)',
            'rgba(255, 206, 86, 1)',
            'rgba(75, 192, 192, 1)',
            'rgba(153, 102, 255, 1)',
            'rgba(255, 159, 64, 1)'
          ],
          borderWidth: 1
        }]
      };


      var chartOptions = {
        scales: {
          yAxes: [{
            ticks: {
              beginAtZero: true
            }
          }]
        }
      };


      var chart = {
        type: 'bar',
        data: chartData,
        options: chartOptions,
      };

      var renderChart = function () {
        for (var i in allItems) {
          itemNames.push(allItems[i].name);
          itemLikes.push(allItems[i].timesLiked);
        }
        console.log('VALUES', itemNames);
        var myChart = new Chart(ctx, chart);
      };

      imageSection.removeEventListener('click', ItemClickHandler);
      renderChart();

    }

  }
};

imageSection.addEventListener('click', ItemClickHandler);
