// Write a recursive function that takes one parameter: n and counts down from n.

function subtraction(maximumNumber: number) {
  if (maximumNumber <= 0) {
    throw new Error('Please provide a positive integer.')
  } else {
    if (maximumNumber > 0) {
      console.log(maximumNumber);
      subtraction(maximumNumber - 1);
    } else {
      console.log(maximumNumber);
    }
  }
}

subtraction(10);
