'use strict';

const canvas = document.querySelector('.main-canvas') as HTMLCanvasElement;
const ctx = canvas.getContext('2d');

// DO NOT TOUCH THE CODE ABOVE THIS LINE
// Draw four different size and color rectangles.
// Avoid code duplication.

function fourSquares(x: number, y: number, t: number, z: number) {
    let colors = `rgb(${Math.floor(Math.random() * 255)}, ${Math.floor(Math.random() * 255)}, ${Math.floor(Math.random() * 255)})`;
    ctx.fillStyle = colors;
    ctx.fillRect(x, y, t, z);
    ctx.fill();
}

for (let j: number = 1; j < 5; j++) {
    let x: number = Math.floor(Math.random() * canvas.width / 2);
    let y: number = Math.floor(Math.random() * canvas.height / 2);
    let t: number = Math.floor(Math.random() * canvas.width / 2);
    let z: number = Math.floor(Math.random() * canvas.height / 2);
    
    
    fourSquares(x, y, t, z);
}


