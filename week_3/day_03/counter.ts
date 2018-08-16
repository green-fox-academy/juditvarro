// Write a recursive function that takes one parameter: n and counts down from n.

'use strict'
export { };

function subtraction(maximumNumber: number): number {
  if (maximumNumber < 0) {
    throw new Error('Please provide a positive integer.')
  } else {
    if (maximumNumber == 0) {
      console.log(maximumNumber);
    } else {
      console.log(maximumNumber);
      return subtraction(maximumNumber - 1);
    }
  }
}

subtraction(10);
