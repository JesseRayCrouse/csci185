let x = 100;
let y = 200;
let a = 1200;
let b = 300;
let width = 70;
let width1 = 30;
let speed = 10;
let speed1 = 30;

const canvasWidth = window.innerWidth;
const canvasHeight = window.innerHeight; 

async function setup() {
    createCanvas(canvasWidth, canvasHeight);
}

// In p5.js, if you create a function called "draw",
// the function will be invoked over and over again
// in an animation loop (which is part of how p5.js 
// works).
function draw() {
    x += speed;
    y -= 2; 
    a -= speed1;
    //b += ;
    if (a <-100) {
     a = canvasWidth;
    }

    clear();
    fill('purple');
    circle(x, y, width);
    circle(a, b, width1);
    drawGrid(canvasWidth, canvasHeight);
}

