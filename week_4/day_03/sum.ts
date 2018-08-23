'use strict'

export class SumOfNumbers {
  array: number[];

  constructor(array: number[]){
    this.array = array;
  }

  sum(): number {
    let total: number = 0;
    for (let item: number = 0; item < this.array.length; item++) {
      total += this.array[item];
    }
    return total;
  }
}

let newArray: SumOfNumbers = new SumOfNumbers([1, 7, 4, 8]);

console.log(newArray.sum());
