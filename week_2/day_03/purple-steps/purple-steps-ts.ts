'use strict';

const canvas = document.querySelector('.main-canvas') as HTMLCanvasElement;
const ctx = canvas.getContext('2d');

// DO NOT TOUCH THE CODE ABOVE THIS LINE
// Reproduce this:
// [https://github.com/green-fox-academy/teaching-materials/blob/master/workshop/drawing/purple-steps/r3.png]


function makeBox(size: number) {
    let x: number = 15;
    let y: number = 15;
    for (let i: number = 1; i < 20; i++) {
        ctx.beginPath();
        ctx.fillStyle = '#EE82EE';
        ctx.strokeStyle;
        ctx.strokeRect(x * i, y * i, size, size);
        ctx.fillRect(x * i, y * i, size, size);
        ctx.fill();
    }
}

makeBox(15);