'use strict'

const test = require('tape');

import { SumOfNumbers } from './sum';

test('add all the numbers in the array', testing => {
  let arrayActual: SumOfNumbers = new SumOfNumbers([1, 7, 4, 8]);
  let sumExpected: number = 20;
  testing.equal(arrayActual.sum(), sumExpected, 'it should match.');
  testing.end();
});

