var car, policecar;
var carimg, policarimg;




function preload(){
 policecarimg = loadAnimation("../imgs/Police/1.png", "../imgs/Police/2.png", "../imgs/Police/3.png");
 carimg = loadImage("../imgs/Black_viper.png");
 traffic1=loadImage("../imgs/Ambulance.png");
 traffic2=loadImage("../imgs/Car.png");
 traffic3=loadImage("../imgs/Mini_truck.png");
 traffic4=loadImage("../imgs/Mini_van.png");
 traffic5=loadImage("../imgs/truck.png");
 traffic6=loadImage("../imgs/taxi.png");
  // car.addAnimation("police",policecarimg);
  roadImg=loadImage("../imgs/Road.jpg");
}

function setup(){
  createCanvas(displayWidth/2,displayHeight-170);
  road=createSprite(displayWidth/4, displayHeight/2);
  road.scale = 4.5;
  road.addImage(roadImg);
  
  road.velocityY=1;

}

function draw() {
  background("black")
  if (road.y> displayHeight-300) {
   road.y = displayHeight/2;
  }
  spawnObstacles();
  drawSprites();
}


function spawnObstacles(){
  if(frameCount%240===0){
  traffic=createSprite(Math.round(random(200,600)),-20);
  var ran=Math.round(random(1,6));
  switch(ran){
    case 1:traffic.addImage(traffic1);
      break;

      case 2:traffic.addImage(traffic2);
      break;

      case 3:traffic.addImage(traffic3);
      break;

      case 4:traffic.addImage(traffic4);
      break;

      case 5:traffic.addImage(traffic5);
      break;

      case 6:traffic.addImage(traffic6);
      break;
      
  }
  traffic.velocityY=1;
  }
}


