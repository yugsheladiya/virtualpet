var dog;
var database,position;

function preload()
{
	//load images here
  dog = loadImage("dogimg1.png");
}

function setup() {
	createCanvas(800, 700);
  dog = createSprite(250,250,10,10);
  dog.shapeColor = "cyan";
  database = firebase.database();
  var dogposition = database.ref("dog/position");
   dogposition.on("value",readPosition,showError);
  
}


function draw() {  
  background("black");
  if(keyDown(LEFT_ARROW)){
      changePosition(-1,0);
  }
  else if(keyDown(RIGHT_ARROW)){
      changePosition(1,0);
  }
  else if(keyDown(UP_ARROW)){
      changePosition(0,-1);
  }
  else if(keyDown(DOWN_ARROW)){
      changePosition(0,+1);
  }
  drawSprites();

  drawSprites();
  //add styles here

}
function changePosition(x,y){
  dog.x = dog.x + x;
  dog.y = dog.y + y;
}
function readPosition(data){
  position = data.val();
  dog.X = position.X;
  dog.Y = position.Y;
}
function writePosition(x,y){
  database.ref("dog/position").set({
      "x": position.x+x,
      "y": position.y+y
  })
}
function showError(){
  console.log("error");
}


