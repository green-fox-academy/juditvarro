'use strict';

let lineCount: number = 4;
let spaceCount: number = lineCount - 2;
let starCount: number = lineCount + 2;
let space: string = ' ';
let star: string = '*';

// Write a program that draws a
// pyramid like this:
//
//    *
//   ***
//  *****
// *******
//
// The pyramid should have as many lines as lineCount is

for (let i: number = 0; i < lineCount; i++) {
    for (let j: number = i; j < lineCount; j++) {
        space += ' ';
    }
    console.log(space + star);
    star += '**';
    space = ' ';
  }