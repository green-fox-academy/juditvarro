'use strict';


let lineCount: number = 6;

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

let row: string = '';
let place: string = ' ';
let symbol: string = '%';

for (let i: number = 1; i <= lineCount; i++) {
        for (let j: number = 1; j <= lineCount; j++) {
                if (i == 1 || i == lineCount || j == 1 || j == lineCount) {
                    row += symbol;
                } else {
                    row += place;
                }
        } 
        console.log(row);
        row = '';
}