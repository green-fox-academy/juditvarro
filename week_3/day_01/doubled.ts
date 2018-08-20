// Create a method that decrypts duplicated-chars.txt

'use strict'
export { };

declare function require(path: string): any;
const fs = require('fs');
const characterEncoding: string = 'utf-8';


function decrypter(examinedTextFile: string): string {
  let content: string = fs.readFileSync(examinedTextFile, characterEncoding);

  return content.replace(/[^\w\W\s]|(.)(?=\1)/g, "");
}

console.log(decrypter('duplicated-chars.txt'));



