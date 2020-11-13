const Engine = Matter.Engine;
const World= Matter.World;
const Bodies = Matter.Bodies;

var engine, world;
var box1,ground;




function setup() {
     createCanvas(1200,400);
    engine = Engine.create();//world
    world = engine.world;

    ground = new Ground(600,400,1200,20)
     
    box1=new Box(900,300,50,50);
    box2=new Box(700,300,50,50);
    pig1=new Pig(800,300,50,50)
    log=new Log(800,250,250,PI/2);
    box3=new Box(900,200,50,50);
    box4=new Box(700,200,50,50);
    pig2=new Pig(800,200,50,50)
    log1=new Log(800,150,250,PI/2);
    box5=new Box(800,100,50,50)
    log2=new Log(750,50,110,PI/8)
    log3=new Log(850,50,110,-PI/8)
    bird=new Bird(50,200);
}

function draw(){
    background(0);
    Engine.update(engine);
    
  
     box1.display();
     box2.display();
     ground.display();
     pig1.display();
     log.display();
     box3.display();
     box4.display();
     pig2.display();
     log1.display();
     box5.display();
     log2.display();
     log3.display();
     bird.display();
    }