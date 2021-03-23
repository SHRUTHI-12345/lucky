var canvas;
var music;
var surface1,surface2,surface3,surface4;
var box,edges;

function preload(){
    music = loadSound("music.mp3");
}


function setup(){
    canvas = createCanvas(800,600);
   surface1 = createSprite(0,580,360,30);
   surface2 = createSprite(295,580,200,30); 
   surface3 = createSprite(515,580,200,30);
   surface4 = createSprite(740,580,220,30);

   box = createSprite(random(20,750),100,40,40);
   box.velocityX=4;
   box.velocityY=9;
   
surface1.shapeColor="blue"
surface2.shapeColor="yellow"
surface3.shapeColor="pink"
surface4.shapeColor="red"


    //create 4 different surfaces



    //create box sprite and give velocity

}

function draw() {
    background(rgb(169,169,169));
    edges=createEdgeSprites();
    if(surface1.isTouching(box) && box.bounceOff(surface1)){
        box.shapeColor="green"
        music.play();
     }
    if(surface2.isTouching(box) && box.bounceOff(surface2)){
        box.shapeColor="purple"
        music.play();
     }
    if(surface3.isTouching(box) && box.bounceOff(surface3)){
        box.shapeColor="peach"
        music.play();
     }
    if(surface4.isTouching(box) && box.bounceOff(surface4)){
        box.shapeColor="maroon"
        music.play();
    }

    drawSprites();





    //create edgeSprite




 }
