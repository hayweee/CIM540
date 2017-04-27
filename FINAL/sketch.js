
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