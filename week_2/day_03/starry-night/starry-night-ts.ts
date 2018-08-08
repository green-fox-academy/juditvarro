'use strict';

const canvas = document.querySelector('.main-canvas') as HTMLCanvasElement;
const ctx = canvas.getContext('2d');

// DO NOT TOUCH THE CODE ABOVE THIS LINE
// Draw the night sky:
//  - The background should be black
//  - The stars should be small squares
//  - The stars should have random positions on the canvas
//  - The stars should have random color (some shade of grey)

function starryNight(starNumber: number, starSize: number) {
    
    let howManyStars: number = starNumber;

    ctx.fillStyle;
    ctx.fillRect(0, 0, canvas.width, canvas.height);
    ctx.fill();

    for (let i: number = 0; i <= howManyStars; i++) {
        let x: number = Math.floor(Math.random() * canvas.width);
        let y: number = Math.floor(Math.random() * canvas.height);

        let basicColor = Math.floor(Math.random() * 211);
        let colorsOfStars = `rgb(${basicColor}, ${basicColor}, ${basicColor})`;
        ctx.fillStyle = colorsOfStars;
        ctx.fillRect(x, y, starSize, starSize);
        ctx.fill();
    }
}

starryNight(200, 3);

