
'use strict';

// Write a program that prints the numbers from 1 to 100.
// But for multiples of three print “Fizz” instead of the number
// and for the multiples of five print “Buzz”.
// For numbers which are multiples of both three and five print “FizzBuzz”.

for (let m: number = 1; m <= 100; m++) 
    if (m % 3 == 0 && m % 5 == 0) { 
        console.log('FizzBuzz'); 
    } else if (m % 3 == 0) {
        console.log('Fizz');
    } else if (m % 5 == 0) {
        console.log('Buzz');
    } else {
        console.log(m);        
    }
