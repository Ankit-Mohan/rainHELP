const Engine = Matter.Engine;
const World= Matter.World;
const Bodies = Matter.Bodies;
const Constraint = Matter.Constraint;

var engine, world;
var maxDrops = 100
function preload(){
    
}

function setup(){
var canvas = createCanvas(400,400);   
engine = Engine.create();
world = engine.world; 
rain1 = new rain(1,1);
}

function draw(){
 background("Black");
 rain1.createDrop();
 Engine.update(engine);
}   

