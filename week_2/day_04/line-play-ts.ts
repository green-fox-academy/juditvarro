'use strict';

const canvas = document.querySelector('.main-canvas') as HTMLCanvasElement;
const ctx = canvas.getContext('2d');

function lineDrawerComplex(lines: number) {
    // Purple

    let purpleLines: number = lines;
    let numberOfPurpleLines: number = canvas.width / purpleLines;

    function lineDrawer(startingX: number, startingY: number, endingX: number, endingY: number) {
        ctx.beginPath();

        ctx.moveTo(startingX, startingY);
        ctx.lineTo(endingX, endingY);
        ctx.stroke();
    }

    for (let i: number = 1; i <= numberOfPurpleLines; i++) {
        ctx.strokeStyle = 'purple';
        lineDrawer(20 * i, 0, canvas.width, 20 * i);
    }

    // Green


    let greenLines: number = lines;
    let numberOfGreenLines: number = canvas.width / greenLines;

    for (let i: number = 1; i <= numberOfGreenLines; i++) {
        ctx.strokeStyle = 'green';
        lineDrawer(0, 20 * i, 20 * i, canvas.height);
    }
}

lineDrawerComplex(10);
