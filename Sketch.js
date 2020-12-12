var player;
var testBackgroud;
var gameState = 0;
var Play = 0;
var Quiz = 1;
var Logic = 2;
var Edge1, Edge2, Edge3, Edge4;
var Mazeblocks;

function preload() {
}

function setup() {
    createCanvas(2500, 2500);

    player = createSprite(1250,1250,100,100);
    player.shapeColor = "red";

    Edge1 = createSprite(1250,-10,2500,20);
    Edge2 = createSprite(1250,2510,2500,20);
    Edge3 = createSprite(-10,1250,20,2500);
    Edge4 = createSprite(2510,1250,20,2500);

    Mazeblocks = new Group();
}

function draw() {
    background("white");
    console.log(player.x);
    console.log(player.y);


    if(keyDown("W")) {
        player.y = player.y - 10;
    }

    if(keyDown("S")) {
        player.y = player.y + 10;
    }
    
    if(keyDown("A")) {
        player.x = player.x - 10;
    }

    if(keyDown("D")) {
        player.x = player.x + 10;
    }

    Edge1.collide(player);
    Edge2.collide(player);
    Edge3.collide(player);
    Edge4.collide(player);

    camera.position.x = player.x;
    camera.position.y = player.y;

    drawSprites();
}