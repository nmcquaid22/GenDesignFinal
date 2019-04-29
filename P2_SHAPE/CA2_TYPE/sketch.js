var textTyped = "ABC";

var font;
var fontSize = 100;
var textImg;
var colorMap;

// var textImg;
// var numOfTiles = 50;
// var tileWidth;

// var circleRadius = 5;
// var radiusSlider;
// var checkbox;
//let filled = false;

var pointDensity = 5;
var circleSize = 6
var randomnessAmt = 100;

// var img;
var finishArray = [];
var startArray = [];
var stepAmount = 10;
var counter = 0;
var radiusSlider;
var opacitySlider;
var densitySlider;
var counterDir = true;

var filled = 1;
var animate = false;

var checkbox;
var animationBox;
var myWidth = $("#canvasHolder").width();


// var xoff = 0.0;

function preload(){
  font = loadFont('data/Montserrat-Regular.ttf');
  // Load the image
  colorMap = loadImage('data/colorMap.jpg');

}

function setup(){

    var canvas = createCanvas(700,400);
    canvas.parent('canvasHolder');


    // createTextGraphic();
    setupText();
    colorMap.loadPixels();
    createArrays();
    frameRate(30);

    // radiusSlider = createSlider(1, 20, 6);
    // radiusSlider.parent('radiusController');
    // radiusSlider.mouseReleased(update);

    radiusSlider = createSlider(1, 20, 6);
    radiusSlider.class("radiusSlider");
    radiusSlider.mouseReleased(update);
    radiusSlider.parent('radiusController');

    opacitySlider = createSlider(1, 20, 6);
    opacitySlider.class("opacitySlider");
    opacitySlider.mouseReleased(update);
    opacitySlider.parent('opacityController');

    densitySlider = createSlider(1, 20, 6);
    densitySlider.class("densitySlider");
    densitySlider.mouseReleased(update);
    densitySlider.parent('densityController');

    fontSizeSlider = createSlider(100, 800, 200);
    fontSizeSlider.class("fontSizeSlider");
    fontSizeSlider.mouseReleased(update);
    fontSizeSlider.parent('fontSizeController');

    randomnessSlider = createSlider(0, 200, 5);
    randomnessSlider.class("randomnessSlider");
    randomnessSlider.mouseReleased(update);
    randomnessSlider.parent('randomnessController');

    inputBox = createInput("");
    inputBox.class("inputBox");
    inputBox.input(update);
    inputBox.parent('inputBoxController');

    checkbox = createCheckbox('Fill me', true)
    checkbox.parent('fillController');
    checkbox.checked(update);

    animationBox = createCheckbox('Animation', false);
    animationBox.class("animationBox");
    animationBox.changed(update);
    animationBox.parent('animationBoxController');
}

function setupText(){

  textImg = createGraphics(width,height);
  textImg.pixelDensity(1);

  textImg.background(255);
  textImg.textFont(font);
  textImg.textSize(fontSize);
  textImg.textAlign(CENTER);

  textImg.text(textTyped, width /2, fontSize);
  textImg.loadPixels();

}

function createArrays() {
  for (var x = 0; x < textImg.width; x += pointDensity) {
        for (var y = 0; y < textImg.height; y += pointDensity) {
            // Calculate the index for the pixels array from x and y
            var index = (x + y * textImg.width) * 4;

            // Get the red value from image
            var r = textImg.pixels[index];

            if (r < 128) {

                var rValue = colorMap.pixels[index];
                var gValue = colorMap.pixels[index + 1];
                var bValue = colorMap.pixels[index +2];
                var fillColor = color(rValue, gValue, bValue);

                finishArray.push({
                xPos: x
                , yPos: y
                , fill: fillColor
                });
                startArray.push({
                    xPos: x + random(-randomnessAmt, randomnessAmt)
                    , yPos: y + random(-randomnessAmt, randomnessAmt)
                    , fill: fillColor
                  });
              }
            }
          }
        }

  function draw(){
     background(0, 20);

     noFill();
     noStroke();

     for (var i = 0; i < finishArray.length; i++) {
      if (filled == 1) {
          noStroke;
          fill(finishArray[i].fill);
      }
      else {
          //console.log("no Fill")
          noFill();
          stroke(finishArray[i].fill);
        }

      var lerpAmount = (counter / finishArray.length) * stepAmount;
      //console.log(lerpAmount)
      if (lerpAmount > 1) {
          lerpAmount = 1
      }
      var xPos = lerp(startArray[i].xPos, finishArray[i].xPos, lerpAmount);
      var yPos = lerp(startArray[i].yPos, finishArray[i].yPos, lerpAmount);

      var mx = constrain(mouseX,30,70);
          var my = constrain(mouseY,30,70);

      ellipse(xPos, yPos, circleSize, circleSize);

}

//this is the condition that moves the circles along an array.

if (counterDir === true & animate == true) {
    if (counter * stepAmount > finishArray.length) {
        counter++;
        // xPos = constrain(xPos,30,70);
        // yPos = constrain(mouseY,30,70);
}

    else {
        // console.log()
        counterDir = false;
        counter--;

    }
  }
   else {

        if(counter * stepAmount > 0) {
            counter--;
        }
        else {
          counterDir = true;

        }
      }


}

  // for(var y = 0;y < textImg.width;  y += pointDensity){
  //   for(var x = 0;x < textImg.height;  x += pointDensity){
  //
  //       //calculate the index for the pixel array from the x and y
  //
  //     var index = (x + y * textImg.width)*4;
  //
  //
  //       var r = textImg.pixels[index];
  //
  //       if(r < 128) {
  //           if(filled) {
  //               fill(255,0,255);
  //              // noStroke();
  //               ellipse(x, y, circleRadius, circleRadius);
  //           }
  //           else {
  //               noFill();
  //               stroke(0);
  //               ellipse(x, y, circleRadius, circleRadius);
  //           }
  //          }
  //
  //     }
  //   }

function update() {
    circleSize = radiusSlider.value();
    // filled = checkbox.checked();
    pointDensity = densitySlider.value();
    fontSize = fontSizeSlider.value();
    randomnessAmt = randomnessSlider.value();
    textTyped = inputBox.value();

    if (checkbox.checked() == true) {
        filled = true;
    }
    else {
        filled = false;
    }

    if (animationBox.checked() == true) {
        animate = true;
    }
    else {
        animate = false;
    }

    finishArray = [];
    startArray = [];
    setupText();
    createArrays();

    counter = 0;

}
