
let numTiles = 30;
let tileWidth;

function setup(){
  createCanvas(500,500);
  tileWidth = width/numTiles;
  angleMode(DEGREES);
  // noLoop();
  // frameRate(1);
}

function draw(){
  background(255);

  //picks same set of random numbers each time
  randomSeed(100);


  for(let gridY = 0; gridY < numTiles; gridY++){
    for(let gridX = 0; gridX < numTiles; gridX++){
      // rectMode(CENTER);
      strokeCap(PROJECT);
      fill(0);
      push();
      translate(gridX*tileWidth+tileWidth/2, gridY*tileWidth+tileWidth/2);
      // rotate(mouseX);
      //scale(1/3);

      //There can only be two outcomes. 0 and 1
      let choice = Math.floor(random(2));
      if(choice == 0){
        strokeWeight(mouseX/20);
      line(-tileWidth/2, tileWidth, tileWidth, -tileWidth/2);
    }else{
      strokeWeight(mouseY/20);
      line(-tileWidth/2, -tileWidth, tileWidth, tileWidth/2);
    }
      pop();

    }
  }
}
function mousePressed(){
  randomSeed(1000);
}
