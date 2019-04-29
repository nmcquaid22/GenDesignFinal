var img;

function preload() {
    //loads the image
    img = loadImage('pictures/pic2.jpg');
    //console.log(img);
}

function setup() {
	createCanvas(1240,1748);
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


