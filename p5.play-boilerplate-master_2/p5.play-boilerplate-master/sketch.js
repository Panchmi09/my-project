var bullet, wall;
var speed, weight;



function setup() {
  createCanvas(1600,400);

  bullet = createSprite(50,200,50,50);
  bullet.shapeColor = "white";
  thickness = random(22,83);

  wall = createSprite(1500,200,thickness,height/2);
  wall.shapeColor = "green";
  speed = random(55,90);
  weight = random(400,1500);
  bullet.velocityX = speed;

}




function draw() {
  background(0);  
  //car.x = World.mouseX;
  //car.y = World.mouseY;

  if(hasCollided(bullet,wall))
  {
    bullet.velocityX = 0;
    var damage = 0.5* weight * speed * speed/(thickness * thickness * thickness);
    if(damage>10)
    {
      bullet.shapeColor = color(255,0,0);
    }
   
    if (damage < 10)
  
  bullet.shapeColor = color(0,255,0);

  }
  
function hasCollided(bullet,wall){
  Rightedge = bullet.x + bullet.width;
  wallleftedge = wall.x;
  if(Rightedge >= wallleftedge ){
    return true;
  }
  return false;
}


drawSprites();
}