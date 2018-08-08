'use strict';

const canvas = document.querySelector('.main-canvas') as HTMLCanvasElement;
const ctx = canvas.getContext('2d');

// DO NOT TOUCH THE CODE ABOVE THIS LINE
// Create a function that takes 1 parameter:
// A list of [x, y] points
// and connects them with green lines.
// Connect these to get a box: [[10, 10], [290,  10], [290, 290], [10, 290]]
// Connect these: [[50, 100], [70, 70], [80, 90], [90, 90], [100, 70],
// [120, 100], [85, 130], [50, 100]]

// Task 1 -- Square
/*
let arrayOfDots: number[][] = [
    [10, 10],
    [290, 10],
    [290, 290],
    [10, 290]
];

function connecter(input: number[][]) {

    for (let i: number = 0; i < input.length; i++) {
        if (i == input.length - 1) {
            ctx.beginPath();
            ctx.strokeStyle = 'green';
            ctx.moveTo(input[i][0], input[i][1]);
            ctx.lineTo(input[0][0], input[0][1]);
            ctx.stroke();
        } else {
            ctx.beginPath();
            ctx.strokeStyle = 'green';
            ctx.moveTo(input[i][0], input[i][1]);
            ctx.lineTo(input[i + 1][0], input[i + 1][1]);
            ctx.stroke();
        }
    }
}

connecter(arrayOfDots);
*/

// Task 2 -- A GREEN FOX!

let arrayOfDots: number[][] = [
    [50, 100], [70, 70], [80, 90], [90, 90], [100, 70],
    [120, 100], [85, 130], [50, 100]
];

function connecter(input: number[][]) {

    for (let i: number = 0; i < input.length; i++) {
        if (i == input.length - 1) {
            ctx.beginPath();
            ctx.strokeStyle = 'green';
            ctx.moveTo(input[i][0], input[i][1]);
            ctx.lineTo(input[0][0], input[0][1]);
            ctx.stroke();
        } else {
            ctx.beginPath();
            ctx.strokeStyle = 'green';
            ctx.moveTo(input[i][0], input[i][1]);
            ctx.lineTo(input[i + 1][0], input[i + 1][1]);
            ctx.stroke();
        }
    }
}

connecter(arrayOfDots);
