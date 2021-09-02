const Engine = Matter.Engine;
const World= Matter.World;
const Bodies = Matter.Bodies;
const Constraint = Matter.Constraint;

var engine, world;
var box1, pig1,pig3;
var backgroundImg,platform;
var bird, slingshot;
var gameState="onSling";


function preload() {
    backgroundImg = loadImage("sprites/bg.png");
}

function setup(){
    var canvas = createCanvas(1200,400);
    engine = Engine.create();
    world = engine.world;


    ground = new Ground(600,height,1200,20);
    platform = new Ground(150, 305, 300, 170);

    box1 = new Box(700,320,70,70);
    box2 = new Box(920,320,70,70);
    pig1 = new Pig(810, 350);
    log1 = new Log(810,260,300, PI/2);

    box3 = new Box(700,240,70,70);
    box4 = new Box(920,240,70,70);
    pig3 = new Pig(810, 220);

    log3 =  new Log(810,180,300, PI/2);

    box5 = new Box(810,160,70,70);
    log4 = new Log(760,120,150, PI/7);
    log5 = new Log(870,120,150, -PI/7);

    bird = new Bird(200,50);

    //log6 = new Log(230,180,80, PI/2);
    slingshot = new SlingShot(bird.body,{x:200, y:50});

    //Single dimension array: one dimesion array    
    var student_details=["Bhargav", 9, "xyz", 130907];
    student_details.push("Teacher");
    //console.log(student_details.length);
    //console.log(student_details[4])
    student_details.pop();
    //console.log(student_details)

    //student_details=[];
  //  console.log(student_details[0])

    //two dimesion array
    //empty array;
    //var i=0;i++
   // var 200
  /*  var num=[[2,3],[8,9],[89,67]];
console.log(num[i][0],[i][1]);
num[0][0], [200][1]*/
    /*
    for(initialization;condition;increment/decrement){
        //statement
    }*/

   /* for(var n=7;n<=700;n=n+7){
        console.log(n);
    }*/
    

}

function draw(){
    background(backgroundImg);
    Engine.update(engine);
    //strokeWeight(4);
    box1.display();
    box2.display();
    ground.display();
    pig1.display();
    log1.display();

    box3.display();
    box4.display();
    pig3.display();
    log3.display();

    box5.display();
    log4.display();
    log5.display();

    bird.display();
    platform.display();
    //log6.display();
    slingshot.display();
        
}


//mouseDragged, mouseReleased, keyPressed is a self-provoking
function mouseDragged(){
    if(gameState!=="launched"){
    Matter.Body.setPosition(bird.body, {x: mouseX , y: mouseY});
}
}


function mouseReleased(){
    slingshot.fly();
    gameState ="launched"
}

function keyPressed(){
    //ascii: space=32
    if(keyCode === 32){
        slingshot.attach(bird.body);
    }
}

/*
How you can store the data in Javascript

var num=100;

var name="Bhargav";

const score = 10;

student details:
Name: Bhargav
Grade: 9
School: xyz school
DOB: 13-09-07

Array:
var student_details=["Bhargav", 9, "xyz", 130907]

What is the purpose of storing in the memory?
    To access and to update the memory.



*/