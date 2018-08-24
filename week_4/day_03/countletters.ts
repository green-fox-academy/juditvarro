'use strict'

// export function dictionaryMaker(wordToUse: string) {

//   let sortedString: string = wordToUse.split('').sort().join('');

// }


let string = 'barbanegra';
let sortedTryString = string.split('').sort().join('');

let slicedString = sortedTryString.slice(0, sortedTryString.lastIndexOf(sortedTryString.charAt(0)) + 1);



let testObject = [ {

}];

testObject.push([slicedString.charAt(0) : slicedString.lastIndexOf(slicedString.charAt(0) + 1)])

console.log(slicedString);
