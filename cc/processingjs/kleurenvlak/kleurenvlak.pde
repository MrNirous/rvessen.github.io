// 3 variabelen voor de achtergrond kleur
int r = 0;
int b = 0;
int g = 0;
boolean change = true;

void setup() {
 size(700,500);
}
void draw() {
  background(r,g,b);
  stroke(255);
  line(width/2,0,width/2,height);
  line(0,height/2,width,height/2);
  
 if(change == true){ 
    if(mouseX > width/2){
       r = r + 5 ;
    } else {
      r = r - 5;
    }
    if(mouseY > height/2){
      b = b + 5;
    } else {
      b = b - 5;
    }
 }
  r = constrain(r,0,255);
  b = constrain(b,0,255);

}

void mouseClicked(){
  if(change == false){
    change = true;
  } else {
    change = false;
  }
}


