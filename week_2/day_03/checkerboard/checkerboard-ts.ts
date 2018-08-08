'use strict';

const canvas = document.querySelector('.main-canvas') as HTMLCanvasElement;
const ctx = canvas.getContext('2d');

// DO NOT TOUCH THE CODE ABOVE THIS LINE
// Fill the canvas with a checkerboard pattern.

function makeLine(size: number, y: number, t: number, v: number) {
    for (let i: number = 1; i < 20; i++) {
        ctx.beginPath();
        if (i % 2 == 0) {
            ctx.fillStyle = 'black';
        } else {
            ctx.fillStyle = 'white';
        }
        ctx.fillRect(x * i, y, t, v);
        ctx.fill();
    }
}

makeLine(0, 0, 20, 20);





        /*
        ctx.beginPath();
        ctx.fillStyle = '#EE82EE';
        ctx.strokeStyle;
        ctx.strokeRect(x * i, y * i, size, size);
        ctx.fillRect(x * i, y * i, size, size);
        ctx.fill();
    }
}  makeBox(15);*/

