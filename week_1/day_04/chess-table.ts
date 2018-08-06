'use strict';

// Create a program that draws a chess table like this
//
// % % % %
//  % % % %
// % % % %
//  % % % %
// % % % %
//  % % % %
// % % % %
//  % % % %
//

let lineCount: number = 8;
let row: string = "% % % % "
let rowEven: string = " % % % %"

for (let i: number = 1; i <= lineCount; i++) {
    if (i % 2 == 0) {
        console.log(rowEven);
    } else {
        console.log(row);
        }
    }   
