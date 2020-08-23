PFont myFont;
int randChar,randSize;
char letter;
color randColorR, randColorG, randColorB;


void setup(){
  size(500,500);
  background(200);
  myFont=loadFont("CourierNewPS-BoldMT-48.vlw");
  
}


void draw(){
  fill(0);
  textFont(myFont); //pick the font
  randChar=int(random(120)+1); //picks random character number
  randSize=int(random(60)+1); //picks random size number
  letter=char(randChar); //selects the random character using the number
  textSize(int(randSize/3)+1); //applies random number size to text
  if(mousePressed){ //mouse press draws
  text(letter,mouseX,mouseY);
  }
  
}


void keyPressed(){
  randColorR=int(map(mouseX,0,width,0,255));
  randColorG=int(map(mouseY,0,height,0,255));
  randColorB=int(map(mouseX+mouseY,0,width+height,0,255));
 background(randColorR,randColorG,randColorB); 
}
