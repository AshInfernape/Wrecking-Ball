const Engine = Matter.Engine;
const World= Matter.World;
const Bodies = Matter.Bodies;
const Constraint = Matter.Constraint;

var engine, world;
var box;
var ground;
var ball;
var crane;

function setup(){
    var canvas = createCanvas(1300,600);
    engine = Engine.create();
    world = engine.world;
    ground = new Ground(700,599,1500,10);
    box1 = new Box(650,560,40,40);
    box2 = new Box(710,560,40,40);
    box3 = new Box(650,520,40,40);
    box4 = new Box(710,520,40,40);
    box5 = new Box(650,480,40,40);
    box6 = new Box(710,480,40,40);
    box7 = new Box(650,440,40,40);
    box8 = new Box(710,440,40,40);
    box9 = new Box(650,400,40,40);
    box10 = new Box(710,400,40,40);
    box11 = new Box(650,360,40,40);
    box12 = new Box(710,360,40,40);
    box13 = new Box(650,320,40,40);
    box14 = new Box(710,320,40,40);
    box15 = new Box(650,280,40,40);
    box16 = new Box(710,280,40,40);
    box17 = new Box(760,560,40,40);
    box18 = new Box(820,560,40,40);
    box19 = new Box(760,520,40,40);
    box20 = new Box(820,520,40,40);
    box21 = new Box(760,480,40,40);
    box22 = new Box(820,480,40,40);
    box23 = new Box(760,440,40,40);
    box24 = new Box(820,440,40,40);
    box25 = new Box(760,400,40,40);
    box26 = new Box(820,400,40,40);
    box27 = new Box(760,360,40,40);
    box28 = new Box(820,360,40,40);
    box29 = new Box(760,320,40,40);
    box30 = new Box(820,320,40,40);
    box31 = new Box(760,280,40,40);
    box32 = new Box(820,280,40,40);
    ball  = new Ball(300,300,50);
    rope = new Rope(ball.body,{x:470,y:150});
}

function draw(){
    background("#ff6600")
    Engine.update(engine);    
    ground.display();
    box1.display();
    box2.display();
    box3.display();
    box4.display();
    box5.display();
    box6.display();
    box7.display();
    box8.display();
    box9.display();
    box10.display();
    box11.display();
    box12.display();
    box13.display();
    box14.display();
    box15.display();
    box16.display();
    box17.display();
    box18.display();
    box19.display();
    box20.display();
    box21.display();
    box22.display();
    box23.display()
    box24.display();
    box25.display();
    box26.display();
    box27.display();
    box28.display();
    box29.display();
    box30.display();
    box31.display();
    box32.display();
    ball.display();
    rope.display();
    keyPressed();
 
}

function keyPressed(){
    if(keyCode === 32){
     Matter.Body.setPosition(ball.body,{x:-1000,y:-1000});
    }
}

