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
  const fileContent: string = fs.readFileSync(filename, characterEncoding);
  let lineCounter: number = 0;
  if (fs.existsSync(filename)) {
      fileContent.split('\r\n').forEach(e => {
          lineCounter++;
      })
      return lineCounter;
  } else {
      return 0;
  }
}

console.log(countLines('my-file.txt'));


