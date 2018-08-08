'use strict';


const canvas = document.querySelector('.main-canvas') as HTMLCanvasElement;
const ctx = canvas.getContext('2d');

// DO NOT TOUCH THE CODE ABOVE THIS LINE
// create a line drawing function that takes 2 parameters:
// the x and y coordinates of the line's starting point
// and draws a 50 long horizontal line from that point.
// draw 3 lines with that function. Use loop for that.

let colors: string [] = ['orange', 'purple', 'green'];

function lineDrawer (x: number, y: number) {
    ctx.beginPath();
    ctx.moveTo(x, y);
    ctx.lineTo(x + 50, y);
    ctx.stroke();
}

for (let i: number = 1; i < 4; i++) {
    ctx.strokeStyle = colors[i-1];
    let xCoordinate: number = Math.floor(Math.random() * canvas.width);
    let yCoordinate: number = Math.floor(Math.random() * canvas.height);
    lineDrawer(xCoordinate, yCoordinate);
} 