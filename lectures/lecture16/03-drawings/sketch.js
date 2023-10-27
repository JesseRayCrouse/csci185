function setup() {
    const canvasWidth = window.innerWidth;
    const canvasHeight = window.innerHeight; 
    createCanvas(canvasWidth, canvasHeight);
    background("#E7B5FF");

    /* Use the drawing functions to draw a picture. Ideas:
        * Draw an animal
        * Draw a tree
        * Draw a car
        * Draw some abstract art
    */

    // https://p5js.org/reference/#/p5/circle
    strokeWeight(2)
    fill("red")
    circle(550, 100, 100);
    fill("white")
    circle(550, 100, 90);
    fill("red")
    circle(550, 100, 80);
    fill("white")
    circle(550, 100, 70);
    fill("red")
    circle(550, 100, 60);
    fill("white")
    circle(550, 100, 50);
    fill("red")
    circle(550, 100, 40);


    // https://p5js.org/reference/#/p5/rect
    fill('brown')
    rect(245, 100, 105, 5);
    // add your drawing here:
    // https://p5js.org/reference/#/p5/point
    // point(110, 20);

    // https://p5js.org/reference/#/p5/text
    // text("Here is some text", 200, 40);

    // https://p5js.org/reference/#/p5/ellipse
    // fill('red');
    // ellipse(100, 200, 60, 100);

    // Other shapes...
    // Polygon: https://p5js.org/reference/#/p5/beginShape
    // Line: https://p5js.org/reference/#/p5/line
    
    // Curve: https://p5js.org/reference/#/p5/curve

 drawCreature(100,250,'red',200);
 drawCreature(200,350,'orange',220);
 drawCreature(300,450,'yellow',240);
 drawCreature(400,550,'green',260);
 drawCreature(500,650,'blue',280);
    // for debugging:
    //drawGrid(canvasWidth, canvasHeight)
}



function drawCreature(x, y,color,size) {
 fill(color)
 //let size = 150;
 let eyeball = 150 / 7.5;
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