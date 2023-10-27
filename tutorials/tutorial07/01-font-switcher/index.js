function makeBigger() {
   sizeH1 = sizeH1 + 5;
   sizeP = sizeP + 5;
   //alert('make bigger!');
   document.querySelector("h1").style.fontSize =sizeH1 + "px";
   document.querySelector("p").style.fontSize =sizeH1 + "px"
};

function makeSmaller() {
   sizeH1 = sizeH1 - 5;
   sizeH1 = sizeH1 - 5;
   //alert('make smaller!');
   document.querySelector("h1").style.fontSize =sizeH1 + "px";
   document.querySelector("p").style.fontSize =sizeH1 + "px";
};

let sizeH1 = 40;
let sizeP = 20;
/*
Tips:
1. First, in the index.html file, add an onclick attribute to each button.
   The value of the attribute should be a call to the corresponding function
   (see class demos).

2. Then modify the body of the "makeBigger" and 
   "makeSmaller" functions (in between the curly braces)
   to target the body element and set it's font size.
*/
