var myfont,v;
var library,songs,song1,song2,song3,song4,song5,song6,song7,song8,song9,song10;
var prevSong;
var librarycol,colour,col1,col2,col3,col4,col5,col6,col7,col8,col9,col10;
var menu = 0;
var xlip,ylip,xrect,yrect;
var time;
var r = 0;
var pg;
var cnv;


function preload() {
  song1 = loadSound('assets/iGetAKickOutOfYou.mp3'); //song file
  song2 = loadSound('assets/dearOldStockholm.mp3');
  song3 = loadSound('assets/naima.mp3');
  song4 = loadSound('assets/upperFourHundred.mp3');
  song5 = loadSound('assets/imConfessin.mp3');
  song6 = loadSound('assets/willowWeepForMe.mp3');
  song7 = loadSound('assets/stardust.mp3');
  song8 = loadSound('assets/twistedBlues.mp3');
  song9 = loadSound('assets/iGetAlongWithoutYou.mp3');
  song10 = loadSound('assets/loveThemeFromSpartacus.mp3');
  
  myfont = loadFont('assets/constan.ttf'); //font file
  
  
}



//-------------------------------------------------------------------------------------------------------------------------




function setup() {
  cnv = createCanvas(windowWidth, windowHeight, WEBGL);
  
  col1 = color(210,180,140);
  col2 = color(0,128,128);
  col3 = color(242,133,0);
  col4 = color(190,190,190);
  col5 = color(76,187,23);
  col6 = color(255,239,0);
  col7 = color(128,0,32);
  col8 = color(245,245,220);
  col9 = color(181,126,220);
  col10 = color(135,206,235);

  
  textFont(myfont);
  textAlign(CENTER, CENTER);
  rectMode(CENTER);
  
  library = [song1,song2,song3,song4,song5,song6,song7,song8,song9,song10]; //dictates "library" as selection of all songs
  librarycol = [col1,col2,col3,col4,col5,col6,col7,col8,col9,col10];

  which = random(0,10);
  songs = library[int(which)];
  colour = librarycol[int(which)];

  pg = createGraphics(175,100);
  
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
      textSize(150);
      rotateX(time / 1000);
      rotateZ(time / 1234);
      text('jazzcats', 0, 0);
    pop();
    
    
    textSize(24);
    text('a jazz influenced generative artwork',0,-height/3);
    textSize(18);
    text('press "T" to start',0,-height/4);
    
  }
  
  if (menu == 1) {
    

    
    
    push();
      fill(0,20);
      stroke(colour);
      xlip=int(random(-width, width));
      ylip=int(random(-height, height));
      ellipse(xlip,ylip,75,75);
    pop();
  
    push(); 
      var t = frameCount%500;
      var volume = amp.getLevel();
      var v = volume*t*200;
      fill(colour);
      stroke(255);
      ellipse(sin(v / 50) * (v / 5), cos(v / 50) * v / 5, sin(v / 30) * 75, 75);
    pop();
   
   if(mouseIsPressed){
    push();
    fill(random(0,255),75);
    stroke(colour);
    r += 0.02;
    rotate(r);
    ellipse(mouseX-width/2,mouseY-height/2,volume*750,volume*750);
    pop();
   }
   push();
    pg.background(0);
    pg.textSize(12);
    pg.fill(255);
    pg.text('"N" = next song',pg.width/10,pg.height-15);
    pg.text('"R" = reset',pg.width/10,pg.height-30);
    pg.text('"S" = save sketch',pg.width/10,pg.height-45);
    pg.text('"left mouse click" = draw',pg.width/10,pg.height-60);
    image(pg,-width/2,-height/2);
   pop();
}
 
  

}



//-------------------------------------------------------------------------------------------------------------------------


function keyTyped() {
  if (menu == 0 && key == 't') {
    background(0);
    loop();
    which = random(0,10);
    songs = library[int(which)];
    colour = librarycol[int(which)];
    amp.setInput(songs);
    songs.play();
    menu = 1;
  }else if(menu == 1 && key == 'r'){
    songs.stop();
    menu = 0;
  }else if(menu == 1 && key == 's'){
    save(cnv,'myCanvas.jpg');
    songs.stop();
    noLoop();
    menu = 0;
    loop();
  }else if(menu == 1 && key == 'n'){
    prevSong = songs;
    songs.stop();
    which = random(0,10);
    songs = library[int(which)];
    colour = librarycol[int(which)];
      if (prevSong == songs){
        which = random(0,10);
        songs = library[int(which)];
        colour = librarycol[int(which)];
        amp.setInput(songs);
        time = frameCount/100;
        songs.play(0,1,1,int(time));
        menu = 1;
      }else {
        amp.setInput(songs);
        time = frameCount/100;
        songs.play(0,1,1,int(time));
        menu = 1;
    

}
  
}

}
