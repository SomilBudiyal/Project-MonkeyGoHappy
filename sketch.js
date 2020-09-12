var monkey,monkey_running,scene;
var bananaImage,stoneImage,stoneGroup;
var ground;
var survivalTime;
var PLAY,END,gameState;

function preload(){
 pic = loadImage("jungle.jpg");
 
 Monkey_running=loadAnimation("Monkey_01.png","Monkey_02.png","Monkey_03.png","Monkey_04.png","Monkey_05.png","Monkey_06.png","Monkey_07.png","Monkey_08.png","Monkey_09.png", "Monkey_10.png");
    
 stoneImage = loadImage("stone.png");
 bananaImage = loadImage("banana.png"); 
}

function setup() {
  createCanvas(400,400);    

  survivalTime = 0;
  
  scene = createSprite(200,200,30,30); 
  scene.addImage("back",pic);
   scene.velocityX = -2;
   scene.x = scene.width/5; 
  
  monkey = createSprite(70,390,20,50);
   monkey.addAnimation("running",Monkey_running);
   monkey.scale = 0.1;          
  
  ground = createSprite(200,390,400,10);
  ground.visible = false;
  
  bananaGroup = new Group();
  stoneGroup = new Group();
}

function draw() {
  background(220);
  
  if (scene.x < 0){ 
 scene.x = 200;
 scene.velocityX = -2;
}
  
if(gameState === PLAY){
  spawnBanana();
  spawnStone();  
}  
  
if(stoneGroup.isTouching(monkey)) {
  monkey.scale = 0.1;
  stoneGroup.destroyEach();   
}
  
if(bananaGroup.isTouching(monkey)){
 survivalTime  = survivalTime+2;
 bananaGroup.destroyEach(); 

}  
 
 monkey.collide(ground); 
  

if(keyDown("space")) {
    monkey.velocityY = -17;                
}
  
 monkey.velocityY = monkey.velocityY + 0.8
 
  switch(survivalTime){
   case 10 : monkey.scale = 0.12;
     break;
   case 20 : monkey.scale = 0.14;
     break;
   case 30 : monkey.scale = 0.16;
     break;
   case 40 : monkey.scale = 0.18;
     break;
   case 50 : monkey.scale = 0.20;
     break;
   case 60 : monkey.scale = 0.22;
     break;
   case 70 : monkey.scale = 0.24;
     break;
   case 80 : monkey.scale = 0.26;
     break;
   case 90 : monkey.scale = 0.28;
     break;
   case 100 : monkey.scale = 0.30;
     break;  
 }

  
drawSprites(); 
  textStyle(BOLD);
  textSize(23);
  text("survivalTime:"+survivalTime,200,21); 
}

function spawnBanana() {
if(frameCount % 90  ===  0){
var banana = createSprite(200,200,30,30);
 banana.addImage("fruit",bananaImage);
 banana.y = random(120,200);
 banana.x = 410;
 banana.velocityX = -5;
 banana.scale = 0.1 ; 
 banana.lifetime = 80;
 bananaGroup.add(banana); 
 }
}

function spawnStone(){
 if(frameCount % 180 ===  0){
 var stone = createSprite(402,370,30,30);
 stone.addImage("pebbles",stoneImage);
 stone.x = 410;
 stone.velocityX = -5;
 stone.scale = 0.2; 
 stone.lifetime = 80;
 stoneGroup.add(stone); 
 }  
}