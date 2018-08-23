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

export let arrayActual: SumOfNumbers = new SumOfNumbers([1, 7, 4, 8]);
export let arrayWithNoElement: SumOfNumbers = new SumOfNumbers([]);
export let arrayWithOneElement: SumOfNumbers = new SumOfNumbers([4]);
export let arrayWithNull: SumOfNumbers = new SumOfNumbers([null]);
export let arrayWithString: SumOfNumbers = new SumOfNumbers(['dont', 'worry']);
