'use strict';

// Write a function that joins two array by matching one girl with one boy in a new array
// Exepected output: ["Eve", "Joe", "Ashley", "Fred"...]

let girls: string[] = ['Eve', 'Ashley', 'Claire', 'Kat', 'Jane'];
let boys: string[] = ['Joe', 'Fred', 'Tom', 'Todd', 'Neef', 'Jeff'];

function makingMatches (input1: string[], input2: string[]) {
   let numberOfElements: number;
   let commonList: string[] = [];
        if
        (input1.length > input2.length) {
            numberOfElements = input2.length;
        } else if 
        (input2.length > input1.length) {
            numberOfElements = input1.length;
        } else {
                numberOfElements = input1.length;
            }
    for (let i = 0; i < numberOfElements; i++) {
        commonList.push(input1[i]);
        commonList.push(input2[i]);
    }
    return commonList;
}

console.log(makingMatches(girls, boys));

export = makingMatches;

