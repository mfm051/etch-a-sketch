// Get number of squares
let numOfSquaresSlider = document.getElementById("num-of-squares");
let numOfSquaresPerLine = Number(numOfSquaresSlider.value);
// let numOfSquaresPerLine = getSquaresPerLine();

// function getSquaresPerLine () {
//     let numOfSquaresPerLine = prompt('num of squares per line',16);
//     if (numOfSquaresPerLine > 40) {
//         alert('max of 40 reached!');  // more than 40 is possible, but it makes drawing difficult 
//         numOfSquaresPerLine = 40;
//     }
//     return numOfSquaresPerLine; 
// }

// Print squares on screen
let canvas = document.querySelector(".canvas");

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

// Pick a color
let defaultColor = "#05BE05";
let red = "#F33B1B";
let yellow = "#EBFF0F";
let blue = "#27EBF6";
let canvasColor = "black";

function changeCanvasStyle (color) {
    canvas.style.boxShadow = `0 0 50px ${color}`;
    titleText.style.color = color;
    titleText.style.textShadow = `${color} 1px 1px 15px`;
    reset.style.color = color;
    reset.style.textShadow = `${color} 1px 1px 5px`;
}

document.querySelector(".green").addEventListener("mousedown", () => {currentColor = defaultColor; changeCanvasStyle(defaultColor)});
document.querySelector(".red").addEventListener("mousedown", () => {currentColor = red; changeCanvasStyle(red)});
document.querySelector(".yellow").addEventListener("mousedown", () => {currentColor = yellow; changeCanvasStyle(yellow)});
document.querySelector(".blue").addEventListener("mousedown", () => {currentColor = blue; changeCanvasStyle(blue)});
document.querySelector(".eraser").addEventListener("mousedown", () => {currentColor = canvasColor; changeCanvasStyle(defaultColor)});

// Change color of square
let currentColor = defaultColor;

let titleText = document.querySelector(".text");

let squares = document.querySelectorAll(".square");

function draw(e, color) {
    if (e.buttons === 1) {
        e.target.style.backgroundColor = color;
        if (color === canvasColor) {
            e.target.style.borderColor = "#393B39";
            e.target.style.boxShadow = "none";
        } else {
            e.target.style.borderColor = color;
            e.target.style.boxShadow = `0 0 10px ${color}`;
        }
    } 
};

canvas.addEventListener("mousedown", (e) => {draw(e, currentColor)});
squares.forEach((square) => square.addEventListener("mousemove",(e) => draw(e, currentColor)));

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
