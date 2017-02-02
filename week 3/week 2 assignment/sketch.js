function setup() {
    createCanvas(500,500);
  
    
    console.log("width: " + width + " " + "height: " + height);
}

function draw() {
background(64,224,208);

fill(255,255,0);
rect(70,70,100,150);

fill(255,255,255);
ellipse(100,100,25,25);
ellipse(140,100,25,25);

fill(255,255,0);
ellipse(120,125,15,25);

fill(0,0,0);
rect(95,150,50,5);

fill(255,255,255);
rect(107,155,10,10);
rect(123,155,10,10);
}