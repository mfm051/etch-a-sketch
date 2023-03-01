// print squares on screen
let numOfSquaresPerLine = getSquaresPerLine();

let canvas = document.querySelector(".canvas");

function getSquaresPerLine () {
    let numOfSquaresPerLine = prompt('num of squares per line',16);
    if (numOfSquaresPerLine > 40) {
        alert('max of 40 reached!');  // more than 40 is possible, but it makes drawing difficult 
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

printSquares(numOfSquaresPerLine, canvas);

// Change color of square
let defaultColor = "#05BE05";
let red = "#F33B1B";
let yellow = "#EBFF0F";
let blue = "#27EBF6";
let canvasColor = "black";

let currentColor = defaultColor;

let titleText = document.querySelector(".text");

let squares = document.querySelectorAll(".square");

function draw(e, color) {
    if (e.buttons === 1) {
        e.target.style.backgroundColor = color;
        e.target.style.borderColor = color;
        e.target.style.boxShadow = `0 0 10px ${color}`;
    } 
};

function changeCanvasStyle (color) {
    canvas.style.boxShadow = `0 0 50px ${color}`;
    titleText.style.color = color;
    titleText.style.textShadow = `${color} 1px 1px 15px`;
    reset.style.color = color;
    reset.style.textShadow = `${color} 1px 1px 5px`;
}

canvas.addEventListener("mousedown", (e) => {draw(e)});
squares.forEach((square) => square.addEventListener("mousemove",(e) => {draw(e, currentColor); changeCanvasStyle(currentColor)}));

// Reset canvas
reset = document.getElementById("reset");

function resetCanvas () {
    squares.forEach((square) => {
        square.style.backgroundColor = canvasColor;
        square.style.borderColor = "#393B39";
        square.style.boxShadow = "none"; 
    })
};

reset.addEventListener("mousedown", resetCanvas);

// Pick a color
document.querySelector(".green").addEventListener("mousedown", () => currentColor = defaultColor);
document.querySelector(".red").addEventListener("mousedown", () => currentColor = red);
document.querySelector(".yellow").addEventListener("mousedown", () => currentColor = yellow);
document.querySelector(".blue").addEventListener("mousedown", () => currentColor = blue);
