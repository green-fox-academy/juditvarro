'use strict';

const canvas = document.querySelector('.main-canvas') as HTMLCanvasElement;
const ctx = canvas.getContext('2d');

// DO NOT TOUCH THE CODE ABOVE THIS LINE
// create a line drawing function that takes 2 parameters:
// The x and y coordinates of the line's starting point
// and draws a line from that point to the center of the canvas.
// Fill the canvas with lines from the edges, every 20 px, to the center.

// The basic function:

/*
function lineDrawer(x: number, y: number){
    let colors = `rgb(${Math.floor(Math.random() * 255)}, ${Math.floor(Math.random() * 255)}, ${Math.floor(Math.random() * 255)})`;
    ctx.beginPath();
    ctx.moveTo(x, y);
    ctx.lineTo(canvas.width / 2, canvas.height / 2);
    ctx.strokeStyle = colors;
    ctx.stroke();
}
*/

function lineDrawer(x: number, y: number) {

    let widthLines: number = canvas.width / 20;
    let heightLines: number = canvas.height / 20;

    // Upperlines:
    for (let i: number = 0; i <= widthLines; i++) {
        let colors = `rgb(${Math.floor(Math.random() * 255)}, ${Math.floor(Math.random() * 255)}, ${Math.floor(Math.random() * 255)})`;
        ctx.beginPath();
        ctx.moveTo(x, y);
        ctx.lineTo(canvas.width / 2, canvas.height / 2);
        ctx.strokeStyle = colors;
        ctx.stroke();
        x += 20;
    }

    // Rightlines:
    for (let j: number = 0; j <= heightLines; j++) {
        let colors = `rgb(${Math.floor(Math.random() * 255)}, ${Math.floor(Math.random() * 255)}, ${Math.floor(Math.random() * 255)})`;
        ctx.beginPath();
        ctx.moveTo(x, y);
        ctx.lineTo(canvas.width / 2, canvas.height / 2);
        ctx.strokeStyle = colors;
        ctx.stroke();
        y += 20;
    }

    // Bottomlines:
    for (let k: number = 0; k <= widthLines; k++) {
        let colors = `rgb(${Math.floor(Math.random() * 255)}, ${Math.floor(Math.random() * 255)}, ${Math.floor(Math.random() * 255)})`;
        ctx.beginPath();
        ctx.moveTo(x, y);
        ctx.lineTo(canvas.width / 2, canvas.height / 2);
        ctx.strokeStyle = colors;
        ctx.stroke();
        x = x - 20;
    }   

     // Leftlines:
     for (let l: number = 0; l <= heightLines; l++) {
        let colors = `rgb(${Math.floor(Math.random() * 255)}, ${Math.floor(Math.random() * 255)}, ${Math.floor(Math.random() * 255)})`;
        ctx.beginPath();
        ctx.moveTo(x, y);
        ctx.lineTo(canvas.width / 2, canvas.height / 2);
        ctx.strokeStyle = colors;
        ctx.stroke();
        y -= 20;
    }
} 

lineDrawer(0, 0);