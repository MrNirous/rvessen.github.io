//maak 2 arrays aan voor de x en de y met 50 plaatsen van 0 t/m 49
//hier gebruik je de lange notatie,
//want je weet van te voren niet welke waarden hierin komen
int xpos[] = new int[50];
int ypos[] = new int[50];

void setup() {
  size(700,500);
   smooth();
}

void draw() {
  background(255);
  
  moveElements();
  
  // Zet de huidige locatie op de laatste plaats
  xpos[49] = mouseX; 
  ypos[49] = mouseY;
  
  drawCirkels();
}

void moveElements(){
 // Verplaats alles 1 plaats naar voren de laatste plaats komt dan vrij 
 //dus wat op plaats 1 staat gaat naar plaats 0, 2 naar 1 etc.
  for (int i = 0; i < 49; i++ ) {
    //zonder loop zou je volgende code nodig hebben
    //xpos[0] = xpos[1];
    //xpos[2] = xpos[3];
    //xpos[3] = xpos[4];
    //xpos[4] = xpos[5];
    //etc t/m 48 (dus tot 49), plaats 49 wordt in de draw() gevuld
    //vervang het deel dat telkens verandert met een variabele
    //in plaats van een tweede variabele, kan je de eerste hergebruiken (+1)
    xpos[i] = xpos[i+1];
    //idem voor de ypos
    ypos[i] = ypos[i+1];
  }
}

void drawCirkels(){
 // Teken alle cirkels
 // Maak ook de kleur en grootte afhankelijk van de i
  for (int i = 0; i < 50; i ++ ) {
    noStroke();
    //fill(255,0,0); //rode cirkels
    fill(255-i*5,i*5,0);
    //zonder loop zou je de volgende code nodig hebben:
    //ellipse(xpos[0],ypos[0],0,0);
    //ellipse(xpos[1],ypos[1],1,1);
    //ellipse(xpos[2],ypos[2],2,2);
    //ellipse(xpos[3],ypos[3],3,3);
    //ellipse(xpos[4],ypos[4],4,4);
    //etc. t/m 49 (dus tot 50)
    //vervang het deel dat telkens verandert met een variabele
    ellipse(xpos[i],ypos[i],i,i);
  }
}

