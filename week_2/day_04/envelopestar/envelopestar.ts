'use strict';

const canvas = document.querySelector('.main-canvas') as HTMLCanvasElement;
const ctx = canvas.getContext('2d');


function envelopeDrawer(startingX: number, startingY: number, endingX: number, endingY: number) {
    let numberOfLines: number = 10;
    let gap: number = canvas.width / 2 / numberOfLines;
    ctx.beginPath();
    ctx.strokeStyle = 'lightgreen';
    ctx.moveTo(startingX, startingY);
    ctx.lineTo(endingX, endingY);
    ctx.stroke();
}

for (let i: number = 0; i < 20; i++) {
    envelopeDrawer(10 + 10 * i, canvas.height / 2 - (i * 0.5), canvas.width / 2, canvas.height / 2 - 10 - (i * 10));
}

for (let j: number = 0; j < 20; j++) {
    envelopeDrawer(canvas.width / 2, 10 + 10 * j, canvas.width / 2 + 10 + (j * 10), 
    canvas.height / 2 - 10 + (j * 0.5));
}

for (let k: number = 0; k < 20; k++) {
    envelopeDrawer(canvas.width - 10 - (10 * (k + 1)), canvas.height /2, canvas.width / 2, canvas.height / 2 + (10 * k))
}

for (let l: number = 0; l < 20; l++) {
    envelopeDrawer(canvas.width / 2, canvas.height - (10 * (l + 1)), canvas.width / 2 - 10 - (10 * l), canvas.height / 2);
}
