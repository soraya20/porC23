const Engine = Matter.Engine;
const World= Matter.World;
const Bodies = Matter.Bodies;

var engine, world;
var ground, ball;
var box1;
var grounds;

function setup(){
    var canvas = createCanvas(400,400);
    engine = Engine.create();
    world = engine.world;

    

    // ground = Bodies.rectangle(200,390,400,20,ground_options);
    // World.add(world,ground);

    

    //ball = Bodies.circle(200,100,20, ball_options);
   // World.add(world,ball);

    // console.log(ground);
    box1=new Box(160,0,50,100);
    box2=new Box(130,100,50,100);

    grounds=new ground(200,height,400,20);
}

function draw(){
    background(0);
    Engine.update(engine);
    rectMode(CENTER);
    rect(ground.position.x,ground.position.y,400,20);

    //ellipseMode(RADIUS);
    //ellipse(ball.position.x, ball.position.y, 20, 20);
    box1.display();
    box2.display();
grounds.display();

}