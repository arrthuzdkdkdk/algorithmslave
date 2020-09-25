var library,songs,x,y;
var song1,song2,song3;


function preload() {
  song1 = loadSound('data/iGetAKickOutOfYou.mp3'); //song file
  song2 = loadSound('data/naima.mp3');
  song3 = loadSound('data/loveThemeFromSpartacus.mp3');
}


function setup() {
  createCanvas(windowWidth, windowHeight);
  noLoop();
  background(255, 0, 0);
  angleMode(DEGREES);
  rectMode(CENTER);
  frameRate(60);
  
  library = [song1,song2,song3];
  songs = random(library);
  
  x = 0;
  y = windowHeight;
  
  amp = new p5.Amplitude();
  
  
  //button = createButton('click me');
  //button.position(0, 0);
  //button.size(50,50);
  //button.mousePressed(playSong);
}

function draw(){
  //translate(windowWidth/2,windowHeight/2);
  
  var volume=amp.getLevel();
  //let i = map(volume,0,1,100,1920);
  x = x+volume*50;
  y = y - 1;
  rect(x,y,10,10);
  if (y<0){
    y = windowHeight;
  }
  if (x>windowWidth){
    x = 0;
  }
}



function mousePressed() {
  
  if (songs.isPlaying()) {
    songs.stop();
    y = windowHeight;
    x = 0;
    noLoop();
    background(255, 0, 0);
  } else {
    loop();
    songs = random(library);
    amp.setInput(songs);
    songs.play();
    
  }
}
