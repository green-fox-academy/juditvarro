import { DominoAgain } from "./domino";

function initializeDominoes(): DominoAgain[] {
  let dominoes = [];
  dominoes.push(new DominoAgain(5, 2));
  dominoes.push(new DominoAgain(4, 6));
  dominoes.push(new DominoAgain(1, 5));
  dominoes.push(new DominoAgain(6, 7));
  dominoes.push(new DominoAgain(2, 4));
  dominoes.push(new DominoAgain(7, 1));
  return dominoes;
}


let dominoes = initializeDominoes();

dominoes.sort(function (a: DominoAgain, b: DominoAgain): number {
  return a.compareTo(b);
});

console.log(dominoes);




// function print(inputDominoes: DominoAgain[]) {
//   inputDominoes.forEach(function (value) {
//     console.log(value);
//   });
// }


// /** You have the list of Dominoes */
// /** Order them into one snake where the adjacent dominoes have the same numbers on their adjacent sides */
// /** eg: [2, 4], [4, 3], [3, 5] ... */


// let snakeArray: any[][] = [];

// function dominoLiner(examinedArray: DominoAgain[]): any[][] {
//   snakeArray.push(examinedArray[0].values);
//   for (let counterOut: number = 0; counterOut < examinedArray.length; counterOut++) {
//     for (let counterIn: number = 1; counterIn < examinedArray.length; counterIn++) {
//       if (snakeArray[counterOut][1] === examinedArray[counterIn].values[0]) {
//         snakeArray.push(examinedArray[counterIn].values);
//       }
//     }
//   }
//   return snakeArray;
// }

// for (let domino of dominoes) {
//   domino.printAllFields();
// }