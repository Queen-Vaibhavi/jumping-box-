var canvas;
var music,tune,song,melody;
var surface1,surface2,surface3,surface4;

function preload(){
    music = loadSound("music.mp3");
    tune = loadSound("bubblesurface-5-sound-effect.mp3");
    song = loadSound("3-magic-idea-03-sound-effect.mp3");
melody = loadSound("fairy-magic-wand-01-soundeffect.mp3");

}


function setup(){
    canvas = createCanvas(800,800);

    //create 4 different surfaces;
    surface1 = createSprite(100,580,150,8);
    surface1.shapeColor = color("purple");
    
    surface2 = createSprite(300,580,150,8);
    surface2.shapeColor = color("blue");
    
    surface3 = createSprite(500,580,150,8);
    surface3.shapeColor = color("seagreen");
   
    surface4 = createSprite(700,580,150,8);
    surface4.shapeColor = color("red");

    //create box sprite and give velocity
    box = createSprite(400,400,50,50);
    box.shapeColor = color("black");//(make it white!)
    box.velocityX = 5;
    box.velocityY = -5;

    //create edgeSprite
edges = createEdgeSprites();
  
}

function draw() {
background(rgb(169,169,169));
    
    box.bounceOff(edges);
  
    drawSprites();

//add condition to check if box touching surface and change color
if(surface2.isTouching(box) && box.bounceOff(surface2)){
                box.shapeColor = color("blue");
                box.bounceOff(surface2);
                tune.play();
                music.stop();
                    }
                
 if(surface3.isTouching(box) && box.bounceOff(surface3)){
                  box.shapeColor = color("seagreen");
                  box.bounceOff(surface3);
                  song.play();
                  music.stop();

                            }
             
if(surface4.isTouching(box) && box.bounceOff(surface4)){
                  box.shapeColor = color("red");
                  box.bounceOff(surface4);
                  melody.play();
                  music.stop();

    
//add condition for stop box.
    if(surface1.isTouching(box)){
        box.shapeColor = rgb(128,0,128);
        box.setVelocity(0,0);
        music.stop();
            }
                                    }
            
                                       
}//function draw
