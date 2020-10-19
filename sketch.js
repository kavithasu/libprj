var Rect1;
var Rect2;
var Rect3;
var Rect4;

function setup() {
  createCanvas(800,400);
  Rect1=createSprite(400, 200, 50, 80);
  Rect1.shapeColor="green";
  Rect2=createSprite(500,200,80,30);
  Rect2.shapeColor="green";
  Rect3=createSprite(400,300,50,80);
  Rect3.shapeColor="green";
  Rect4=createSprite(200,300,50,80);
  Rect4.shapeColor="green";  
  Rect3.velocityX=-5;
  Rect4.velocityX=5;
}

function draw() {
  background(255,255,255);
  Rect2.x=World.mouseX;
  Rect2.y=World.mouseY;
if(isTouching(Rect2,Rect1)){
  Rect1.shapeColor="red";
}else{
  Rect1.shapeColor="green";
}
  bounceoff(Rect3,Rect4);
  drawSprites();

}
