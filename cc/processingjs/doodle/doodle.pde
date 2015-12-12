float angle = 0.0;

void setup() {
     size(700, 500);
     smooth();
}

void draw() {
     translate(mouseX, mouseY);
     rotate(angle);
     rect(-30, -30, 60, 60);
     if(mousePressed){
       angle += 0.1;
     } else{
       angle -= 0.1;
     }
}
