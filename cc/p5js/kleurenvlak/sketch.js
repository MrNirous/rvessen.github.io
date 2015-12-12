// 3 variabelen voor de achtergrond kleur
var r = 0;
var g = 0;
var b = 0;
var change=true; 

function setup() {
  createCanvas(700,500);
}

function draw() {
  background(r,g,b);  
  stroke(255);
  line(width/2,0,width/2,height);
  line(0,height/2,width,height/2);
 
 if(change==true){ 
    if(mouseX > width/2){
      r = r + 5;
    } else {
      r = r - 5;
    }
    if(mouseY > height/2){
      b = b + 5;
    } else {
      b = b - 5;
    }
 }
 
  // Constrain zorgt ervoor dat de waardes tussen de 0 en 255 blijft.
  r = constrain(r,0,255);
  b = constrain(b,0,255);
  
  //met println kan je berichten tonen in de console
  //println("mouseX is " + mouseX);
  //println("mouseY is " + mouseY);
  //println(change);

}//draw afsluiten

function mouseClicked(){
  //als change op false staat
  if(change==false){
    //verander change naar true
    change=true;
  } else {
    //anders, verander change naar false
    change=false;
  }
}