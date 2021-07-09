var dog;
var dog1, dog2;
var database, food, foodStock;

function preload()
{
	dog1 = loadImage('images/dogImg.png');
  dog2 = loadImage('images/dogImg1.png');
}

function setup() {
	createCanvas(800, 700);
  database = firebase.database();

  dog = createSprite(400,300);
  dog.addImage(dog1);
  dog.scale = 0.2;

  foodStock = database.ref('food');
  foodStock.on('value',readStock);

}


function draw() {  
background('green');
  
  //add styles here

  if(keyWentDown(UP_ARROW)) {
    writeStock(food)
    dog.addImage(dog2);
  }

drawSprites();

fill(255,255,254); 
stroke("black"); 
text("Food remaining : "+food,170,200); 
textSize(13);
text("Note: Press UP_ARROW Key To Feed Drago Milk!",130,10,300,20);
}

function readStock(data){
   food=data.val(); 
  }

function writeStock(x) {
  if(x<=0) {
    x = 0;
  }
  else{
    x = x-1;
  }

  database.ref('/').update({
    food : x
  })
}


