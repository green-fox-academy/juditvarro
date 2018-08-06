'use strict';

let lineCount: number = 7;

let space: string = ' ';
let star: string = '*';

// Write a program that draws a
// diamond like this:
//
//    *
//   ***
//  *****
// *******
//  *****
//   ***
//    *
//
// The diamond should have as many lines as lineCount is


for (let i: number = 0; i < lineCount / 2; i++) {
    for (let j: number = i; j < lineCount / 2; j++) {
        space += ' ';
    }
    console.log(space + star);
    star += '**';
    space = ' ';
}
/*
for (let k: number = 5; k <= lineCount; k++) {
    for (let l: number = k; l < lineCount - 1; l++) {
        space += '  ';
        star = "*****"    
    }
    console.log(space + star);


}*/
for (let k: number = 5; k <= lineCount; k++) {
    for (let l: number = 5; l <= k; l++) {
        if (k == 5) {
            space += '  ';
            star = "*****"
        }
        else if (l == 6) {
            space += ' ';
            star = '***'
        }
        else if (l == 7) {
            star = '*'
        }
    }
    console.log(space + star);


}