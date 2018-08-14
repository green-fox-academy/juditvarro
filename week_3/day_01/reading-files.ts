declare function require(path: string): any;

'use strict'
export {};

const fs = require('fs');
const characterEncoding: string = 'utf-8';

function readFromFile(fileName: string): string {
    try {
        return fs.readFileSync(fileName, characterEncoding);
    } catch (error) {
        console.log(error.message);
    }
}

console.log(readFromFile('readthispls.txt'));

                                            // --> ez itt csak azért lett any, hogy a legalsó kódnál 
                                            // a writetoafile elfogadja a resultot, ami szám!
function writeToAFile(fileName: string, data: any): void {
    fs.writeFileSync(fileName, data);
}

// Ha már létező fileba történik, akkor overwrightolni fogja a létező szöveget az újjal! 
// Kivéve, ha appendfile (fs.appendFileSync). Ha nem létező filename, akkor létrehozza, és beleírja.
// ha fs.readFile('....txt', utf-8, function(err, data){ ---> ez aszinkron, tehát nem blokkolja a kódot "fut a háttérben".
//   console.log(data);
//    })

writeToAFile('hello.txt', 'Márk egy Isten \r\nÁrnika egy Istennő');
writeToAFile('hell.txt', 'Hello Coffe');

function countA() {
    const fileContent: string = readFromFile('Hello.txt');
    fileContent.split('\r\n').forEach(e => {
        console.log(e);

    })
}

countA();

function countAPlus() {
    const fileContent: string = readFromFile('Hello.txt');
    fileContent.split('\r\n').forEach(e => { // --> ezzel lesz array
        e.split('').forEach(item => {       // --> itt pedig végigliterálunk az array-n és megkapjuk az elemeit
            console.log(item);
        })

    })
}

countAPlus();
                                
function countCharacter(char: string): number {
    let result: number = 0;
    const fileContent: string = readFromFile('Hello.txt');
    if (fileContent !== null) {
        fileContent.split('\r\n').forEach(e => {
            e.split('').forEach(item => {
                if (item === char) {
                    result++;
                }
            })
        })
        writeToAFile('result.txt', result);
        return result;
    }
}

console.log(countCharacter('n'));