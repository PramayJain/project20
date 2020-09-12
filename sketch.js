var car1,car2,car3,car4;
var wall1,wall2,wall3,wall4;
var speed,weight;





function setup() {
  createCanvas(1600,400);
  car1=createSprite(50,50,50,10);
  car2=createSprite(50,150,50,10);
  car3=createSprite(50,250,50,10);
  car4=createSprite(50,350,50,10);
  wall1=createSprite(1000,50,20,70);
  wall2=createSprite(1000,150,20,70);
  wall3=createSprite(1000,250,20,70);
  wall4=createSprite(1000,350,20,70);
}

function draw() {
  background("black"); 
  speed=random(55,90);
  weight=random(400,1500);

  car1.velocityX = speed;
  car2.velocityX=speed;
  car3.velocityX=speed;
  car4.velocityX=speed;
  //car1.debug=true;
  //wall1.debug=true;

 if(wall1.x-car1.x < (car1.width+wall1.width)/2)
 {
   car1.velocityX=0;
   var deformation = 0.5 * weight * speed * speed / 22509;
   if(deformation>180)
   {
      car1.shapeColor=color(255,0,0);
   }

   if(deformation>80 && deformation<180)
   {
      car1.shapeColor=color(230,230,0);
   }

   if(deformation<80)
   {
      car1.shapeColor=color(0,255,0);
   }

 }
 if(wall2.x-car2.x < (car2.width+wall2.width)/2)
 {
   car2.velocityX=0;
   var deformation = 0.5 * weight * speed * speed / 22509;
   if(deformation>180)
   {
      car2.shapeColor=color(255,0,0);
   }

   if(deformation>80 && deformation<180)
   {
      car2.shapeColor=color(230,230,0);
   }

   if(deformation<80)
   {
      car2.shapeColor=color(0,255,0);
   }

 }
 if(wall3.x-car3.x < (car3.width+wall3.width)/2)
 {
   car3.velocityX=0;
   var deformation = 0.5 * weight * speed * speed / 22509;
   if(deformation>180)
   {
      car3.shapeColor=color(255,0,0);
   }

   if(deformation>80 && deformation<180)
   {
      car3.shapeColor=color(230,230,0);
   }

   if(deformation<80)
   {
      car3.shapeColor=color(0,255,0);
   }

 }
 if(wall4.x-car4.x < (car4.width+wall4.width)/2)
 {
   car4.velocityX=0;
   var deformation = 0.5 * weight * speed * speed / 22509;
   if(deformation>180)
   {
      car4.shapeColor=color(255,0,0);
   }

   if(deformation>80 && deformation<180)
   {
      car4.shapeColor=color(230,230,0);
   }

   if(deformation<80)
   {
      car4.shapeColor=color(0,255,0);
   }

 }
  
  drawSprites();
}
