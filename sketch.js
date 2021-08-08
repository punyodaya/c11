//variables
var trex,treximg,ground,groundimg,invisibleground;

//preload to load all the pics and animations 
function preload(){

      treximg=loadAnimation("trex1.png","trex3.png","trex4.png")        
      groundimg=loadImage("ground2.png")
}

function setup() {

      createCanvas(600, 200);

      //creating trex sprite
      trex=createSprite(50,180,20,50);
      trex.scale= 0.5
      trex.addAnimation("running",treximg)
      
      //creating ground sprite
      ground=createSprite(200,180,400,20)
      ground.addImage("ground",groundimg)

      //creating invisible sprite
      invisibleground=createSprite(200,190,400,10)
      invisibleground.visible=false
}

function draw() {

      background(220);
      console.log(trex.y)  
      // to move ground
      ground.velocityX= -2
      //infinite ground
      if(ground.x<0){
      ground.x=200 
      }
      
      // jumping the trex on space press
      if(keyDown('space') && trex.y>=160){
        trex.velocityY= -10;  
      }

      //gravity
      trex.velocityY=trex.velocityY+0.8;
      //stop trex from falling down(like neymar jr.) 
      trex.collide(invisibleground)
      drawSprites();
}