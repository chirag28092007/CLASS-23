const Engine = Matter.Engine;
const World= Matter.World;
const Bodies = Matter.Bodies;

var engine, world;
var box1,ground,box2;

function setup(){
    var canvas = createCanvas(400,400);
    engine = Engine.create();
    world = engine.world;

    box1 = new Box(200,300,50,50);
    box2 = new Box(190,200,40,20);

    var option={
        isStatic:true
    }
    ground=Bodies.rectangle(200,390,400,10,option);
    World.add(world,ground)
}

function draw(){
    background(0);
    Engine.update(engine);
    box1.display();
    box2.display();
    rectMode(CENTER)
    rect(ground.position.x,ground.position.y,400,10)
   
}