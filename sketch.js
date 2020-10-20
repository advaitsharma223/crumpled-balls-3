const Engine = Matter.Engine;
const World = Matter.World;
const Bodies = Matter.Bodies;
const Body = Matter.Body;
const Constraint = Matter.Constraint;

function setup() {
	createCanvas(800, 700);

	engine = Engine.create();
	world = engine.world;

	//Create the Bodies Here.
    paper = new Paper(50, 10, 10);

	Engine.run(engine);

	boxPart1 = createSprite(675, 650, 200, 20);
	boxPart1.shapeColor = color(255, 0, 0);
	part1 = new Dustbin(675, 635, 200, 20, {isStatic:true});
	
	boxPart2 = createSprite(575, 610, 20, 100);
	boxPart2.shapeColor = color(255, 0, 0);
	part2 = new Dustbin(575, 610, 20, 100, {isStatic:true});
	
	boxPart3 = createSprite(775, 610, 20, 100);
	boxPart3.shapeColor = color(255, 0, 0);
	part3 = new Dustbin(775, 610, 20, 100,  {isStatic:true});

	paper = new Paper(150, 600);

	ground = new Ground(width/2, 650, width, 10 , {isStatic:true});

	launcher = new Launcher(paper.body, {x: 200, y: 200});
  
}

function draw() {
  
  rectMode(CENTER);
  background("white");
  
  paper.display();
  ground.display();
  launcher.display();
  drawSprites();
}

function mouseDragged() {

    Matter.Body.setPosition(paper.body, {x: mouseX, y: mouseY});
}

function mouseReleased() {

    launcher.fly ();
}

