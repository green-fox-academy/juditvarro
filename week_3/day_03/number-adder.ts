// Write a recursive function that takes one parameter: n and adds numbers from 1 to n.

'use strict'
export { };

function numberAdder(maximumNumber: number): number {
  if (maximumNumber > 0) {
    return maximumNumber += numberAdder(maximumNumber - 1);
  } else {
    return 0;
  }
}

console.log(numberAdder(4));