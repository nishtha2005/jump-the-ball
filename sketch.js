var canvas;
var block1,block2,block3,block4;
var ball, edges;
var music;

function preload(){
    // load sound here
}


function setup(){
    canvas = createCanvas(800,600);

    block1 = createSprite(5,580,360,30);
    block1.shapeColor = "blue";

    block2 = createSprite(292.5,580,200,30);
    block2.shapeColor = "yellow";

    
    block3 = createSprite(495,580,200,30);
    block3.shapeColor = "green";

    
    block4 = createSprite(697.5,580,200,30);
    block4.shapeColor = "red";

    //create two more blocks i.e. block3 and block4 here

    ball = createSprite(random(20,750),100, 40,40);
    ball.shapeColor = rgb(255,255,255);
    ball.velocityX=5;
    ball.velocityY=2;
    //write code to add velocityX and velocityY

}

function draw() {
    background(rgb(169,169,169));
    edges=createEdgeSprites();
    ball.bounceOff(edges);

    
    //write code to bounce off ball from the block1 
    if(ball.isTouching(block1)){
        ball.shapeColor = "blue";
        ball.bounceOff(block1)
    }

    if(block2.isTouching(ball)){
        ball.shapeColor = "yellow"
        ball.velocityY=0
        ball.velocityX=0
    }

    if(block3.isTouching(ball)){
        ball.shapeColor = "green";
        //write code to set velocityX and velocityY of ball as 0
    ball.bounceOff(block3)
        //write code to stop music
    }

    //write code to bounce off ball from the block3


    //write code to bounce off ball from the block4

    drawSprites();
}
