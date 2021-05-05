var knight, canvas;
var ghost1,ghost2,ghost3,ghost4;
var princess,backgroundImage;
var spike;
var door;
var floor;

function preload(){
knightImage = loadAnimation("images/k1.png","images/k2.png","images/k3.png");
ghost1Image = loadImage("images/ghost.png");
ghost2Image = loadImage("images/ghost.png");
ghost3Image = loadImage("images/ghost.png");
ghost4Image = loadImage("images/ghost.png");
princessImage = loadImage("images/princess3.png");
backgroundImage = loadImage("images/bg.jpg");
spike = loadImage("images/spike.png");
door = loadImage("images/door.jpg");
}

function setup(){
canvas = createCanvas(displayWidth, displayHeight);



floor = createSprite(0, 400, displayWidth, displayHeight);
floor.addImage(backgroundImage);
floor.scale=1.4;
floor.velocityX=-3;

knight = createSprite(200,displayHeight-160,20,50);
princess = createSprite(displayWidth-150,50,20,50);
knight.addAnimation("running",knightImage);
princess.addImage(princessImage);

princess.scale = 0.1;
}

function draw(){
background("white");
if(floor.x<0){
    floor.x=floor.width/2;
}
drawSprites();

}
