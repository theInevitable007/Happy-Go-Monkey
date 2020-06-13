var gnd,gndImg;
var jungle,jungleImg;

var monkey1,monkey2,monkey3,monket4,monkey5;
var monkey6,monkey7,monkey8,monket9,monkey10;

var monkey1_img,monkey2_img,monkey3_img,monkey4_img,monkey5_img;
var monkey6_img,monkey7_img,monkey8_img,monkey9_img,monkey10_img;

var banana,bananaImg;
var player_running,player_runningImg;

var survivalTime = 0;

var score = 0;

var gameOver,gameOverImg;

var restart,restartImg;
function preload(){
  
  gndImg = loadImage("ground.jpg");
  jungleImg = loadImage("jungle.jpg");
  /*
  monkey1_img = loadImage("Monkey_01.png");
  monkey2_img = loadImage("Monkey_02.png");
  monkey3_img = loadImage("Monkey_03.png");
  monkey4_img = loadImage("Monkey_04.png");
  monkey5_img = loadImage("Monkey_05.png");
  monkey6_img = loadImage("Monkey_06.png");
  monkey7_img = loadImage("Monkey_07.png");
  monkey8_img = loadImage("Monkey_08.png");
  monkey9_img = loadImage("Monkey_09.png");
  monkey10_img = loadImage("Monkey_10.png");
  */
  player_runningImg = loadAnimation("Monkey_01.png","Monkey_02.png","Monkey_03.png",
                        "Monkey_04.png","Monkey_05.png","Monkey_06.png","Monkey_07.png",
                                 "Monkey_08.png","Monkey_09.png","Monkey_10.png");
  
  bananaImg = loadImage("Banana.png");
  
  gameOverImg = loadImage("gameOver.png");
  
  restartImg = loadImage("restart.png");
  
  
  
}


function setup() {
  createCanvas(800,400);
 
  gnd = createSprite(300,150);
  gnd.addImage("ground", gndImg);
  
  jungle = createSprite(300,150);
  jungle.addImage("jungle",jungleImg);
  jungle.velocityX = -4;
  jungle.x = jungle.width/2;
  
  player_running= createSprite(100,300);
  player_running.addAnimation("runner",player_runningImg);
  player_running.scale = 0.1;
  
  gameOver = createSprite(400,250);
  gameOver.addImage("gameOver",gameOverImg);
  gameOver.scale = 0.5;
  gameOver.addImage("gameOver",gameOverImg);
  gameOver.visible = false;
   
  restart = createSprite(400,200);
  restart.addImage("restart",restartImg);
  restart.scale = 0.5;
  restart.visible = false;
     
 /*
  monkey1 = createSprite(100,300);
  monkey1.addImage("monkey",monkey1_img);
  monkey1.scale = 0.1;
  monkey1.visible = false;
   
  monkey2 = createSprite(150,300);
  monkey2.addImage("monkey",monkey2_img);
  monkey2.scale = 0.15;
  
  monkey3 = createSprite(200,300);
  monkey3.addImage("monkey",monkey3_img);
  monkey3.scale = 0.15;
  
  monkey4 = createSprite(250,300);
  monkey4.addImage("monkey",monkey4_img);
  monkey4.scale = 0.15;
 
  monkey5 = createSprite(300,300);
  monkey5.addImage("monkey",monkey5_img);
  monkey5.scale = 0.15;
 
  monkey6 = createSprite(350,300);
  monkey6.addImage("monkey",monkey6_img);
  monkey6.scale = 0.15;  
  
  monkey7 = createSprite(400,300);
  monkey7.addImage("monkey",monkey7_img);
  monkey7.scale = 0.15;  
  
  monkey8 = createSprite(450,300);
  monkey8.addImage("monkey",monkey8_img);
  monkey8.scale = 0.15; 
 
  monkey9 = createSprite(500,300);
  monkey9.addImage("monkey",monkey9_img);
  monkey9.scale = 0.15;  
  
  monkey10 = createSprite(550,300);
  monkey10.addImage("monkey",monkey10_img);
  monkey10.scale = 0.15;  


  monkey2.visible = false;
  monkey3.visible = false;
  monkey4.visible = false;
  monkey5.visible = false;
  monkey6.visible = false;
  monkey7.visible = false;
  monkey8.visible = false;
  monkey9.visible = false;
  monkey10.visible = false;
  */
  
  
  
  
}


function draw(){
 background(255); 
  edges = createEdgeSprites();
  player_running.collide(edges[3]);
   
   
    
  
  
  if(jungle.x <= 180){
    jungle.x = 510;
    jungle.y = 150;
  }
  
  if(keyWentDown("space") && player_running.y >= 300){
   player_running.velocityY = -15;   
   score = score + 1
   text("score = " + score , 100,50); 
   
  }  
  
  player_running.velocityY = player_running.velocityY + 0.8;
  
  if(frameCount % 80 === 0){
  banana = createSprite(810,random(170,220));
  banana.addImage("banana",bananaImg);
  banana.scale = 0.05;
  banana.velocityX = -6;
  banana.lifetime = 220;
 } 
 
  if(score === 80){
  
    gameOver.visible = true;
    restart.visible = true;
   banana.velocityX = 0 
   jungle.velocityX = 0;
    
    banana.visible = false;
   
  } 
  
  if(mousePressedOver(restart)){
    score = 0;
    survivalTime = 0;
    jungle.velocityX = -6;
    banana.velocityX = -4;
    
    gameOver.visible = false;
    restart.visible = false;
    
    banana.visible = true;
  }
  
  switch(score){
    case 10: player_running.scale = 0.12;
             break;
    case 20: player_running.scale = 0.14;
             break;
    case 30: player_running.scale = 0.16;
             break;
    case 40: player_running.scale = 0.18;
             break;
    case 50: player_running.scale = 0.20;
             break;
    case 60: player_running.scale = 0.22;
             break;
    case 70: player_running.scale = 0.24;
             break;
    case 80: player_running.scale = 0.26;
             break;         
    default: break;
  }  
   
  drawSprites();
  stroke("black");
  textSize(20);
  fill("black");
  survivalTime = Math.floor(frameCount/4);
  text("Survival Time: " + survivalTime,500,50);
  
  text("score = " + score,100,50);
 
  if(keyWentDown("space")){
    
  }
    
}
