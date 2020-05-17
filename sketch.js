const Engine = Matter.Engine;
const World= Matter.World;
const Bodies = Matter.Bodies;
const Constraint = Matter.Constraint;

var ground,dustbin,paper,launcher;

function setup() {
  createCanvas(1365,650);

  engine = Engine.create();
  world = engine.world;

  ground = new Ground(685,625,1365,50);
  dustbin = new Dustbin(1200,500,150,200);
  paper = new Paper(200,500,30,40);
  launcher = new Launcher(paper.body,{x:300,y:350})
}
function draw() {
  background(255);
  Engine.update(engine);
  
  ground.display();
  dustbin.display();
  paper.display();
  launcher.display();

  drawSprites();
}
function mouseDragged() {
  Matter.Body.setPosition(paper.body,{x:mouseX,y:mouseY});
}
function mouseReleased() {
  launcher.fly();
}

    