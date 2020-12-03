
var bullet,wall;
var speed,weight,thickness;


function setup() {
  createCanvas(1600,400);
speed=random(220,320);
weight=random(30,52);
thickness=random(20,80);


bullet=createSprite(50,200,50,10);
bullet.velocityX=speed;
bullet.shapecolor=color(255);
wall=createSprite(1200,200,thickness,height/2)
wall.shapecolor=color(80,80,80);


  
}

function draw() {
  background(0,0,0);  
  
if(hascollided(bullet,wall))
{
  bullet.velocityX=0;
  var damage=0.5*weight*speed*speed/(thickness*thickness*thickness);

  if(damage>10){
    wall.shapeColor=color(255,0,0);
  }
  if(damage<10){
    wall.shapeColor=color(0,255,0);
  }

}

  
 
  drawSprites();

  
}

function hascollided(bullet1,wall1){
  bulletRightEdge=bullet1.x+bullet1.width;
  wallLeftEdge=wall1.x;
  if(bulletRightEdge>=wallLeftEdge)
  {
    return true
  }
  return false;
}