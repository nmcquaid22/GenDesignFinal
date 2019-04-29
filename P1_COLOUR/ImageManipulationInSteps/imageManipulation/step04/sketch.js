var img;
var colors = [];

var sortMode = null;

function preload() {
    
    img = loadImage('pictures/pic1.jpg');
    
}

function setup() {
	createCanvas(600,600);
	noCursor();
	noStroke();
    //noLoop();
}

function draw() {
   
    var tileCount = 20;
    var rectSize = width / tileCount;
    
    img.loadPixels();
    colors = [];
    
   for (var gridY = 0; gridY < tileCount; gridY++) {
        for (var gridX = 0; gridX < tileCount; gridX++) {
            var px = int(gridX * rectSize);
            var py = int(gridY * rectSize);
            var i = (py * img.width + px) * 4; 
            var c = color(img.pixels[i], img.pixels[i + 1], img.pixels[i + 2], img.pixels[i + 3]);
            colors.push(c);
        }
    }  
  
    // 
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

   //and we also add some key functionality
function keyReleased() {
    
  

  if (key == '5') sortMode = null;
  if (key == '6') sortMode = gd.HUE;
  if (key == '7') sortMode = gd.SATURATION;
  if (key == '8') sortMode = gd.BRIGHTNESS;
  if (key == '9') sortMode = gd.GRAYSCALE;

}
    
   console.log(colors);
    



