const Engine = Matter.Engine;
const World = Matter.World;
const Bodies = Matter.Bodies;
const Constraint = Matter.Constraint;


var ground;
var rope;
var ball;
var building;
var block1,block2,block3,block4,block5,block6,block7,block8,block9,block10;
var block11,block12,block13,block14,block25,block16,block17,block18,block19,block20;

function setup(){
createCanvas(3000,800)

engine = Engine.create()
  world = engine.world

ground = new Ground(600,600,1000,20);

block1 = new Building(900,100)
block2 = new Building(900,100)
block3 = new Building(900,100)
block4 = new Building(900,100)
block5 = new Building(900,100)
block6 = new Building(900,100)
block7 = new Building(850,100)
block8 = new Building(850,100)
block9 = new Building(850,100)
block10 = new Building(850,100)
block11 = new Building(850,100)
block12 = new Building(850,100)
block13 = new Building(800,100)
block14 = new Building(800,100)
block15 = new Building(800,100)
block16 = new Building(800,100)
block17 = new Building(800,100)
block18 = new Building(800,100)
block19 = new Building(800,100)
block20 = new Building(800,100)

ball = new Ball(200,200);

rope = new Rope(ball.body,{x:600,y:50})

}

function draw(){
background("skyblue")

Engine.update(engine)

ground.display();

block1.display();
block2.display();
block3.display();
block4.display();
block5.display();
block6.display();
block7.display();
block8.display();
block9.display();
block10.display();
block11.display();
block12.display();
block13.display();
block14.display();
block15.display();
block16.display();
block17.display();
block18.display();
block19.display();
block20.display();

ball.display();

rope.display();



}

function mouseDragged(){
  Matter.Body.setPosition(ball.body,{x:mouseX,y:mouseY})
}