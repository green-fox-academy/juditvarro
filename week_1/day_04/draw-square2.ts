'use strict';

let lineCount: number = 6;

let row: string;
let place: string;

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


for (let i: number = 0; i < lineCount; i++) {
    for (row = '%'; row.length <= lineCount; row += place) {
            if (i == 0 || i == lineCount - 1) {
                place = '%';
            } else {
                if (row.length == lineCount - 1) {
                    place = '%';
                } else {
                    place = ' ';
                }
            }
    }
 console.log(row);
}
