// Write a function that takes a filename as string,
// then returns the number of lines the file contains.
// It should return zero if it can't open the file, and
// should not raise any error.

'use strict'
export { };

declare function require(path: string): any;
const fs = require('fs');
const characterEncoding: string = 'utf-8';


function countLines(filename: string): number {
    let lineCounter: number = 0;
    let fileContent: string = '';
    try {
        fileContent = fs.readFileSync(filename, characterEncoding);
    } catch (error) {
        return 0
    }
    let fileContentArray = fileContent.split('\r\n')
    console.log(fileContentArray.length);
}
countLines('my-file.txt');



