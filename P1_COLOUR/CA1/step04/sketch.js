//trying to attach the colour pixels from the image to the circle.

//In this step I am loading the pixels and console logging them to just to prove that they are there.

function preload() {
    
   img = loadImage('pictures/pic1.jpg');
    //background(0);
}

function setup() {
	createCanvas(1240,1748);
    //background(0);
    
    
}

function draw() {
    
    //loads the pixels data for this image into the pixels array attribute.
    img.loadPixels();
    //finding the value of the 2nd pixel in the array - this will print the value
    console.log(img.pixels[1]);
    
    console.log(img);
}

  



