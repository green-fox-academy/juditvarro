'use strict';

const canvas = document.querySelector('.main-canvas') as HTMLCanvasElement;
const ctx = canvas.getContext('2d');

// DO NOT TOUCH THE CODE ABOVE THIS LINE
// Create a square drawing function that takes 2 parameters:
// The square size, and the fill color,
// and draws a square of that size and color to the center of the canvas.
// Create a loop that fills the canvas with rainbow colored squares.

/* first part: 

function square(t: number, color: string) {
    ctx.beginPath();
    ctx.fillStyle = color;
    let x: number = (canvas.width / 2) - (t / 2);
    let y: number = (canvas.height / 2) - (t / 2);
    let v: number = t;
    ctx.fillRect(x, y, t, v);
    }

square(100, 'orange'); */

// Rainbow Squares:

let rainbowColors: string[] = ['pink', 'purple', 'blue', 'green', 'yellow', 'orange', 'red'];
let height: number = canvas.height;
let distance: number = 20;

function rainbowSquare(t: number, color: string) {
    for (let i: number = 0; i <= canvas.height / distance; i++) {
        let size: number = t - (distance * i);
        ctx.fillStyle = rainbowColors[i % rainbowColors.length];
        let x: number = (canvas.width / 2) - (size / 2);
        let y: number = (canvas.height / 2) - (size / 2);
        let v: number = size;
        ctx.fillRect(x, y, size, v);
    }
}

rainbowSquare(height, rainbowColors[0]);

