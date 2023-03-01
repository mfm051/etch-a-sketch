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

//test of adding squares

let numOfSquaresPerLine = getSquaresPerLine();
let canvas = document.querySelector(".canvas");
printSquares(numOfSquaresPerLine, canvas);

// Change color of square

let defaultColor = "rgb(46, 228, 85)";

canvas.addEventListener("mousedown", (e) => {draw(e)});

function draw(e) {
    if (e.buttons === 1) e.target.style.backgroundColor = defaultColor;
};

let squares = document.querySelectorAll(".square");
squares.forEach((square) => square.addEventListener("mousemove",(e) => draw(e)));
