//trying to attach the colour pixels from the image to the circle.

//In this step, I am going to introduce a circle. This will be able to grab the color value from the //pixel in the picture and apply it to the canvas.
var img;
var circle = [];
//var vScale = 16;
var slider;

function preload() {
    
   img = loadImage('pictures/circles.jpg');
    //background(0);
}

function setup() {
	createCanvas(2480,3508);
    pixelDensity(1);
    
    //img = createCapture(IMAGE);
    //img.size(width/vScale, height/vScale);
    
    for (var i = 0; i < 10; i++) {
    circle[i] = new Circle;
    //background(51); 
    }
    
    slider = createSlider(0,255,127);
    background(51);
}

function draw() {

    //background(51);
    //loads the pixels data for this image into the pixels array attribute.
    img.loadPixels();
    for (var i = 0; i < circle.length; i++) {
    circle[i].update();
    
    circle[i].show();
    }
    //finding the value of the 2nd pixel in the array - this will print the value
   // console.log(img.pixels[1]);
    
    //console.log(img);
    
}

  



