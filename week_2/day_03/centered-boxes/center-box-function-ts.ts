'use strict';

const canvas = document.querySelector('.main-canvas') as HTMLCanvasElement;
const ctx = canvas.getContext('2d');

// DO NOT TOUCH THE CODE ABOVE THIS LINE
// Create a square drawing function that takes 1 parameter:
// The square size
// and draws a square of that size to the center of the canvas.
// Draw 3 squares with that function.
// Avoid code duplication.

function square(t: number) {
    for (let i: number = 1; i < 4; i++) {
        let colors = `rgb(${Math.floor(Math.random() * 255)}, ${Math.floor(Math.random() * 255)}, ${Math.floor(Math.random() * 255)})`;
        ctx.beginPath();
        ctx.fillStyle = colors;
        t = t - 20;
        let x: number = (canvas.width / 2) - (t / 2);
        let y: number = (canvas.height / 2) - (t / 2);
        let v: number = t;
        ctx.fillRect(x, y, t, v);
    }
}

square(220);






