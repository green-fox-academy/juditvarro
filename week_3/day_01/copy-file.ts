// Write a function that copies a file to an other
// It should take the filenames as parameters
// It should return a boolean that shows if the copy was successful

'use strict'
export { };

declare function require(path: string): any;
const fs = require('fs');
const characterEncoding: string = 'utf-8';

function writeNewFiles(name: string, data: string) {
    fs.writeFileSync(name, data);
}
writeNewFiles('NewFileToCopy.txt', 'this should be copied.');
writeNewFiles('NewFileToCopyTo.txt', 'it can be empty.');

function copier(copiesFrom: string, copiesTo: string): boolean {
    try {
        let content: string = fs.readFileSync(copiesFrom, characterEncoding);
        fs.writeFileSync(copiesTo, content);
    } catch (error) {
        return false;
    }
    return true;
}

console.log(copier('NewFileToCopy.txt', 'NewFileToCopyTo.txt'));