//smiley functie met parameters

function setup() {
  createCanvas(windowWidth, windowHeight);
}

function draw(){
  //smiley(100,200);
  //smiley(200,200);
  //smiley(300,200);
  smiley(mouseX,mouseY);
  //smiley(mouseX-100,mouseY);
  //smiley(mouseX+100,mouseY);
}

function smiley(x,y){
   fill(random(256),random(256),random(256));
   ellipse(x, y, 100, 100); //hoofd
   fill(0);
   ellipse(x-20,y-15, 16,32); //oog
   ellipse(x+20,y-15, 16,32); //oog
   noFill();
   arc(x, y+10,50,50, 0, PI,OPEN); //mond   
}



