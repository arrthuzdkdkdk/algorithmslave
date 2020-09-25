PFont myFont;
const letters='abcdefghijklmnopqrstuvwxyz0123456789ABCDEFGHIJKLMNOPQRSTUVWXYZ[];:<>,.?/';
var rand, listLength;

function setup() {
  createCanvas(windowWidth, windowHeight);
  myFont=loadFont("TimesNewRomanPSMT-48.vlw");
  background(255);
  textSize(24);
  noStroke();
  textFont(myFont);
  listLength=letters.length;
  
}


function draw() {
  rand = int(random(0, ListLength-1));
  fill(0);
  textSize(random(5,50));
  text(letters[rand],random(width),random(height));
  fill(255);
  ellipse(mouseX,mouseY,150,150);
}
