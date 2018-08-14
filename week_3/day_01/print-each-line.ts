// Write a program that opens a file called 'my-file.txt', then prints
// each of lines form the file.
// If the program is unable to read the file (for example it does not exists),
// then it should print an error message like: 'Unable to read file: my-file.txt'

'use strict'
export { };

declare function require(path: string): any;
const fs = require('fs');
const characterEncoding: string = 'utf-8';

// Write a new txt-file with lines of text in it.

function makeATxtFile(filename: string, data: any) {
    fs.writeFileSync(filename, data);
}

makeATxtFile('my-file.txt', 'This is a .txt file \r\nfilled with a lot of text')

// Read to the console the content of the new txt-file.

function openerAndPrinter(filenameToRead: string, charCode: string): string {
    return fs.readFileSync(filenameToRead, charCode);
}

console.log(openerAndPrinter('my-file.txt', characterEncoding));

// Read the content but if unable than throw an error. (It could work with the reader-function above.)

function printerWithError(filenameToRead: string, charCode: string) {
    try {
        if (fs.existsSync(filenameToRead)) {
          console.log(fs.readFileSync(filenameToRead, charCode));
        } else {
           throw new Error('Unable to read the file: my-file.txt.')
        }
    }
    catch (error) {
    console.log(error.message);
    }
}

printerWithError('my-fil.txt', characterEncoding);
