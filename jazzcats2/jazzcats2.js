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
  song4 = loadSound('assets/upperFourHundred.mp3'); //song file
  song5 = loadSound('assets/theGirlFromIpanema.mp3');
  song6 = loadSound('assets/imConfessin.mp3');
  song7 = loadSound('assets/affirmation.mp3');
  
  myfont = loadFont('assets/constan.ttf'); //font file
  
  
}



//-------------------------------------------------------------------------------------------------------------------------




function setup() {
  createCanvas(windowWidth, windowHeight, WEBGL);
  
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
  
  if (menu == 0) {
    background(0);
    fill(255);
    
    
    push();
      time = millis();
      textSize(75);
      translate(0,-height/3);
      rotateX(time / 1000);
      rotateZ(time / 1234);
      text('jazzcats', 0, 0);
    pop();
    
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
  
  if (menu == 1) {
    push();
      fill(colour);
      noStroke();
      xlip=int(random(-width, width));
      ylip=int(random(-height, height));
      ellipse(xlip,ylip,40,40);
    pop();
  
    push(); 
      var t = frameCount%500;
      var volume = amp.getLevel();
      var v = volume*t*200;
      fill(0,0,0,20);
      stroke(colour);
      ellipse(sin(v / 50) * (v / 5), cos(v / 50) * v / 5, sin(v / 30) * 100, 100);
    pop();
   
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
  if (menu == 0 && key === 't') {
    background(0);
    loop();
    which = random(0,8);
    colour = librarycol[int(which)];
    songs = library[int(which)];
    amp.setInput(songs);
    songs.play();
    menu = 1;
  }else if(menu == 1 && key === 'r'){
    songs.stop();
    menu = 0;
  }else if(menu == 1 && key === 'n'){
    songs.stop();
    which = random(0,8);
    colour = librarycol[int(which)];
    songs = library[int(which)];
    amp.setInput(songs);
    time = frameCount/100;
    songs.play(0,1,1,int(time));
    menu = 1;
  }else if(menu === 1 && key === 's'){
    saveCanvas('myCanvas','png');
    songs.stop();
    menu = 0;
}
  
}
  
