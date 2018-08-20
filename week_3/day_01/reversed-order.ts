// Create a method that decrypts reversed-order.txt

'use strict'
export { };

declare function require(path: string): any;
const fs = require('fs');
const characterEncoding: string = 'utf-8';

function reversedLinesDecrypter(examinedFile: string): string {
  let content: string = fs.readFileSync(examinedFile, characterEncoding);

  return content.split('\r\n').reverse().join('\r\n');
}

console.log(reversedLinesDecrypter('reversed-order.txt'));
