//NOTE

// this script shows my attempt at using all of the variables properly and implementing the tapered effect on the hands using beginShape().



let hourStrokeColor;
let hourStrokeCap;
let hourStrokeWeight = 10;
let hourStrokeLength = 50;

let minutesStrokeColor;
let minuteStrokeCap;
let minuteStrokeWeight = 4;
let minuteStrokeLength = 10;

let clockRadius = 250;

let hourHandsTaper = 6;
let hourHandLength = 195;
let hourHandOffset = 80;
let hourHandStartWidth = 20;

let minuteHandsTaper = 6;
let minuteHandLength = 155;
let minuteHandOffset = 80;
let minuteHandStartWidth = 20;

let secondHandsTaper = 2;
let secondHandLength = 155;
let secondHandOffset = 80;
let secondHandStartWidth = 10;

function setup() {
    
    createCanvas(500,500);
    noLoop();
    angleMode(DEGREES);

     minutesStrokeColor=color(30,30,30);
     minuteStrokeCap = SQUARE;

     hourStrokeColor=color(30,30,30);
     hourStrokeCap = SQUARE;
}

function draw() {
    background("white");
 
    
          //clock background 
          push();
          stroke(1);
          translate(width/2,height/2);
          ellipse(0,0,clockRadius*2,clockRadius*2);
          fill(0);
          pop();

          //clock ticks
          for(let i = 0; i <60; i++) {
                push();
                translate(width/2,height/2);
                rotate(map(i,0,60,0,360));
          
                  if(i===0 || i%5===0) {//check if its an hour
                    strokeWeight(hourStrokeWeight);
                    strokeCap(hourStrokeCap);
                    line(0,clockRadius-hourStrokeLength,0,clockRadius);

                  } else {
                        strokeWeight(minuteStrokeWeight);
                        strokeCap(minuteStrokeCap);
                          fill(minutesStrokeColor)
                        line(0,clockRadius-minuteStrokeLength,0,clockRadius);
                      }
          pop();
        }
    
           //variables for the hands
            let hr = hour();
            let mn = minute();
            let sc = second();

            let  secondAngle = map(sc, 0, 60, 0, 360);
            let  minuteAngle = map(mn, 0, 60, 0, 360);
            let  hourAngle = map(hr, 0, 12, 0, 360);
         
              //hours hand
            push();
            noStroke();
            fill(30,30,30);
            translate(width/2,height/2);
          
            rotate(hourAngle+270);
            beginShape();
      
            vertex(-hourHandOffset, -hourHandStartWidth/2);
            vertex(hourHandLength,- hourHandStartWidth/2+hourHandsTaper/2);
            vertex(hourHandLength, hourHandStartWidth/2-hourHandsTaper/2);
            vertex(-hourHandOffset, hourHandStartWidth/2);
            endShape();
            pop();
    
      
          // minutes hand
            push();
            noStroke();
      
            fill(30,30,30);
            translate(width/2,height/2);
      
            rotate(minuteAngle+270);
            beginShape(); 
            vertex(-minuteHandOffset, -minuteHandStartWidth/2);
            vertex(minuteHandLength,-minuteHandStartWidth/2+minuteHandsTaper/2);
            vertex(minuteHandLength,minuteHandStartWidth/2-minuteHandsTaper/2);
            vertex(-minuteHandOffset,minuteHandStartWidth/2);
            endShape();
            pop();
    
            // sec hand taper
            push();
            fill(255,0,0);
            noStroke();
            
            translate(width/2, height/2);
            rotate(secondAngle+270);
      
            beginShape();
            vertex(-secondHandOffset, - secondHandStartWidth/2);
            vertex(secondHandLength, - secondHandStartWidth/2 );
            vertex(secondHandLength, secondHandStartWidth/2);
            vertex(-secondHandOffset, secondHandStartWidth/2);
            endShape();
      
            ellipse(0,0,15,15);
            ellipse(secondHandLength-25/2+1, 0, 25, 25);
            pop();

    }


//            let counter = 1;
//            for(let i=0; i<6*12*5;i+=6*5){
//              push();
//              strokeWeight(5);
//              translate(width/2,height/2);
//              textSize(28);
//              textAlign(CENTER,CENTER);
//              text(counter, (clockRadius+32/2) * cos(i+270+6*5), (clockRadius+32/2) * sin(i+270+6*5));
//              counter++;
//              pop();
//            }
//
//        }
 
