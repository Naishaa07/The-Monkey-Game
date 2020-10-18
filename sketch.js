
var monkey , monkey_running
var banana ,bananaImage, obstacle, obstacleImage
var FoodGroup, obstacleGroup
var score

function preload(){
  
  
  monkey_running =            loadAnimation("sprite_0.png","sprite_1.png","sprite_2.png","sprite_3.png","sprite_4.png","sprite_5.png","sprite_6.png","sprite_7.png","sprite_8.png")
  
  bananaImage = loadImage("banana.png");
  obstacleImage = loadImage("obstacle.png");
 
}



function setup() {
 createCanvas(600,300);
 monkey=createSprite(100,215,20,20) 
 monkey.addAnimation("running",monkey_running);
 monkey.scale=0.1;
  
 ground=createSprite(300,250,600,15)
 ground.velocityX=-6;
FoodGroup=createGroup();
  obstacleGroup=createGroup();
  
 score = 0;

}


function draw() {
background("white");
  if(ground.x>0){
    ground.x=ground.width/2;
  }

  monkey.velocityY = monkey.velocityY + 0.8;
  monkey.collide(ground);
  if(keyDown("space") && monkey.y >= 200){
  monkey.velocityY=-12
}
  obstacleGroup.collide(monkey);
  //score=score+ Math.round(getFrameRate()/60);
   score = score + Math.round(getFrameRate()/60);
  //console.log(score);
  text("Survival Time : "+score,500,50);
drawSprites();
bananas();
obstacles();
  
}
function bananas(){
  if(frameCount % 80 === 0){
 banana = createSprite(600,100,10,10)
 banana.addImage(bananaImage) 
 banana.scale=0.1;
 banana.velocityX= -6;
 banana.y=Math.round(random(120,200))
 banana.lifetime=150;
    FoodGroup.add(banana);
  }

 
}
function obstacles(){
  if (frameCount % 300 === 0){
    obstacle= createSprite(600,220,20,20)
    obstacle.addImage(obstacleImage);
    obstacle.velocityX=-6;
    obstacle.lifetime=100;
    obstacle.scale=0.1
      obstacleGroup.add(obstacle);
  }

  
}





