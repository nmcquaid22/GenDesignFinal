var img;

function preload() {
    //loads the image
    img = loadImage('pictures/pic1.jpg');
    //console.log(img);
}

function setup() {
	createCanvas(600,600);
	noCursor();
	noStroke();
   // loadPixels();
     noLoop();
}

function draw() {
    //loads the pixels data for this image into the pixels array attribute.
    img.loadPixels();
    //finding the value of the 2nd pixel in the array - this will print the value
    console.log(img.pixels[1]);
    
    console.log(img);
    
}


