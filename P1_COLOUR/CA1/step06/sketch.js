
//tring to adjust the brightness, hue and saturation on each pixel and then integrating linear interpolation
var img;
var circle = [];
//var colors =[];
//var sortMode = null;


//var vScale = 16;
var slider;

function preload() {
    
   img = loadImage('pictures/circles.jpg');
    //background(0);
}

function setup() {
	createCanvas(2480,3508);
    pixelDensity(1);
     noStroke();
    //colorMode(HSB, 160, 50, 70, 20);
    //colorMode(HSB, 100, 100, 100);
    //img = createCapture(IMAGE);
    //img.size(width/vScale, height/vScale);
    
    for (var i = 0; i < 10; i++) {
    circle[i] = new Circle;
    //background(51);  
        
    }
    
    slider = createSlider(0,255,100);
    background(20);
}

function draw() {

    //background(51);
    //loads the pixels data for this image into the pixels array attribute.
    img.loadPixels();
   
  


 
    for (var i = 0; i < circle.length; i++) {
       // if (pixelDensity > 100) {
    circle[i].update();
    
    circle[i].show();
        
        
    }
    //finding the value of the 2nd pixel in the array - this will print the value
   // console.log(img.pixels[1]);
    
    //console.log(img);
    
}
 function keyPressed() {
  if (key == 's' || key == 'S') saveCanvas(gd.timestamp(), 'png');
     
     
}







