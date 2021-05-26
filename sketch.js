const Engine = Matter.Engine;
const World = Matter.World;
const Bodies = Matter.Bodies;
const Body = Matter.Body;
const Constraint = Matter.Constraint;
var bob1,bob2,bob3,bob4,bob5;
var roof;


function preload()
{
	
}

function setup() {
	createCanvas(1000, 700);


	engine = Engine.create();
	world = engine.world;

	//Create the Bodies Here.
	roof = new Ground(400, 100, 500, 100);
	bob1 = new Bob(300,400);
	bob2 = new Bob(350,400);
	bob3 = new Bob(400,400);
	bob4 = new Bob(450,400);
	bob5 = new Bob(500,400);
	rope1 = new Sling(bob1.body,roof.body,-100,0);
	rope2 = new Sling(bob2.body,roof.body,-50,0);
	rope3 = new Sling(bob3.body,roof.body,0,0);
	rope4 = new Sling(bob4.body,roof.body,50,0);
	rope5 = new Sling(bob5.body,roof.body,100,0);

	Engine.run(engine);
  
}

function keyPressed() {

	if (keyCode === UP_ARROW) {

		Matter.Body.applyForce(bob1.body, bob1.body.position, {x: -10, y: 0});

	}

}


function draw() {
  background(255,255,255);
  
  bob1.display();
  bob2.display();
  bob3.display();
  bob4.display();
  bob5.display();
  roof.display();
  rope1.display();
  rope2.display();
  rope3.display();
  rope4.display();
  rope5.display();

  drawSprites();
 
}



