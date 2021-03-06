'use strict';

// Write a function that checks if the array contains "7"
// if it contains return "Hoorray" otherwise return "Noooooo"

const numbers: number[] = [1, 2, 3, 4, 5, 6, 8];

function containsSeven(input: number[]) {
    if (input.indexOf(7) == -1) {
        return "Noooooo";
    } else {
        return "Hoorray";
    }
}
console.log(containsSeven(numbers));

// The output should be: "Noooooo"
// Do this again with a different solution using different list functions!

function containsSevenToo(input: number[]) {
    if (input.some(function (elem: number) {
        return elem == 7;
    })) {
        return 'Hoorray';
    } else {
        return 'Noooooo';
    }
}
console.log(containsSevenToo(numbers));

export = containsSeven;