'use strict';

const canvas = document.querySelector('.main-canvas') as HTMLCanvasElement;
const ctx = canvas.getContext('2d');

// DO NOT TOUCH THE CODE ABOVE THIS LINE
// Create a square drawing function that takes 2 parameters:
// The x and y coordinates of the square's top left corner
// and draws a 50x50 square from that point.
// Draw 3 squares with that function.
// Avoid code duplication.

function squareDrawer (x: number, y: number) {
    let colors = `rgb(${Math.floor(Math.random() * 255)}, ${Math.floor(Math.random() * 255)}, ${Math.floor(Math.random() * 255)})`;
    ctx.beginPath();
    ctx.fillStyle = colors;
    ctx.fillRect(x, y, 50, 50); 
    ctx.fill();
}

for (let i: number = 1; i < 4; i++) {
    let x: number = Math.floor(Math.random() * (canvas.height - 50));
    let y: number = Math.floor(Math.random() * (canvas.height - 50));
    squareDrawer(x, y);
}

// another way:
/*
for (let i: number = 1; i < 4; i++) {
    let x: number = Math.floor(Math.random() * canvas.width);
    let y: number = Math.floor(Math.random() * canvas.height);
    if (canvas.width - x < 50) {
        x += 50;
    } 
    if (canvas.height - y < 50) {
        y += 50;
    }
    squareDrawer(x, y);
}
*/