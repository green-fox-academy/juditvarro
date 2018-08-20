// Create a method that decrypts reversed-lines.txt

'use strict'
export { };

declare function require(path: string): any;
const fs = require('fs');
const characterEncoding: string = 'utf-8';

function reverseDecrypter(examinedFile: string): string {
  let examinedContent: string = fs.readFileSync(examinedFile, characterEncoding);

  return examinedContent.split('\r\n').map(el => {return el.split('').reverse().join('') }).join('\r\n');
}

console.log(reverseDecrypter('reversed-lines.txt'))

