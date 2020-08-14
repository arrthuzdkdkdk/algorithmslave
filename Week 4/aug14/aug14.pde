//sketch 14th August
PImage photo;
color pix;
int smallPoint,largePoint,x,y,dotSize,t;
float pointillise;

void setup(){
  smallPoint=4;
  largePoint=40;
  size(480,480);
  background(255);
  imageMode(CENTER);
  photo = loadImage("rollie.jpg");
}

void draw(){
  //image (photo,240,240); //loads image
  x=int(random(photo.width)); //finds random point across the sketch (x)
  y=int(random(photo.height)); //finds random point across the sketch (y)
  pointillise=map(mouseX,0,photo.width,smallPoint,largePoint); //map (input, lowest value in, lowest value out, highest value in, highest value out)
  dotSize=int(pointillise);
  pix=photo.get(x,y); //gets color value from x and y
  t=int(random(256)); //transperancy
  fill(pix,t);  //updates the color of the fill
  noStroke(); //no stroke
  ellipse(x,y,dotSize,dotSize); //draws the circle
}
