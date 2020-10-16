//all the variables used
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
  song1 = loadSound('assets/iGetAKickOutOfYou.mp3'); //all the song files being loaded
  song2 = loadSound('assets/dearOldStockholm.mp3');
  song3 = loadSound('assets/naima.mp3');
  song4 = loadSound('assets/upperFourHundred.mp3');
  song5 = loadSound('assets/imConfessin.mp3');
  song6 = loadSound('assets/willowWeepForMe.mp3');
  song7 = loadSound('assets/stardust.mp3');
  song8 = loadSound('assets/twistedBlues.mp3');
  song9 = loadSound('assets/iGetAlongWithoutYou.mp3');
  song10 = loadSound('assets/loveThemeFromSpartacus.mp3');
  
  myfont = loadFont('assets/constan.ttf'); //loading font file
  
  
}



//-------------------------------------------------------------------------------------------------------------------------




function setup() {
  cnv = createCanvas(windowWidth, windowHeight, WEBGL); //creating the canvas
  
  //the colours being assigned to their values
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

  
  textFont(myfont); //calling the font as "myfont"
  textAlign(CENTER, CENTER); //all text being centered
  rectMode(CENTER); //all rectangles being centered
  
  library = [song1,song2,song3,song4,song5,song6,song7,song8,song9,song10]; //dictates "library" as selection of all songs
  librarycol = [col1,col2,col3,col4,col5,col6,col7,col8,col9,col10]; //dictates "librarycol" as selection of all colours

  which = random(0,10); //calls a random number which will pick an array position
  songs = library[int(which)]; //picks from the song array. everytime "songs" is used it uses the one from the array
  colour = librarycol[int(which)]; //picks from the colour array. everytime "colour" is used it uses the one from the array

  pg = createGraphics(175,100); //creating the canvas for the instructions
  
  amp = new p5.Amplitude(); //amp is taking the amplitude of the song
  frameRate(100); //setting the framerate
}




//-------------------------------------------------------------------------------------------------------------------------


function draw() {
  
  if (menu == 0) { //menu/landing page
    background(0); //black background
    fill(255); //white fill for text
    
    
    push();
      time = millis(); //setting the millis() of the program as "time"
      textSize(150); //text size
      rotateX(time / 1000); //rotating text on x axis
      rotateZ(time / 1234); //rotating text on z axis
      text('jazzcats', 0, 0); //writing the "jazzcats" title
    pop();
    
    
    textSize(24); //text size
    text('a jazz influenced generative artwork',0,-height/3); //caption text
    textSize(18); //text size
    text('press "T" to start',0,-height/4); //instruction text
    
  }
  
  if (menu == 1) { //the actual sketch part
    
    
    push(); //random ellipses in background
      fill(0,20); //fill with transparent black
      stroke(colour); //stroke with colour
      xlip=int(random(-width, width)); //picks a random x coordinate
      ylip=int(random(-height, height)); //picks a ranomd y coordinate
      ellipse(xlip,ylip,75,75); //draws a 75x75 ellipse at a random point
    pop();
  
    
    push();  // spiralling ellipses
      var t = frameCount%500; //uses a division of the framecount to reset the ellipses back to the center after around 5 seconds
      var volume = amp.getLevel(); //gets volume level from audio
      var v = volume*t*200; //makes "v" multiplied by framecount and audio
      fill(colour); //fill ellipse with colour
      stroke(255); //white stroke
      ellipse(sin(v / 50) * (v / 5), cos(v / 50) * v / 5, sin(v / 30) * 75, 75); //the equation that spirals the ellipses out. using "v" means it fluctautes with the volume
    pop();
   
   
   if(mouseIsPressed){ //the mouse press user ellipses
    push();
    fill(random(0,255),75); //fill with a random value between white and black
    stroke(colour); //stroke is the colour
    r += 0.02; // constant rotation rate. can increase number to speed up rotation
    rotate(r); //using "r" to rotate
    ellipse(mouseX-width/2,mouseY-height/2,volume*750,volume*750); //drawing the ellipses. position based on mouse + the rotation. size is volume (between 0-1) multiplied by 750.
   pop();
   }
    
    
   push(); //instructions page
    pg.background(0); //background is black
    pg.textSize(12); //text size
    pg.fill(255); //text is white
    pg.text('"N" = next song',pg.width/10,pg.height-15); //all of the text being used
    pg.text('"R" = reset',pg.width/10,pg.height-30);
    pg.text('"S" = save sketch',pg.width/10,pg.height-45);
    pg.text('"left mouse click" = draw',pg.width/10,pg.height-60);
    image(pg,-width/2,-height/2); //draws the "pg"
   pop();
}
 
  

}



//-------------------------------------------------------------------------------------------------------------------------


function keyTyped() { //all the functions based around key presses
  if (menu == 0 && key == 't') { //starting the sketch. makes sure sketch hasn't already been started (menu == 0) and "t" is pressed
    background(0); 
    loop(); //start sketch
    which = random(0,10); //uses randomiser for the array same as line 61,62,63
    songs = library[int(which)];
    colour = librarycol[int(which)];
    amp.setInput(songs); //taking amplitude of new song
    songs.play(); //plays new song
    menu = 1; //sets menu mode to sketch (menu == 1)
  }else if(menu == 1 && key == 'r'){ //if sketch is running and "r" is pressed
    songs.stop(); //stops song
    menu = 0; //sets back to main menu 
  }else if(menu == 1 && key == 's'){ //if sketch is running and "s" is pressed
    save(cnv,'myCanvas.jpg'); //saves canvas
    songs.stop(); //stops the song
    noLoop(); //stops drawing
    menu = 0; //sets back to main menu 
    loop(); //starts menu animation
  }else if(menu == 1 && key == 'n'){ //if sketch is running and "n" is pressed
    prevSong = songs; //assigsn the array value of the current song to "prevSong"
    songs.stop(); //song stops
    which = random(0,10); //uses randomiser for the array same as line 61,62,63 and 158,159,160
    songs = library[int(which)]; 
    colour = librarycol[int(which)];
      if (prevSong == songs){ //checks prevSong against the new song to make sure they aren't the same. if they are the same it reruns the randomizer
        which = random(0,10);
        songs = library[int(which)];
        colour = librarycol[int(which)];
        amp.setInput(songs); //gets new amplitude
        time = frameCount/100; //since our frames per second is 100, dividing the current framecount by 100 will get how long the sketch has been running in seconds
        songs.play(0,1,1,int(time)); //plays the new song and uses the "time" above to figure out how long into the new song to start
        menu = 1; //just makes sure that it stays in sketch mode
      }else { //if it's not the same song just gets new amplitude, counts seconds and plays song same as above (lines 183-186)
        amp.setInput(songs);
        time = frameCount/100;
        songs.play(0,1,1,int(time));
        menu = 1;
    

}
  
}

}
