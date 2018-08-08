'use strict';

const canvas = document.querySelector('.main-canvas') as HTMLCanvasElement;
const ctx = canvas.getContext('2d');

// DO NOT TOUCH THE CODE ABOVE THIS LINE
// Reproduce this:
// [https://github.com/green-fox-academy/teaching-materials/blob/master/workshop/drawing/purple-steps/r3.png]

ctx.beginPath();
ctx.fillStyle = 'green';
ctx.fillRect(50, 50,50, 50);
ctx.fill();
ctx.strokeStyle = 'black';
ctx.fill();