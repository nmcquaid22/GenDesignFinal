

function Circle(x,y) {
    this.x = x;
    this.y = y;
    this.r = random(10,72);
    
    this.update = function() {
     
        this.x = random(0,2480);
        this.y = random(0,3508);
        
    }
    
    this.show = function() {
        //noStroke();
        
        
        var px = (this.x);
        var py = (this.y);
        var col = img.get(px,py);
        
       
 
        
        //console.log(col);
        
         // hue, saturation, and brightness
   // colorMode(HSB, 255);
    // slider has a range between 0 and 255 with a starting value of 127
    //slider = createSlider(0, 255, 127);
        
          // Set the hue according to the slider
 
        fill(col[0],col[1], col[2], slider.value());
        rect(this.x,this.y, this.r, this.r);
        //ellipse(this.x,this.y, this.r, this.r);
        stroke(70);
        //console.log(rect);
    }
      
}
  



