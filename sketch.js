var airplane, airplaneImg;
var background, backgroundImg;
var cargoBoxGroup,cargoBoxImg;
var geeseGroup,geeseImg;
var backgroundImg;
var gameState = "wait";
var button, buttonImg
var cargoBoxPosX
function preload(){
  airplaneImg = loadImage("airplane.png");
  cargoBoxImg = loadImage("cargoBox.png")
  //cargoBoxesImg = loadImage("cargoBoxes.png")
  geeseImg = loadImage("geese.png")
  buttonImg = loadImage("playButton.png")
  backgroundImg = loadImage("background.jpg")
}
function setup() {
  createCanvas(windowWidth,windowHeight);
  //bg = createSprite(width/2,height/2);
  //bg.addImage(backgroundImg);
airplane = createSprite(250,380)
 airplane.addImage(airplaneImg);
 airplane.scale = 0.08;
airplane.visible = false;

  //cargoBoxes = createSprite(40,272);
  //cargoBoxes.addImage(cargoBoxesImg);
  //cargoBoxes.scale = 0.4;
  button = createSprite(width/2-100,height/2,100,100);
  button.addImage(buttonImg);
  button.scale = 0.22;

  cargoBoxGroup = new Group();
  geeseGroup = new Group();
}

function draw(){
//background("black");

  if(gameState==="wait"){
fill("blue")
textSize(50);
text("Airplane Game",width/2-250,height/2-150)
//bg.addImage(backgroundImg);
  }
if(mousePressedOver(button) && gameState ==="wait"){
gameState = "play"
}
if(gameState ==="play"){
  button.visible = false;
  airplane.visible = true;
  spawnCargoBox();
  spawnGeese();
  image(backgroundImg,0,0,width*1,height);
  //background(background1Img);
  //bg.addImage(background1Img);
  handlePlayerControls();
}
drawSprites();
}
function handlePlayerControls(){
  if(keyIsDown(RIGHT_ARROW)){
  airplane.x +=3
  }
  if(keyIsDown(UP_ARROW)&& keyIsDown(RIGHT_ARROW)){
    airplane.x +=3
    airplane.y -=3
  }
  if(keyIsDown(DOWN_ARROW)){
    airplane.y -=-3;
  }
}

function spawnGeese(){
  if(frameCount % 100 ==0){
    geese = createSprite(width,200);
    geese.addImage(geeseImg);
   geese.scale = 0.04;
   geeseGroup.add(geese);
   geese.velocityX = -5;
   geese.depth = airplane.depth;
   airplane.depth = airplane.depth + 1;
   geese.lifetime = width/5
  }
}
function spawnCargoBox(){
  if(frameCount % 80==0){
  cargoBox = createSprite(width,145);
  cargoBox.addImage(cargoBoxImg);
  cargoBox.x = Math.round(random(0,width));
  cargoBox.scale = 0.04;
  cargoBoxGroup.add(cargoBox);
  cargoBox.depth = airplane.depth;
  airplane.depth = airplane.depth + 1;
  }
}