'use strict';

export {};

// -  Create a function called `factorio`
//    that returns it's input's factorial

let parameter: number = 5;

function factorio (input: number) {
    let startingNumber = 1;
     for (let i: number = 1; i <= input; i++) {
    startingNumber = startingNumber * i;
    }

    return startingNumber;
}

console.log(factorio(parameter));
