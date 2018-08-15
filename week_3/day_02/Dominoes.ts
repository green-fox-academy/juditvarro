import { Domino } from "./domino";

function initializeDominoes(): Domino[] {
    let dominoes = [];
    dominoes.push(new Domino(5, 2));
    dominoes.push(new Domino(4, 6));
    dominoes.push(new Domino(1, 5));
    dominoes.push(new Domino(6, 7));
    dominoes.push(new Domino(2, 4));
    dominoes.push(new Domino(7, 1));
    return dominoes;
}

function print(dominoes: Domino[]) {
    dominoes.forEach(function (value) {
        console.log(value);
    });
}

let dominoes = initializeDominoes();
/** You have the list of Dominoes */
/** Order them into one snake where the adjacent dominoes have the same numbers on their adjacent sides */
/** eg: [2, 4], [4, 3], [3, 5] ... */


let snakeArray: any[][] = [];

function dominoLiner(examinedArray: Domino[]) {
    snakeArray.push(examinedArray[0].values);
    for (let counterOut: number = 0; counterOut < examinedArray.length; counterOut++) {
        for (let counterIn: number = 1; counterIn < examinedArray.length; counterIn++) {
            if (snakeArray[counterOut][1] === examinedArray[counterIn].values[0]) {
                snakeArray.push(examinedArray[counterIn].values);
            }
        }
    }
    return snakeArray;
}

console.log(dominoLiner(dominoes));



