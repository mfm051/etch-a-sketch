// print squares on screen

function getSquaresPerLine () {
    let numOfSquaresPerLine = prompt('num of squares per line',16);
    if (numOfSquaresPerLine > 40) {
        alert('max of 40 reached!');  // more than 40 is possible, but makes drawing difficult 
        numOfSquaresPerLine = 40;
    }
    return numOfSquaresPerLine; 
}

function getSquareLength (numOfSquaresPerLine) {
    let squareLength = (500/numOfSquaresPerLine - 2) //-2px of border
    return squareLength;
}

function printSquares (numOfSquaresPerLine,canvas) {
    let squareLength = getSquareLength(numOfSquaresPerLine);
    for (let i=0;i<numOfSquaresPerLine*numOfSquaresPerLine;i++) {
        let square = document.createElement('div');
        square.style.width = `${squareLength}px`;
        square.style.height = `${squareLength}px`;
        square.classList.add('square');
        canvas.appendChild(square);
    }
}

let numOfSquaresPerLine = getSquaresPerLine();
let canvas = document.querySelector(".canvas");
printSquares(numOfSquaresPerLine, canvas);

// Change color of square

let defaultColor = "#05BE05";
let red = "#F33B1B";
let yellow = "#EBFF0F";
let blue = "#27EBF6";
let canvasColor = "black";

let currentColor = defaultColor;

canvas.addEventListener("mousedown", (e) => {draw(e)});

function draw(e, color) {
    if (e.buttons === 1) e.target.style.backgroundColor = color;
};

let titleText = document.querySelector(".text");

function changeStyle (color) {
    squares.forEach((square) => {   square.style.borderColor = color; 
                                    square.style.boxShadow = `0 0 10px ${color}`});
    canvas.style.boxShadow = `0 0 50px ${color}`;
    titleText.style.color = color;
    titleText.style.textShadow = `${color} 1px 1px 15px`;
    reset.style.color = color;
    reset.style.textShadow = `${color} 1px 1px 5px`;
}

let squares = document.querySelectorAll(".square");
squares.forEach((square) => square.addEventListener("mousemove",(e) => {draw(e, currentColor); changeStyle(currentColor)}));


// Reset canvas

reset = document.getElementById("reset");

function resetCanvas () {
    squares.forEach((square) => square.style.backgroundColor = canvasColor)
};

reset.addEventListener("mousedown", resetCanvas);

// Pick a color
document.querySelector(".green").addEventListener("mousedown", () => currentColor = defaultColor);
document.querySelector(".red").addEventListener("mousedown", () => currentColor = red);
document.querySelector(".yellow").addEventListener("mousedown", () => currentColor = yellow);
document.querySelector(".blue").addEventListener("mousedown", () => currentColor = blue);
