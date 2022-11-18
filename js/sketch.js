function setup() {
    var canvas = createCanvas(800, 800);
    canvas.parent("p5container");
}

//current progress:
//collision around one block working
//keyboard inputs
//need to add:
//proper jumping instead of teleporting up
//no infinite jumps
//collisions working for an indefinite amount of blocks instead of being hardcoded to one
//external document to add blocks (through for loop to go through them based on amount of blocks and variables for the coordinates)

var gravity = 10;
var speed = 5;
var isJumping = false;
var jumpheight = 20;
var jumpduration = 10;
var squaresize = 50;
var x1 = 1;
var y1 = 700;

function draw() {
    background(220);

    fill(255, 255, 255);
    square(x1,y1,squaresize);

    square(400, 750, squaresize);

    y1 += gravity;
    if (y1 > 750){
        y1 = 750;
    }

    x1 += speed;

    if (x1 > 360){
        if (x1 < 450){
            if (y1 > 700){
                y1 = 700;
            }
        }
    }
    if (x1 > 350){
        if (x1 < 360){
            if (y1 > 700){
                x1 = 350;
                reset();
            }
        }
    }
    if (isJumping == true){
        for (let i = 0; i < jumpduration; i++){
            y1 -= jumpheight;
        }
        isJumping = false;
    }

}

function reset(){
    x1 = 1;
    y1 = 700;
}

function keyPressed(){
    if (key === ' '){
        isJumping = true;
    }
    if (key === 'a'){
        reset();
    }
}