'use strict';

const canvas = document.querySelector('.main-canvas') as HTMLCanvasElement;
const ctx = canvas.getContext('2d');

// DO NOT TOUCH THE CODE ABOVE THIS LINE
// Reproduce this:
// [https://github.com/green-fox-academy/teaching-materials/blob/master/workshop/drawing/purple-steps-3d/r4.png]


function make3DBox(size: number) {
    let x: number = size;
    let y: number = size;
    for (let i: number = 1; i < 10; i++) {
        ctx.beginPath();
        ctx.fillStyle = '#EE82EE';
        ctx.strokeStyle;
        ctx.strokeRect(x, y, size * i, size * i);
        ctx.fillRect(x, y, size * i, size * i);
        x += size * i;
        y += size * i;
        ctx.fill();
    }
}

make3DBox(6);