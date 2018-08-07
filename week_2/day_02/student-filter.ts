'use strict';

const students: any[] = [
  { name: 'Mark', age: 9.5, candies: 2 },
  { name: 'Paul', age: 12, candies: 5 },
  { name: 'Clark', age: 7, candies: 3 },
  { name: 'Pierce', age: 12, candies: 7 },
  { name: 'Sean', age: 10, candies: 1 }
];

// create a function that takes a list of students and logs:
// - Who has got more candies than 4 candies
// create a function that takes a list of students and logs: 
//  - how many candies they have on average

// More than 4 candies:

function studentList (input: object []) {
    for (let i = 0; i < input.length; i++) {
        if (input[i]['candies'] > 4) {
            console.log(input[i]['name']);
        }
    }    
}

studentList(students);

// Average candies:

function averageCandies (input: object []) {
    let totalNumber: number = 0;
    for (let j = 0; j < input.length; j++) {
        totalNumber  = totalNumber + input[j]['candies'];
    } 
    return totalNumber / input.length;
}

console.log(averageCandies(students));
