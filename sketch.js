var groundbody,ballbody;
const Engine = Matter.Engine;
const World = Matter.World;
const Bodies = Matter.Bodies;
const Body = Matter.Body;

function preload()
{
	
}

function setup() {
	createCanvas(1200, 600);


	engine = Engine.create();
	world = engine.world;
  var groundsprite= createSprite(600,580,1200,20);
  groundsprite.shapeColor=color("yellow");
  
b1=new dustbin(600,520,20,100);
b2=new dustbin(660,560,120,20);
b3=new dustbin(730,520,20,100);
	//Create the Bodies Here.
	
groundbody=Bodies.rectangle(600,550,1200,20,{isStatic:true});
World.add(world,groundbody);
ballbody= new ball(50,548,20);

	Engine.run(engine);
  
}


function draw() {
  rectMode(CENTER);
  background(0);
  b1.display();
  b2.display();
  b3.display();
  ballbody.display();
 
  drawSprites();
 
}
function keyPressed(){
	if(keyCode===UP_ARROW)
	{
Matter.Body.applyForce(ballbody.body,ballbody.body.position,{x:65,y:-60})
	}
}



