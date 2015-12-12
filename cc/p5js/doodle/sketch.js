var angle = 0.0;

function setup() {
  // uncomment this line to make the canvas the full size of the window
   createCanvas(windowWidth, windowHeight);
}

function draw() {
  translate(mouseX, mouseY);
  rotate(angle);
  rect(-30,-30,60,60);
  if(mouseIsPressed){
    angle+=0.1;
  } else {
    angle-=0.1;
  }
}