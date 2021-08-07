
const Engine = Matter.Engine;
const World = Matter.World;
const Bodies = Matter.Bodies;
const Body = Matter.Body;
const Constraint = Matter.Constraint;

function preload()
{
	
}

function setup() {
	createCanvas(1000 , 600);
	

	engine = Engine.create();
	world = engine.world;

	//Create the Bodies Here.
	brs = 45
	
	ball1 = new Paper(400 , 400 , brs);
	ball2 = new Paper(400 + brs*2 , 400 , brs);
	ball3 = new Paper(400 + brs , 400 , brs);
	ball4 = new Paper(400 - brs*2 , 400 , brs);
	ball5 = new Paper(400 - brs , 400 , brs);

	gr1 = new Ground (401 , 200 , 280 , 20);

	string1 = new Sling ( gr1.body , ball1.body ,{x:0 , y:0})
	string2 = new Sling(gr1.body , ball2.body,{x:brs*2  ,y: 0})
	string3 = new Sling(gr1.body , ball3.body ,{x:brs*1  ,y: 0})
	string4 = new Sling(gr1.body , ball4.body ,  {x:-brs*2  ,y: 0})
	string5 = new Sling(gr1.body , ball5.body , {x:-brs*1  ,y: 0})
	
	/*string1 = new Sling ( gr1.body , ball1.body ,0,0)
	string2 = new Sling(gr1.body , ball2.body,brs*2  ,0)
	string3 = new Sling(gr1.body , ball3.body ,brs*1  , 0)
	string4 = new Sling(gr1.body , ball4.body ,  -brs*2  , 0)
	string5 = new Sling(gr1.body , ball5.body , -brs*1  ,0)*/

  
}


function draw() {
  rectMode(CENTER);
  background(0);
  
  Engine.update(engine);
  ball1.display();
  ball2.display();
  ball3.display();
  ball4.display();
  ball5.display();
  gr1.display();

  //stroke("yellow");
  //line(100 , 100 , 200 , 200)

  string1.display()
 string2.display()
 string3.display()
 string4.display()
 string5.display()

  drawSprites();
 
}

function keyPressed(){

if(keyCode === UP_ARROW){

	Body.applyForce(ball4.body , ball4.body.position , {x:-50 , y:-50 })
}

}

