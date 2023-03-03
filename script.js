//Print Squares
let numOfSquaresSlider = document.getElementById("num-of-squares");
let numOfSquaresPerLine = numOfSquaresSlider.value;

let canvas = document.querySelector(".canvas");
let squares; 

function printSquares (numOfSquaresPerLine,canvas) {
    for (let i = 0; i < (numOfSquaresPerLine*numOfSquaresPerLine); i++) {
        let square = document.createElement('div');
        square.style.width = `calc(100% / ${numOfSquaresPerLine} - 2px)`;
        square.style.height = square.style.width;
        square.classList.add('square');
        canvas.appendChild(square);
    }
    squares = document.querySelectorAll(".square");
}

printSquares(numOfSquaresPerLine, canvas);          

//Pick a color
let defaultColor = "#05BE05";
let red = "#F33B1B";
let yellow = "#EBFF0F";
let blue = "#27EBF6";
let white = "#FCFCFC";
let canvasColor = "black";

let currentColor = defaultColor;

let titleText = document.querySelector(".text");

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
document.querySelector(".eraser").addEventListener("mousedown", () => {currentColor = canvasColor; changeCanvasStyle(white)});

//Change color of squares
function draw(e) {
    if (e.buttons === 1) {
        e.target.style.backgroundColor = currentColor;
        if (currentColor === canvasColor) {
            e.target.style.borderColor = "#393B39";
            e.target.style.boxShadow = "none";
        } else {
            e.target.style.borderColor = currentColor;
            e.target.style.boxShadow = `0 0 10px ${currentColor}`;
        }
    } 
};

function updateSquares (squares) {
    squares.forEach((square) => {   square.addEventListener("mousemove", (e) => draw(e)); 
                                    square.addEventListener("mousedown", (e) => draw(e))});
};

updateSquares(squares);

//Reset canvas
reset = document.getElementById("reset");

function resetCanvas () {
    // squares = document.querySelectorAll(".square");
    squares.forEach((square) => {
        square.style.backgroundColor = canvasColor;
        square.style.borderColor = "#393B39";
        square.style.boxShadow = "none"; 
    });
};

reset.addEventListener("mousedown", resetCanvas);

//Change number of squares
numOfSquaresSlider.addEventListener("change", 
                                    (e) => {numOfSquaresPerLine = e.target.value;
                                            canvas.textContent = "";
                                            printSquares(numOfSquaresPerLine, canvas);
                                            squares = document.querySelectorAll(".square");
                                            updateSquares(squares)});