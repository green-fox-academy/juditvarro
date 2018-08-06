'use strict';

let lineCount: number = 6;

let body: string = "%    %";
let row: string = "%%%%%%";

// Write a program that draws a square like this:
//
// %%%%%%
// %    %
// %    %
// %    %
// %    %
// %%%%%%
//
// The square should have as many lines as lineCount is



for (let i: number = 0; i <= lineCount -1; i++) {
    if (i === 0 || i === lineCount - 1) {
        console.log(row);
    } else {
        console.log(body);
    }
}
