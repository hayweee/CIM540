var changeBackground = false;

function setup() {

}

function draw() {
  if(changeBackground == true){
    background(255,0,0);
  }else{
    background(0,255,0);
  }
}

function mousePressed(){
  changeBackground = true;
}

function mouseReleased(){
  changeBackground = false;
}

var centerX = 0;
var centerY = 0;
function setup() {
  createCanvas(500,500);
  centerX = width/2;
  centerY = height/2;
}

function draw() {
  ellipse(centerX,centerY, 10,10);
  /*
  if(mouseY < centerY ){
    console.log("Above centerY");
    fill(255,0,0);
  }
  if(mouseY > centerY){
    console.log("Below centerY");
    fill(0,255,0);
  }
  if(mouseY == centerY){
    fill(0,0,255);
  }
  */

  if(mouseX > centerX){
    console.log("right");
    fill(255,0,0);
  }
  if(mouseX < centerX){
    console.log("left");
    fill(0,255,0);
  }
  if(mouseX == centerX){
    fill(0,0,255);
  }

}
var i = 0;

function setup() {
  createCanvas(200, 200);
  frameRate(60);

}

function draw() {

  background(255);

  ellipse(i, height / 2, 10, 10);

  if (i > width) {
    i = 0;
  }

  i = i + 1;

}
var backgroundCounter = 0;

function setup() {

}

function draw() {
  if (backgroundCounter == 0) {
    background(255, 0, 0);
  } else if (backgroundCounter == 1) {
    background(0, 255, 0);
  } else if (backgroundCounter == 2) {
    background(0, 0, 255);
  } else {
    backgroundCounter = 0;
  }
}

function mouseReleased() {
 backgroundCounter = backgroundCounter + 1;
}