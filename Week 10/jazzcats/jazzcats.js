var library,songs,x,y,x2,y2;
var song1,song2,song3;
var mousepos1,mousepos2;
var c1x,c1y,c2x,c2y,c3x,c3y,c4x,c4y;

//song library
function preload() { 
  song1 = loadSound('data/iGetAKickOutOfYou.mp3'); //song file
  song2 = loadSound('data/naima.mp3');
  song3 = loadSound('data/loveThemeFromSpartacus.mp3');
  
 
  
}

function setup() {
  createCanvas(windowWidth, windowHeight); //creates canvas
  noLoop(); //stops drawing
  background(0, 255, 255); //background colour
  angleMode(DEGREES); //changes angle mode to degress
  rectMode(CENTER); //changes rectangle mode to center
  frameRate(1000); //choose framerate



  
  library = [song1,song2,song3]; //dictates "library" as selection of all songs
  songs = random(library); //picks a random song from library
  
  x = 0; //x will equal 0
  y = windowHeight; //y is the height of a window
  
  amp = new p5.Amplitude(); //amp is taking the amplitude of the song
  fft = new p5.FFT(); //analyzes the sound and gets the waveform and frequencies
}


function draw(){
  fill(255,0,0);


  c1x = 710;
  c1y = 235;
  c2x = 1210;
  c2y = 235;
  c3x = 710;
  c3y = 735;
  c4x = 1210;
  c4y = 735;

    line(c1x,c1y,c2x,c2y);
  line(c1x,c1y,c3x,c3y);
  line(c3x,c3y,c4x,c4y);
  line(c4x,c4y,c2x,c2y);




    //make t to hold the current frame number as a float
    var t = frameCount;
push();
    //move the coordinate system to the middle
    translate(windowWidth / 2, windowHeight / 2);

    ellipse(sin(t / 50) * (t / 10), cos(t / 50) * (t / 10), t / (t), t / (t));
    ellipse(sin(t / 100) * (t / 10), cos(t / 100) * (t / 10), t / (t), t / (t));
    ellipse(sin(t / 200) * (t / 10), cos(t / 200) * (t / 10), t / (t), t / (t));
    ellipse(sin(t / 300) * (t / 10), cos(t / 300) * (t / 10), t / (t), t / (t));
pop();






  //moving rectangle
  var volume=amp.getLevel(); //gets the level of the volume
  x = x+volume*50; //the equation that moves the rectangle to the right based on volume, can change to increase or decrease speed
  y = y - 1; //moves rectangle at constant upwards speed, once again can modify to change speed
  rect(x,y,10,10); //draws the rectangle
  if (y<0){ //if loop to move rectangle back to bottom if hits the top of the screen
    y = windowHeight;
  }
  if (x>windowWidth){ //if loop to move the rectangle back to left if hits the right side of the screen
    x = 0;
  }
  
  fill(255,255,0);
  x2=int(random(windowWidth)); //gets random x axis on canvas
  y2=int(random(windowHeight)); //gets random y axis on canvas
  ellipse(x2,y2,40,40); //draws ellipses on random areas of the canvas
  
  
  let spectrum = fft.analyze(); //gets the spectrum from the fft delcared before
  noStroke();
  fill(255, 0, 255);
  for (let i = 0; i< spectrum.length; i++){ //sets up an incrementing i loop
    let x = map(i, 0, spectrum.length, 0, windowWidth+windowWidth); //mapping x so that the bounds of the spectrum length are instead mapped to the window size
    let h = -windowHeight + map(spectrum[i], 0, 255, windowHeight, 0); //mapping h to let it form the waves of the waveform
    ellipse(x, windowHeight, windowWidth / spectrum.length, h ); //draws the ellipses that make up the waveform and positions them to start bottom left of canvas
  }
  //same as above but also puts the waveform on top of the canvas
  fill(0, 0, 255);
  for (let i = 0; i< spectrum.length; i++){
    let x = map(i, 0, spectrum.length, 0, windowWidth+windowWidth);
    let h = -windowHeight + map(spectrum[i], 0, 255, windowHeight, 0);
    ellipse(x, 0, windowWidth / spectrum.length, h );
  }


  
}



function mousePressed() {
  
  if (songs.isPlaying()) { //loop to stop playing if a song is already playing, or play a new random song if nothing is playing
    songs.stop();
    y = windowHeight;
    x = 0;
    noLoop();
  } else {
    loop();
    songs = random(library);
    amp.setInput(songs);
    songs.play();
    
  }
}


//class Jitter {
//  constructor() {
//    this.x = c1x;
//    this.y = c1y;
//    this.diameter = random(10, 30);
//    this.speed = 1;
//  }

//  move() {
//    this.x += random(-this.speed, this.speed);
//    this.y += random(-this.speed, this.speed);
//  }
//  display(){

//  }
//}
