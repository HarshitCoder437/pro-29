const Engine = Matter.Engine;
const World = Matter.World;
const Bodies = Matter.Bodies;
const Constraint = Matter.Constraint;

var world, engine;
var stand1, stand2;

var polygon, polygonImg;

var slingShot;

function preload() {
  polygonImg = loadImage("polygon.png");
}

function setup() {
  createCanvas(1200,600);
  engine = Engine.create();
  world = engine.world;
  stand1 = new Stand(490,570,315,10);
  stand2 = new Stand(940,370,315,10);

	Box1 = new Box(370, 535, 40, 60);
	Box2 = new Box(410, 535, 40, 60);
	Box3 = new Box(450, 535, 40, 60);
	Box4 = new Box(490, 535, 40, 60);
	Box5 = new Box(530, 535, 40, 60);
	Box6 = new Box(570, 535, 40, 60);
	Box7 = new Box(610, 535, 40, 60);
	Box8 = new Box(410, 475, 40, 60);
	Box9 = new Box(450, 475, 40, 60);
	Box10 = new Box(490, 475, 40, 60);
	Box11 = new Box(530, 475, 40, 60);
	Box12 = new Box(570, 475, 40, 60);
	Box13 = new Box(450, 415, 40, 60);
	Box14 = new Box(490, 415, 40, 60);
	Box15 = new Box(530, 415, 40, 60);
	Box16 = new Box(490, 355, 40, 60);

	Box17 = new Box(860, 335, 40, 60);
	Box18 = new Box(900, 335, 40, 60);
	Box19 = new Box(940, 335, 40, 60);
	Box20 = new Box(980, 335, 40, 60);
	Box21 = new Box(1020, 335, 40, 60);
	Box22 = new Box(900, 275, 40, 60);
	Box23 = new Box(940, 275, 40, 60);
	Box24 = new Box(980, 275, 40, 60);
  Box25 = new Box(940, 215, 40, 60);
  
  polygon = Bodies.circle(50,200,20);
  World.add(world,polygon);

  slingShot = new SlingShot(this.polygon,{x:100,y:200});
}

function draw() {
  background(0);  
  Engine.update(engine);
  stand1.display();
  stand2.display();

  fill("blue");
  Box1.display();
  fill("blue");
  Box2.display();
  fill("blue");
  Box3.display();
  fill("blue");
  Box4.display();
  fill("blue");
  Box5.display();
  fill("blue");
  Box6.display();
  fill("blue");
  Box7.display();
  fill("pink");
  Box8.display();
  fill("pink");
  Box9.display();
  fill("pink");
  Box10.display();
  fill("pink");
  Box11.display();
  fill("pink");
  Box12.display();
  fill("green");
  Box13.display();
  fill("green");
  Box14.display();
  fill("green");
  Box15.display();
  fill("grey");
  Box16.display();
  fill("blue");  
  Box17.display();
  fill("blue");
  Box18.display();
  fill("blue");
  Box19.display();
  fill("blue");
  Box20.display();
  fill("blue");
  Box21.display();
  fill("green");
  Box22.display();
  fill("green");
  Box23.display();
  fill("green");
  Box24.display();
  fill("pink");
  Box25.display();

  imageMode(CENTER);
  image(polygonImg, polygon.position.x, polygon.position.y, 40, 40);

  slingShot.display();
}

function mouseDragged() {
  Matter.Body.setPosition(this.polygon, {x: mouseX, y: mouseY});
}

function mouseReleased() {
  slingShot.fly();
}