function setup() {
	createCanvas(500,500);
	colorMode(HSB, width, height, 100);
	//rectMode(CENTER);
	//noStroke();
}

function draw() {

	//fill(360,100,100);

	numCols = 100;
	numRows = 100;

	var stepX = width/numCols;
	var stepY = width/numRows;

	for(var gridY = 0; gridY < height; gridY += stepY) {
		for(var gridX = 0; gridX < width; gridX += stepX) {
            fill(gridX,height-gridY,100);
			rect(gridX,gridY,stepX,stepY);
            noStroke();
		}
	}
}

function keyPressed() {
	if(key=='s' || key=='S') saveCanvas(gd.timestamp() + '_MouseX_' + mouseX + '_MouseY_' + mouseY, 'png');
}