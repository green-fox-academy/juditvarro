'use strict';
export {};

const students: any[] = [
  {name: 'Theodor', age: 3, candies: 2},
  {name: 'Paul', age: 9.5, candies: 2},
  {name: 'Mark', age: 12, candies: 5},
  {name: 'Peter', age: 7, candies: 3},
  {name: 'Olaf', age: 12, candies: 7},
  {name: 'George', age: 10, candies: 1}
];

// create a function that takes a list of students and logs: 
// - how many candies are owned by students
// create a function that takes a list of students and logs:
// - Sum of the age of people who have lass than 5 candies

// Number of candies:


function candiesPerStudents (input: object []) {
    let sum: number = 0;
    for (let i = 0; i < input.length; i++) {
      sum = sum + input[i]["candies"];
   }
  return sum;
}
console.log(candiesPerStudents(students)); 

// Sum age of the voracious ones:

function ageSum (input: object []) {
    let sum2: number = 0;
    for (let j = 0; j < input.length; j++) {
        if(input[j]["candies"] < 5) {
            sum2 = sum2 + input[j]["age"]
        }
    }
    return sum2;
}

console.log(ageSum(students));