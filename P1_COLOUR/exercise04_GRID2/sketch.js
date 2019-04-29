'use strict';

var stepX = 10;
var stepY = 15;


function setup() {
createCanvas(800,400);
noStroke();
colorMode(HSB, width,height,100);
   
}

function draw() {
    
    stepX = mouseX/5 + 1;
    stepY = mouseY/5 + 1;
    
    for( var gridY=0; gridY < height; gridY = gridY+stepX){
    for (var gridX = 0; gridX < width; gridX = gridX+stepY){
        fill(gridX,height - gridY,100);
        rect(gridX,gridY,stepX,stepY);
        
        }
    }
}