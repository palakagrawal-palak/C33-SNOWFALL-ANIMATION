const Engine = Matter.Engine;
const World= Matter.World;
const Bodies = Matter.Bodies;
const Constraint = Matter.Constraint;

var engine,world;
var backgroundimg;
var snow1, snow2, snow3, snow4, snow5, snow6, snow7;

function preload(){
  backgroundimg = loadImage("snow2.jpg");
}

function setup() {
  var canvas = createCanvas(1200,700);

   engine = Engine.create();
   world = engine.world;

    snow1= new Snow(1,200,50,50);
    snow2= new Snow(50,200,50,50);
    snow3= new Snow(100,200,50,50);
    snow4= new Snow(150,200,50,50);
    snow5= new Snow(250,200,50,50);
    snow6= new Snow(300,200,50,50);
    snow7= new Snow(350,200,50,50);
}

function draw() {
  background(backgroundimg);  
  Engine.update(engine);

  

  snow1.display();
  snow2.display();
  snow3.display();
  snow4.display();
  snow5.display();
  snow6.display();
  snow7.display();
}