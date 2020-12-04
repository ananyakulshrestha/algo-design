var rect1;
var rect2,rect3,rect4;
var object1, object2;
function setup() {
  createCanvas(800,400);
  rect1 = createSprite(400, 200, 50, 50);
  rect1.shapeColor = "blue";

  rect2 = createSprite(200, 200, 50, 50);
  rect2.shapeColor = "blue";

  rect3 = createSprite(500, 200, 70, 50);
  rect3.shapeColor = "blue";
  rect3.velocityX = 2;

  rect4 = createSprite(700, 200, 70, 50);
  rect4.shapeColor = "blue";
  rect4.velocityX = -2;
}

function draw() {
  background(0);  

rect2.x = mouseX;
rect2.y = mouseY;

if(isTouching(rect2,rect1))
{
  rect2.shapeColor = "yellow";
  rect1.shapeColor = "yellow";
}
else
{
  rect2.shapeColor = "blue";
  rect1.shapeColor = "blue";
}

console.log(rect1.x - rect2.x);

bounceOff(rect3, rect4);
  drawSprites();
}

// here rect2 is object1 and rect3 is object2
