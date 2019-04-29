

function setup() {
	let canvas = createCanvas(500,500);
    canvas.parent('canvasHolder');

}

function draw() {

	

	numCols = 100;
	numRows = 100;

	var stepX = width/numCols;
	var stepY = width/numRows;

	for(var gridY = 0; gridY < height; gridY += stepY) {
		for(var gridX = 0; gridX < width; gridX += stepX) {
            
			rect(gridX,gridY,stepX,stepY);
            noStroke();
		}
	}
}
