var myfont,v;
var library,songs,song1,song2,song3;
let menu = 0;
var xlip,ylip,xrect,yrect;


function preload() {
  song1 = loadSound('assets/iGetAKickOutOfYou.mp3'); //song file
  song2 = loadSound('assets/naima.mp3');
  song3 = loadSound('assets/loveThemeFromSpartacus.mp3');
  myfont = loadFont('assets/constan.ttf'); //font file
}



//-------------------------------------------------------------------------------------------------------------------------




function setup() {
  createCanvas(windowWidth, windowHeight, WEBGL);
  textFont(myfont);
  textAlign(CENTER, CENTER);
  rectMode(CENTER);
  library = [song1,song2,song3]; //dictates "library" as selection of all songs
  songs = random(library); //picks a random song from library
  amp = new p5.Amplitude(); //amp is taking the amplitude of the song
  frameRate(1000);
}




//-------------------------------------------------------------------------------------------------------------------------


function draw() {
  
  if (menu == 0) {
    background(0);
    fill(255);
  
    push();
      textSize(48);
      let time = millis();
      rotateX(time / 1000);
      rotateZ(time / 1234);
      text('jazzcats', 0, 0);
    pop();
  
    textSize(12);
    text('click anywhere on screen to START', 0, 200);
  }
  
  if (menu == 1) {
    
    push();
      fill(0,0,random(0,255));
      noStroke();
      xlip=int(random(-width, width));
      ylip=int(random(-height, height));
      ellipse(xlip,ylip,40,40);
    pop();
  
    push(); 
      var t = frameCount%900;
      var volume = amp.getLevel();
      var v = volume*t*100;
      noFill();
      stroke(255);
      ellipse(sin(v / 50) * (v / 5), cos(v / 50) * v / 5, sin(v / 30) * 100, 100);
    pop();
   

}
 
  

}




//-------------------------------------------------------------------------------------------------------------------------


function mousePressed() {
  if (songs.isPlaying()) {
    menu = 0;
    songs.stop();
  } else {
    menu = 1;
    background(0);
    loop();
    songs = random(library);
    amp.setInput(songs);
    songs.play();
    
  }
}


//-------------------------------------------------------------------------------------------------------------------------


function keyTyped() {
  if (key === 's' && (songs.isPlaying())) {
    saveCanvas('myCanvas', 'png');
    noLoop();
    songs.stop();
  }
}

//function keyTyped() {
//  if (key === 'n' && (songs.isPlaying())) {
//    songs.stop();
//    songs = random(library);
//    amp.setInput(songs);
//    songs.play();
//  }
//}
