'use strict';

const canvas = document.querySelector('.main-canvas') as HTMLCanvasElement;
const ctx = canvas.getContext('2d');

// DO NOT TOUCH THE CODE ABOVE THIS LINE
// Fill the canvas with a checkerboard pattern.

function checkerBoard(size: number) {

    let squareSize: number = size;
    let row: number;
    let square: number;
    let numberOfSquare: number = canvas.width / squareSize;
    let numberOfRow: number = canvas.height / squareSize;


    for (row = 0; row <= numberOfRow; row++) {
        if (row % 2 == 0) {
            for (square = 0; square <= numberOfSquare; square++) {
                if (square % 2 == 0) {
                    ctx.fillStyle = 'black';
                    ctx.fillRect(square * squareSize, row * squareSize, squareSize, squareSize);
                    ctx.fill;
                } else {
                    ctx.fillStyle = 'white';
                    ctx.fillRect(square * squareSize, row * squareSize, squareSize, squareSize);
                    ctx.fill;
                }
            }
        } else {
            for (square = 0; square <= numberOfSquare; square++) {
                if (square % 2 == 0) {
                    ctx.fillStyle = 'white';
                    ctx.fillRect(square * squareSize, row * squareSize, squareSize, squareSize);
                    ctx.fill;
                } else {
                    ctx.fillStyle = 'black';
                    ctx.fillRect(square * squareSize, row * squareSize, squareSize, squareSize);
                    ctx.fill;
                }
            }
        }
    }
}

checkerBoard(20);