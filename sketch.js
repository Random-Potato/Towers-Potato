
const Engine = Matter.Engine;
const World= Matter.World;
const Bodies = Matter.Bodies;
const Constraint = Matter.Constraint;
var engine, world;
var rock;
var block1, block2, block3, block4, block5;
var chain;

function setup() {
  createCanvas(800,400);

  engine = Engine.create();
  world = engine.world;

  block1 = new Box(400,200,50,50);
}

function draw() {
  background(255,255,255);  
  block1.display();
  drawSprites();
}