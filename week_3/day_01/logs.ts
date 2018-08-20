// Read all data from 'log.txt'.
// Each line represents a log message from a web server
// Write a function that returns an array with the unique IP adresses.
// Write a function that returns the GET / POST request ratio.

'use strict'
export { };

declare function require(path: string): any;
const fs = require('fs');
const characterEncoding: string = 'utf-8';

let oldArrayContent: string = fs.readFileSync('log.txt', characterEncoding);

// Part One:

function returnUniqueIps(content: string): any[] {
  let oldArray: any[] = content.split('\r\n');
  let newArray: any[] = [];
  let newArrayWithIps: any[] = [];
  let newArrayWithUniqueIps: any[] = [];

  oldArray.forEach(element => {
    newArray.push(element.split('  '));
  });
  newArray.forEach(element2 => {
    newArrayWithIps.push(element2[2]);
  });
  newArrayWithIps.forEach(element3 => {
    if (newArrayWithUniqueIps.indexOf(element3) == -1) {
      newArrayWithUniqueIps.push(element3)
    }
  });
  return newArrayWithUniqueIps;
}
console.log(returnUniqueIps(oldArrayContent));

// Part Two:

function requestRatio(examinedContent: string): any[] {
  let originalArray = examinedContent.split('\r\n');
  let newArrayFull: any[] = [];
  let newArrayWithRatio: any[] = [];

  originalArray.forEach(item => {
    newArrayFull.push(item.split(' '))
  })

  newArrayFull.forEach(item2 => {
    newArrayWithRatio.push(item2[11]);
  });
  return newArrayWithRatio;
}
console.log(requestRatio(oldArrayContent));



