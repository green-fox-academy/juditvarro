'use strict';

let lineCount: number = 4;

// Write a program that draws a triangle like this:
//
// *
// **
// ***
// ****
//
// The triangle should have as many lines as lineCount is


for (let j: string = '*'; j.length <= lineCount; j += '*') {
        console.log(j);
    }
   