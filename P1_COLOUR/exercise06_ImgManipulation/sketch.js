
'use strict';

var img;
var colors = [];
var sortMode = null;

function preload() {
  img = loadImage('colorMap.jpg');
}

function setup() {
  createCanvas(600, 600);
  noCursor();
  noStroke();
}

function draw() {
	// this is a variable for measuring the amount of tiles across the x axis and the floor function simply floors the nmber into a whole number
  var tileCount = floor(width / max(mouseX, 5));
  //this variable measures the rect size that is selected by curser by dividing the width of the image (canvas) by the tile count
  var rectSize = width / tileCount;

  img.loadPixels();
  //colors is stored in an array
  colors = [];

  for (var gridY = 0; gridY < tileCount; gridY++) {

    for (var gridX = 0; gridX < tileCount; gridX++) {

	  var px = int(gridX * rectSize);
	  var py = int(gridY * rectSize);
	  var i = (py * img.width + px) * 4;
	  // variable called c is created for color
      var c = color(img.pixels[i], img.pixels[i + 1], img.pixels[i + 2], img.pixels[i + 3]);
      colors.push(c);
    }
  }

  gd.sortColors(colors, sortMode);

  var i = 0;
  for (var gridY = 0; gridY < tileCount; gridY++) {
    for (var gridX = 0; gridX < tileCount; gridX++) {
      fill(colors[i]);
      rect(gridX * rectSize, gridY * rectSize, rectSize, rectSize);
      i++;
    }
  }
}

function keyReleased() {
  if (key == 'c' || key == 'C') writeFile([gd.ase.encode(colors)], gd.timestamp(), 'ase');
  if (key == 's' || key == 'S') saveCanvas(gd.timestamp(), 'png');

  if (key == '1') img = loadImage('data/pic1.jpg');
  if (key == '2') img = loadImage('data/pic2.jpg');
  if (key == '3') img = loadImage('data/pic3.jpg');
  if (key == '4') img = loadImage('data/pic4.jpg');

  if (key == '5') sortMode = null;
  if (key == '6') sortMode = gd.HUE;
  if (key == '7') sortMode = gd.SATURATION;
  if (key == '8') sortMode = gd.BRIGHTNESS;
  if (key == '9') sortMode = gd.GRAYSCALE;
}
