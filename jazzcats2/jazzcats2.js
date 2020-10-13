var myfont,v;
var library,songs,song1,song2,song3,song4,song5,song6,song7;
var librarycol,colour,col1,col2,col3;
var menu = 0;
var xlip,ylip,xrect,yrect;
var time;
var r = 0;



function preload() {
  song1 = loadSound('assets/iGetAKickOutOfYou.mp3'); //song file
  song2 = loadSound('assets/naima.mp3');
  song3 = loadSound('assets/loveThemeFromSpartacus.mp3');
  song4 = loadSound('assets/upperFourHundred.mp3'); 
  song5 = loadSound('assets/theGirlFromIpanema.mp3');
  song6 = loadSound('assets/imConfessin.mp3');
  song7 = loadSound('assets/affirmation.mp3');
  
  myfont = loadFont('assets/constan.ttf'); //font file
  
  
}



//-------------------------------------------------------------------------------------------------------------------------




function setup() {
  createCanvas(windowWidth, windowHeight, WEBGL);
  
  //colour library
  col1 = color(242,133,0);
  col2 = color(254,216,177);
  col3 = color(204,204,255);
  col4 = color(190,190,190);
  col5 = color(254,216,177);
  col6 = color(76,187,23);
  col7 = color(204,204,255);
  
  textFont(myfont);
  textAlign(CENTER, CENTER);
  rectMode(CENTER);
   
  //arrays for colour and song and lining them up to be the same
  library = [song1,song2,song3,song4,song5,song6,song7]; //dictates "library" as selection of all songs
  librarycol = [col1,col2,col3,col4,col5,col6,col7];
  which = random(0,8);
  colour = librarycol[int(which)];
  songs = library[int(which)];
  
  
  amp = new p5.Amplitude(); //amp is taking the amplitude of the song
  frameRate(100);
}




//-------------------------------------------------------------------------------------------------------------------------


function draw() {
  
  //landing screen
  if (menu == 0) {
    background(0);
    fill(255);
    
    //rotating text title
    push();
      time = millis();
      textSize(75);
      translate(0,-height/3);
      rotateX(time / 1000);
      rotateZ(time / 1234);
      text('jazzcats', 0, 0);
    pop();
    
    //all other text
    textSize(32);
    text('a jazz influenced generative artwork',0,-150);
    textSize(24);
    text('controls',0,150);
    textSize(18);
    text('"T" = start sketch',0,200);
    text('"N" = next song',0,225);
    text('"S" = save sketch',0,250);
    text('"R" = reset sketch',0,275);
    text('"left mouse click" = draw',0,300);
    
  }
  
  //artwork generation
  if (menu == 1) {
    //random ellipses being drawn in background randomly
    push();
      fill(colour);
      noStroke();
      xlip=int(random(-width, width));
      ylip=int(random(-height, height));
      ellipse(xlip,ylip,40,40);
    pop();
  
    //the centre ellipse outlines that spin, also fluctuate based on volume
    push(); 
      var t = frameCount%500;
      var volume = amp.getLevel();
      var v = volume*t*200;
      fill(0,0,0,20);
      stroke(colour);
      ellipse(sin(v / 50) * (v / 5), cos(v / 50) * v / 5, sin(v / 30) * 100, 100);
    pop();
   
   //user input, rotates around the center but mouse position alters this. also fluctuates size based on volume 
   if(mouseIsPressed){
    push();
    fill(0,0,0);
    stroke(colour);
    r += 0.02;
    rotate(r);
    rect(mouseX-width/2,mouseY-height/2,volume*1000,volume*1000);
    pop();
   }

}
 
  

}



//-------------------------------------------------------------------------------------------------------------------------


function keyPressed() {
  //start the sketch and also pick a random song
  if (menu == 0 && key === 't') {
    background(0);
    loop();
    which = random(0,8);
    colour = librarycol[int(which)];
    songs = library[int(which)];
    amp.setInput(songs);
    songs.play();
    menu = 1;
    //reset only if sketch is playing
  }else if(menu == 1 && key === 'r'){
    songs.stop();
    menu = 0;
    //next song only if sketch is playing. dictates new random values as well
  }else if(menu == 1 && key === 'n'){
    songs.stop();
    which = random(0,8);
    colour = librarycol[int(which)];
    songs = library[int(which)];
    amp.setInput(songs);
    time = frameCount/100; //converts frame count to seconds
    songs.play(0,1,1,int(time)); //next song will continue to play from the duration where old song stopped
    menu = 1;
    //saves sketch only if it is playing and resets back to landing screen
  }else if(menu === 1 && key === 's'){
    saveCanvas('myCanvas','png');
    songs.stop();
    menu = 0;
}
  
}
  
