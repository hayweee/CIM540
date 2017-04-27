
var song;
var button;
var amp;
var sliderVolume;

function setup() {
  createCanvas(500, 500);
  song = loadSound("strawberry_fields.mp3", loaded);
  amp = new p5.Amplitude();
sliderVolume = createSlider(0, 1, 0.5, 0.01);
  background(255,255,153);
}

function loaded() {
  button = createButton("play");
  button.mousePressed(togglePlaying);
}

function draw() {
  background(207,22,0);

  var vol = amp.getLevel();
  var diam = map(vol, 0, 0.3, 10, 200);
    song.setVolume(sliderVolume.value());

fill(255,255,255);
ellipse(180,150,175,175);
    fill(133,191,89);
    ellipse(200,130,100,100);
        fill(0,0,0);
        ellipse(210,130,70,70);
            fill(255,255,255);
            ellipse(200,120,25,25);
            ellipse(220,110,15,15);
            ellipse(225,125,10,10)
fill(255,255,255);
ellipse(330,150,175,175);
   fill(133,191,89);
    ellipse(350,130,100,100);
        fill(0,0,0);
        ellipse(360,130,70,70);
            fill(255,255,255);
            ellipse(350,120,25,25);
            ellipse(370,110,15,15);
            ellipse(375,125,10,10);

  fill(0, 0, 0);
  ellipse(width / 2, height / 2, diam, diam);

fill(255, 248, 167);
ellipse(20, 20, 7, 9);
    
fill(255, 248, 167);
ellipse(120, 20, 7, 9);
    
fill(255, 248, 167);
ellipse(220, 20, 7, 9);
    
fill(255, 248, 167);
ellipse(320, 20, 7, 9);
    
fill(255, 248, 167);
ellipse(420, 20, 7, 9);
    
fill(255, 248, 167);
ellipse(520, 20, 7, 9);
    
    fill(255, 248, 167);
    ellipse(70, 70, 7, 9);
    
    fill(255, 248, 167);
    ellipse(270, 70, 7, 9);
    
    fill(255, 248, 167);
    ellipse(470, 70, 7, 9);
    
    fill(255, 248, 167);
    ellipse(570, 70, 7, 9);
    
        fill(255, 248, 167);
        ellipse(20, 120, 7, 9);
    
        fill(255, 248, 167);
        ellipse(420, 120, 7, 9);
    
        fill(255, 248, 167);
        ellipse(520, 120, 7, 9);
    
                fill(255, 248, 167);
                ellipse(70, 170, 7, 9);
    
                fill(255, 248, 167);
                ellipse(470, 170, 7, 9);
    
                fill(255, 248, 167);
                ellipse(570, 170, 7, 9);
    
fill(255, 248, 167);
ellipse(20, 220, 7, 9);
    
fill(255, 248, 167);
ellipse(420, 220, 7, 9);
    
fill(255, 248, 167);
ellipse(520, 220, 7, 9);
    
    fill(255, 248, 167);
    ellipse(70, 270, 7, 9);
    
    fill(255, 248, 167);
    ellipse(470, 270, 7, 9);
    
    fill(255, 248, 167);
    ellipse(570, 270, 7, 9);
    
    
fill(255, 248, 167);
ellipse(20, 320, 7, 9);
    
fill(255, 248, 167);
ellipse(120, 320, 7, 9);
    
fill(255, 248, 167);
ellipse(220, 320, 7, 9);
    
fill(255, 248, 167);
ellipse(320, 320, 7, 9);
    
fill(255, 248, 167);
ellipse(420, 320, 7, 9);
    
fill(255, 248, 167);
ellipse(520, 320, 7, 9);
    
    fill(255, 248, 167);
    ellipse(70, 370, 7, 9);
    
    fill(255, 248, 167);
    ellipse(170, 370, 7, 9);
    
    fill(255, 248, 167);
    ellipse(270, 370, 7, 9);
    
    fill(255, 248, 167);
    ellipse(370, 370, 7, 9);
    
    fill(255, 248, 167);
    ellipse(470, 370, 7, 9);
    
    fill(255, 248, 167);
    ellipse(570, 370, 7, 9);
    
fill(255, 248, 167);
ellipse(20, 420, 7, 9);
    
fill(255, 248, 167);
ellipse(120, 420, 7, 9);
    
fill(255, 248, 167);
ellipse(220, 420, 7, 9);
    
fill(255, 248, 167);
ellipse(320, 420, 7, 9);
    
fill(255, 248, 167);
ellipse(420, 420, 7, 9);
    
fill(255, 248, 167);
ellipse(520, 420, 7, 9);
    
    fill(255, 248, 167);
    ellipse(70, 470, 7, 9);
    
    fill(255, 248, 167);
    ellipse(170, 470, 7, 9);
    
    fill(255, 248, 167);
    ellipse(270, 470, 7, 9);
    
    fill(255, 248, 167);
    ellipse(370, 470, 7, 9);
    
    fill(255, 248, 167);
    ellipse(470, 470, 7, 9);
    
    fill(255, 248, 167);
    ellipse(570, 470, 7, 9);
}

function togglePlaying() {
  if (!song.isPlaying()) {
    song.play();
    song.setVolume(0.3);
    button.html("pause");
  } else {
    song.stop();
    button.html("play");
  }
}


//var song;
//var sliderVolume;
//var sliderRate;
//var sliderPan;


//function setup(){
    //createCanvas(200,200);
    //song = loadSound("strawberry_fields.mp3", loaded);
    //sliderVolume = createSlider(0, 1, 0.5, 0.01);
    //sliderRate = createSlider(0.3, 2.3, 1, 0.01);
//}

//function loaded(){
    //song.play();
//}

//function draw(){
    //background(0);
    //song.setVolume(sliderVolume.value());
    //song.rate(sliderRate.value());
//}