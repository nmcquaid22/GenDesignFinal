var img;
var colors = [];

function preload() {
    
    img = loadImage('pictures/pic2.jpg');
    
}

function setup() {
    createCanvas(1240,1748);
	noCursor();
	noStroke();
    noLoop();
}

function draw() {
    //define your number of tiles
    //you can change this value to see the diff color objects displayed in console.
    var tileCount = 20;
    //and then the width of each tile
    var rectSize = width / tileCount;
    
    img.loadPixels();
    
    colors = [];
    
    //if our image is 400px hight and wide and our tile count is 20
    //which will mean our tile width is also 20px we will want to grab the colors
    //at 0,20,40,60... and store them
    
    
    for (var gridY = 0; gridY < tileCount; gridY++) {
        //for each gridX value we need to work out a color to be stored
    for (var gridX = 0; gridX < tileCount; gridX++) {
        //we work out a pixel value in the x and y
      var px = int(gridX * rectSize);
      var py = int(gridY * rectSize);
        //we then convert that into the appropiate index value in the pixels array.
        //remember in a pixel array there are four values per pixel
        //eg of a pixel array below
        //The first four numbers represent one pixel
        //[50, 60, 55, 34, 20, 30, 50, 77]
        //var i represents the first value in that array
      var i = (py * img.width + px) * 4; 
        
        //we then create a color object
      var c = color(img.pixels[i], img.pixels[i + 1], img.pixels[i + 2], img.pixels[i + 3]);
      colors.push(c);
    }
  }  
    
   // console.log(img.pixels[1]);
    
    
    
    console.log(colors);
    
}


