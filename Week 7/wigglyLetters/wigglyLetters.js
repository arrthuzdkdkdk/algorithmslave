var letter,size,rand,speed;
var wigglyLetters = [];
function setup() {
  createCanvas(windowWidth,windowHeight);
  background(0);
  textSize(32);
  textFont("Times");
}

function draw() {
  fill(255);
  background(0);
  for(var i=0; i<wigglyLetters.length;i++){    //each of the wiggly letters that we have
    wigglyLetters[i].wiggle();
    wigglyLetters[i].display();
    
  }
}

function mousePressed(){
  rand=random(65,160);
  letter=char(rand);
  size=random(6,96);
  speed=random(1,4);
  wigglyLetters.push(new Wiggle(mouseX,mouseY,size,letter)); 
 
}

class Wiggle {
  constructor(x,y,size,letter){
   this.x=x;
   this.y=y;
   this.textSize=size;
   this.letter=letter;
   this.speed=speed;
  }
  wiggle() {  //randomwalker
    this.x+=random(-this.speed,this.speed);
    this.y+=random(-this.speed,this.speed);
  }
  display(){
    text(this.letter,this.x,this.y);
  }
}
