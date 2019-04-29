
let numTiles = 3;
let tileWidth;

function setup(){
  createCanvas(500,500);
  tileWidth = width/numTiles;
  angleMode(DEGREES);
  background(0);
}

function draw(){
  for(let gridY = 0; gridY < numTiles; gridY++){
    for(let gridX = 0; gridX < numTiles; gridX++){
      rectMode(CENTER);
      strokeWeight(1);
      fill(255);
      push();
      translate(gridX*tileWidth+tileWidth/2, gridY*tileWidth+tileWidth/2);
      rotate(mouseY);
      rect(0, 0, tileWidth, tileWidth);
      pop();

    }
  }
}
