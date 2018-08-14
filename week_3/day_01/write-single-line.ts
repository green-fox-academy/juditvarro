// Open a file called 'my-file.txt'
// Write your name in it as a single line
// If the program is unable to write the file,
// then it should print an error message like: 'Unable to write file: my-file.txt'

'use strict'
export { };

declare function require(path: string): any;
const fs = require('fs');
const characterEncoding: string = 'utf-8';

function makeNewFile(filename: string, data: string) {
    try {
        if (fs.existsSync(filename)){
            fs.writeFileSync(filename, data);
        } else {
            throw new Error('Unable to write file: my-file.txt');
        }
    } catch (error) {
        console.log(error.message);
    }
}

makeNewFile('my-file.txt', 'Judit Varro');

