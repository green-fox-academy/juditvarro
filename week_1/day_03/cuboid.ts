'use strict';

// Write a program that stores 3 sides of a cuboid as variables (floats)
// The program should write the surface area and volume of the cuboid like:
//
// Surface Area: 600
// Volume: 1000

let l: number = 16.25;
let w: number = 7.5;
let h: number = 7.5;

let surfaceArea: number = (2 * ((l * w) + (l * h) + (w * h)));
console.log('Surface Area: ' + surfaceArea);

let volume: number = (l * w * h);
console.log('Volume: ' + volume);
