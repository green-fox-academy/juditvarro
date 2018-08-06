'use strict';

export {};

// -  Create a variable named `integers` with the following content: `[4, 5, 6, 7]`
// -  Log each the element of `integers` to the console*
// *hint: use a loop, console.log(integers) won't cut it
// -  bonus for using the correct built in array method

let integers: number[] = [4, 5, 6, 7];

for (let i = 0; i < integers.length; i++) {
    console.log(integers[i]);
}

// Or:

integers.forEach(function (input: number) {
    console.log(input);
})

// Not in separate lines, but still:

console.log(integers.toString());
