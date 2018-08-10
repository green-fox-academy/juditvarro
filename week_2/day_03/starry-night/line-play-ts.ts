'use strict';

const canvas = document.querySelector('.main-canvas') as HTMLCanvasElement;
const ctx = canvas.getContext('2d');


// Purple

let lines: number = 10;
let numberOfLines: number = canvas.width / lines;

function lineDrawer(startingX: number, startingY: number, endingX: number, endingY: number){
    ctx.beginPath();
    ctx.strokeStyle = 'purple';
    ctx.moveTo(startingX, startingY);
    ctx.lineTo(endingX, endingY);
    ctx.stroke();
}

for (let i: number = 1; i <= numberOfLines; i++){
    lineDrawer(20 * i, 0, canvas.width, 20 * i);
}

// Green
