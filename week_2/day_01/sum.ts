'use strict';

export {};

// -  Write a function called `sum` that sum all the numbers until the given parameter
// -  The function should return the result

let parameter: number = 10;


function sum (input: number) {
    let total = 0;
    for (let i: number = 1; i < input; i++) { 
        total = total + i;
    }
    return total;
}

console.log(sum(parameter));