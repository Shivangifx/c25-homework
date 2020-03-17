const Engine = Matter.Engine;
const World= Matter.World;
const Bodies = Matter.Bodies;
var rdrop;
var rand;
function setup() {
  createCanvas(1500,800);
  createSprite(400, 200, 50, 50);
  engine = Engine.create();
    world = engine.world;

rand = Random(1,1500)
    for (var i = 0; i < 1500; i++) {
 rdrop = new Base(rand,0,5,20);
}
}

function draw() {
  background(0,0,0); 
  Engine.update(engine);
  rdrop.display(); 
  drawSprites();
}