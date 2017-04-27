
var song;
var button;
var amp;

function setup() {
  createCanvas(500, 500);
  song = loadSound("strawberry_fields.mp3", loaded);
  amp = new p5.Amplitude();
  background(50);
}

function loaded() {
  button = createButton("play");
  button.mousePressed(togglePlaying);
}

function draw() {
  background(0);

  var vol = amp.getLevel();
  var diam = map(vol, 0, 0.3, 10, 200);

  fill(255, 0, 255);
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