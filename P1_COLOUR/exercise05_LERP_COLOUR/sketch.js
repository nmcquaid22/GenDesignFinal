'use strict';

var colorsLeft = [];
var colorsRight = [];
var colors =[];

//var numOfRows = 5;
//var numOfCols = 5;

var canvasWidth = 500;
var canvasHeight = 500;

var tileCountX = 5;
var tileCountY = 5;

function setup() {
	createCanvas(canvasWidth,canvasHeight);
	colorMode(HSB, 360, 100, 100);
	//rectMode(CENTER);
	//noStroke();
   // myColor = color(123,123,45);
    //console.log(myColor);
    shakeColors();
    

}

function draw() {
    
 
var tileWidth = canvasWidth/tileCountX;
var tileHeight = canvasHeight/tileCountY;
var interCol;
colors = [];   
    
    for (var gridY =0; gridY < tileCountY; gridY++) {
         var col1 = colorsLeft[gridY];
         var col2 = colorsRight[gridY];
        
        for (var gridX = 0; gridX < tileCountX; gridX++) {
            
            var amount = map(gridX, 0, 5,0,1);
            var startColor = colorsLeft[gridY];
            var endColor = colorsRight[gridX];
            
            var interCol = lerpColor(startColor, endColor, amount);
           
            fill(interCol);
            
            var posX = tileWidth * gridX;
            var posY = tileHeight * gridY;
            
            
            rect(posX,posY,tileWidth,tileHeight);
            colors.push(interCol);
            
        }
        
    }
   
}


function shakeColors() {
   
    for (var i=0; i <tileCountY; i++) {
     
    colorsLeft[i] = color(random(0, 60), random(0, 100), 100);
    colorsRight[i] = color(random(160, 190), 100, random(0, 100));
        console.log(colorsLeft,colorsRight);
        
    }
}