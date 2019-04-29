let font;
let textImg;
let numOfTiles = 50;
let tileWidth;
let circleRadius = 5;

function preload(){
  font = loadFont('data/FreeSansBold.ttf');
}

function setup(){
  background(255);
  let canvas = createCanvas(500,500);
  canvas.parent('canvasHolder');

  createSlider(1, 20, circleRadius)

  setupText();
  tileWidth = Math.floor(width/numOfTiles);

}

function draw(){
  // image(textImg, 0, 0);
  fill(0);
  for(let y = 0; y < height; y += tileWidth){
    for(let x = 0; x < width; x += tileWidth){


      let index = (x + y * textImg.width)*4;
      if(textImg.pixels[index] < 128){
      ellipse(x, y, tileWidth - 5, tileWidth - 5);
    }
    }
  }

}

function setupText(){
  textImg = createGraphics(500,500);
  textImg.pixelDensity(1);
  textImg.background(255);
  textImg.textFont(font);
  textImg.textSize(100);
  textImg.text("Hello",0,100, 50, 50);
  textImg.loadPixels();

}
