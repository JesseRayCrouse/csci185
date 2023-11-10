function setup() {
    const canvasWidth = window.innerWidth;
    const canvasHeight = window.innerHeight; 
    createCanvas(canvasWidth, canvasHeight);

      fill('lime');
      stroke('lime');
    let y = 100;
    let w = 50;
    let x = 100;
    while (y <=700) {
        circle(100, y, w);
        circle(300, y/2, w);
        circle(500, y, w);
        circle(700, y/2, w);
        circle(900, y, w);
        circle(1100, y/2, w);
        circle(1300, y, w);
// horizontal squares
        fill('red');
        stroke('red');
        square(x, 100, w);
        square(x, 400, w);


        x+= 5;
        y += 5;
        w += 1;
    }


    drawGrid(canvasWidth, canvasHeight);
}
