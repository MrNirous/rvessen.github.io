//geluid library
var gooi1;
var raak1;
var raak2;
var win1;
//var bg;

//onzichtbaar vierkant
var leftRodTopX = 140;
var leftRodTopY = 360;
var rightRodTopX = 265;
var rightRodTopY = 360;
var rectLeftX = 150;
var rectRightX = 850;
var rectMidX = 155;
var rectTopY = 400;
var rectWidth = 10;
var rectHeight = 100;
var xas = 0;
var xmuis = 2000;
var xmuis2 = 750;

//levensbalkjes
var leven1 = 462;
var leven2 = 462;
var leven2x = 462;

//posities voorwerpen
var ApressedX = 265;
var ApressedY = 560;
var DpressedX = 855;
var DpressedY = 350;

//zorgt dat onzichtbare vierkant werkt
var slingMid = 152.5;
var ellipseCenterX = 155;
var ellipseCenterY = 560;
var x;
var y;
var r;
var g;
var b;

var start1 = true;
var muisje = false;
var muisje2 = false;

var hasBeenReleased = false;
var hasBeenReleaset = false;

var winner = false;
var winner2 = false;

var minleven = false;

//poppetjes met ingetrokken armpjes
var ronnie = false;
var robbie = false;

//winnaarscherm
var ronniewins = false;
var robbiewins = false;

//win geluid
var finish = false;

//alle afbeeldingen van Bradley
var ronnie1; var ronnie2;var robbie1;var robbie2;var tang;var appel;var ronnie3;var robbie3;var start;var wolken;var grond;var muis2;var muis;


var press;
var press2;
var release2;
var release;

var gravity = 0.0;
var gravity2 = 0.0;

function preload() {
  //soundFormats('mp3');
  gooi1 = loadSound("assets/Robbie_gooit.mp3");
  raak1 = loadSound("assets/Robbie_geraakt.mp3");
  raak2 = loadSound("assets/auw.mp3");
  bg = loadSound('assets/bg.mp3');
}

function setup() {
  createCanvas(1024, 768);
  //smooth();

  press = createVector(0,0);
  press = createVector(0,0);
  release = createVector(0,0);
  release2 = createVector(0,0);

  ronnie1 = loadImage("assets/ronnie01.png");
  ronnie2 = loadImage("assets/ronnie-02.png");
  robbie1 = loadImage("assets/robot-robbie-01.png");
  robbie2 = loadImage("assets/robot-robbie-02.png");
  ronnie3 = loadImage("assets/ronniewins.png");
  robbie3 = loadImage("assets/robbiewins.png");
  tang = loadImage("assets/moersleutel-02.png");
  appel = loadImage("assets/appel-02.png");
  start = loadImage("assets/start.png");
  wolken = loadImage("assets/wolken.jpg");
  grond = loadImage("assets/grond.png");
  muis = loadImage("assets/muis-01.png");
  muis2 = loadImage("assets/muis-02.png");
  background = loadImage("assets/grondkopie.png");
  bg.loop();
}

function draw() {
  image(background, 0, 0);
  imageMode(CENTER);
 
  if (leven1 < 0) {
    ronniewins = true;
  }

  if (leven2x > 900) {
    robbiewins = true;
  }


  if (ronnie == false) {
    image(ronnie1, 900, 500);
  }

  if (robbie == false) {
    image(robbie1, 130, 450);
  }
  if (start1) {
    imageMode(CORNER);
    image(start, 0, 0);
  }
  //LEVENSBALKJES
  fill(255);
  rect(0, 50, width/2-50, 20); // witte balk
  rect(width/2+50, 50, width/2-50, 20); //witte balk
  fill(255, 0, 0);
  rect(0, 50, leven1, 20);
  rect(leven2x+100, 50, leven2, 20);


  if (keyIsPressed) {
    if (key== ' ') {
      start1 = false; 
      muisje = true;
    }
  }
  if (keyIsPressed) {
    if (key == 'a') {
      robbie = true;
      if (robbie == true) {
        image(robbie2, 130, 450);
        gooi1.play();
      }

      image(tang, ApressedX, ApressedY);

      press = createVector(ApressedX, ApressedY);
      winner = false;
    }

    if (key == 'd') {
      ronnie = true;
      if (ronnie == true) {
        image(ronnie2, 900, 500);
      }
      fill(255, 0, 0);
      image(appel, DpressedX, DpressedY);
      gooi1.play();
      press2 = createVector(DpressedX, DpressedY);
      winner = false;
    }
    
  }

  if(keyIsPressed==false) {

    //POPPETJES HIER!!
    ronnie = false;
    robbie = false;
  }

  if(hasBeenReleased)
  {
    //tang
    //image(tang, release.x, release.y);
    image(tang, ApressedX, ApressedY);
    //release.add(press);
    //release.y+=gravity;
    
    ApressedY+=gravity;
    //release.x += 11;
    ApressedX+= 11;
    //release.y -= 20;
    ApressedY -= 20;

    gravity+=0.6;



    if (ApressedY>=450 && ApressedY<=500 && ApressedX >= 900 && ApressedX <= 1000) {
      winner = true;
    }
  }


  if(hasBeenReleaset)
  {

    //appel
    //image(appel, release2.x, release2.y);
    image(appel, DpressedX, DpressedY);
    //release2.add(press2);
    //release2.y+=gravity2;
    DpressedY+=gravity2;
    DpressedX -= 10;
    //DpressedX -= Math.random(5,13);
    DpressedY -= 10;
    //DpressedY -= Math.random(5,14);
    
    gravity2+=0.6;



    if(DpressedY>=400 && DpressedY<=500 && DpressedX >= 120 && DpressedX <= 160) {
      winner2 = true;
    }
  }

  //levensbalkB
  if(winner) {
    leven2x = leven2x + 35;
    raak2.play();
    winner = false;
  }
  //levensbalkA
  if(winner2) {
    leven1 = leven1 - 35;
    raak1.play();
    winner2 = false;
  }

  if (minleven) {
    rect(0, 50, width/2-20, 20);
  } 

  //gameover
  if (ronniewins) {
    imageMode(CORNER);
    image(ronnie3, 0, 0);
    muisje = false;
  }
  if (robbiewins) {
    imageMode(CORNER);
    image(robbie3, 0, 0);
    muisje = false;
  }

  //muisje
  if (muisje) {
    image(muis, xmuis, 220);
    xmuis = xmuis-=8;
    if (xmuis <= 750) {
    xmuis = 2000;
      muisje2 = true;
    }

    if (muisje2) {
      image(muis2, xmuis2, 220);
      xmuis2 = xmuis2+=8;
      if (xmuis2 >= 1030) {
        xmuis2 =750; 
        muisje2 = false;
      }
    }
  }
}

function reset(){
  //println("werkt");
  robbiewins = false;
  ronniewins = false;
  winner = false;
  winner2 = false;
  leven1 = 462;
  leven2 = 462;
  leven2x = 462;
}


function keyTyped() {
  if(key == 'r'){
    reset();
  }
  if (key == 'a') {
  //println("werkt");
    ApressedX = 265;
    ApressedY = 560;
    /*
    var cSquared = sqrt(((ApressedY-leftRodTopY)*(ApressedY-leftRodTopY))+((slingMid-ApressedX)*(slingMid-ApressedX)))/5;
    release = createVector(ApressedX, ApressedY);
    press.sub(release);
    press.normalize();
    press.mult(cSquared);
    */
    hasBeenReleased = true;
    //release.y = 560;
    gravity = 0;
  }

  if (key == 'd') {
    DpressedX = 855;
    DpressedY = 350;
    /*
    var cSquared2 = sqrt(((DpressedY-leftRodTopY)*(DpressedY-leftRodTopY))+((slingMid-DpressedX)*(slingMid-DpressedX)))/5;
    release2 = createVector(DpressedX, DpressedY);
    press2.sub(release2);
    press2.normalize();
    press2.mult(cSquared2);
    */
    hasBeenReleaset = true;
    gravity2 = 0;
    //release2.y = 350;
  }
}

function Vector(x,y) {
    this.x = x;
    this.y = x;   
}