const canvasWidth = window.innerWidth;
const canvasHeight = window.innerHeight; 
const colors = ["#8F00D1", "#7300A8", "#A700F5", "#57007F", "#3B0057"];

function randomFloat(min, max) { 
	// min and max included 
	return Math.random() * (max - min) + min;
}

function randomInt(min, max) { 
	// min and max included 
	return Math.floor(Math.random() * (max - min + 1)) + min;
}

function setup() {
    createCanvas(canvasWidth, canvasHeight);
    // frameRate(2);
 
    let counter = 0;
    while (counter <500) {
    const i = randomInt(0,4);
    console.log("the index is:",i);
    fill(colors[i]);
    stroke(colors[i]);
    strokeWeight(randomInt(1,4));

    // draw a random circle:
    let x = randomInt(0, canvasWidth);
    let y = randomInt(0, canvasHeight);
    let size = randomFloat(25, 125);
    console.log(x,y,size);
    square(x, y, size);
    circle(x, y, size);
    counter +=1;
    }
}


// // anything that you want to animate goes in this function:  
// function draw() {
//     clear();

// }


 
// // 1. draw a random square:
// square(x, y, size);

// // 2. draw a random triangle:
// triangle(
//     x, y - size / 2, 
//     x - size / 2.25, y + size / 4.3,
//     x + size / 2.25, y + size / 4.3
// );

// // 3. draw a random line:
// let coefX = randomFloat(-3, 3);
// let coefY = randomFloat(-3, 3);
// line(x, y, x + size * coefX, y + size * coefY);

