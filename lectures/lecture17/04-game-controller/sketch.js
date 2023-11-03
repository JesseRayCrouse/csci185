let x = 100;
let y = 200;
let width = 50;
let fillColor = "white";

const canvasWidth = window.innerWidth;
const canvasHeight = window.innerHeight;

function setup() {
    createCanvas(canvasWidth, canvasHeight);

    // fill('red');
    fill(fillColor);
    drawCreature(x, y, width);

    drawGrid(canvasWidth, canvasHeight);
}

function moveController(ev) {
    console.log(ev.code);
    // left arrow moves circle left
    // right arrow moves circle right
    // up arrow moves circle up
    // down arrow moves circle down
if (ev.code === "ArrowUp") {
    y=y-3;
} else if (ev.code === "ArrowDown") {
    y=y+3;
} else if (ev.code === "ArrowRight") {
    x=x+3;
} else if (ev.code === "ArrowLeft")  {
    x=x-3;  
} else if (ev.code === "Space") {
    width=width + 3;
} else if (ev.code === "KeyR") {
     fillColor = "red";
} else if (ev.code ==="KeyB") {
     fillColor = "blue";
} else if (ev.code ==="KeyG") {
     fillColor ="green";
}
    // redraw circle:
    clear();
    fill(fillColor);
    drawCreature(x, y,fillColor, width, false);
    drawGrid(canvasWidth, canvasHeight);
}

// Add event listener on keydown
document.addEventListener("keydown", moveController);
function drawCreature(x, y,color,size) {
    fill(color)
    //let size = 150;
    let eyeball = size / 7.5;
       circle(x,y,size);
       fill('white')
       circle(x - 10,y - eyeball,75);
       fill('white')
       circle(x - 90,y - eyeball,75);
       fill('black')
       circle(x-10,y- eyeball,45);
       fill('black')
       circle(x-90,y-eyeball,45);
}