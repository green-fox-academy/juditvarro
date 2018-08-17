'use strict';

const canvas = document.querySelector('.main-canvas') as HTMLCanvasElement;
const ctx = canvas.getContext('2d');


let size: number = canvas.width / 3;
let period: number = 4;
let startingX: number = 0;
let startingY: number = 0;
ctx.fillStyle = 'yellow';
ctx.strokeStyle;
ctx.fillRect(startingX, startingY, size * 3, size * 3);
ctx.strokeRect(startingX, startingY, size * 3, size * 3);
ctx.fill;


function bestCarpetEver(startingX: number, startingY: number, size: number, period: number) {
    ctx.strokeStyle;
    ctx.strokeRect(startingX + size, startingY, size, size);
    ctx.strokeRect(startingX, startingY + size, size, size);
    ctx.strokeRect(startingX + size * 2, startingY + size, size, size);
    ctx.strokeRect(startingX + size, startingY + size * 2, size, size);
    ctx.fill;
    if(period > 0){
        bestCarpetEver(startingX + size, startingY, size / 3, period - 1);
        bestCarpetEver(startingX, startingY + size, size / 3, period - 1);
        bestCarpetEver(startingX + size * 2, startingY + size, size / 3, period - 1);
        bestCarpetEver(startingX + size, startingY + size * 2, size / 3, period - 1);
    }
}
bestCarpetEver(startingX, startingY, size, period);


