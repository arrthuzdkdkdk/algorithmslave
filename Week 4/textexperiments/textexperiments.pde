//playing with fonts

PFont helvBoldObl,sitka;
float spin=0;

void setup(){
  size(500,500);
  background(255);
  fill(0);
  smooth(4);
  helvBoldObl=loadFont("Helvetica-BoldOblique-48.vlw");
  //sitka=loadFont("SitkaBanner-48.vlw");
  textAlign(CENTER,TOP ); //horizontal align, vertical algin
  frameRate(33); //sets frame rate
}

void draw(){
  fill(0);
  translate(width/2,height/2);
  spin+=.1; //increments the rotation value
  rotate(spin);
  textFont(helvBoldObl);
  textSize(48);
  text("Hello World!",0,0); //text(font,x,y)
  fill(255, 20); //colour value and alpha(transperancy) value
  noStroke();
  rect(-width/2,-height/2,width,height); //rotating rectangle
  
}
