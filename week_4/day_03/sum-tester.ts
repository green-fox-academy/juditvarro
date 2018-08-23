'use strict'

const test = require('tape');

import { SumOfNumbers, arrayActual, arrayWithNoElement, arrayWithOneElement, arrayWithNull, arrayWithString } 
from './sum';

test('add all the numbers in the array', testing => {
  testing.equal(arrayActual.sum(), 20, 'it should match.');
  testing.end();
});

test('addmethod when there is no number in the array', testing => {
  testing.equal(arrayWithNoElement.sum(), 0, 'it should match.');
  testing.end();
});

test('addmethod when there is one number in the array', testing => {
  testing.equal(arrayWithOneElement.sum(), 4, 'it should match.');
  testing.end();
});

test('addmethod when there is a null in the array', testing => {
  testing.equal(arrayWithNull.sum(), 0, 'it should match.');
  testing.end();
});

test('addmethod when there are strings in the array', testing => {
  testing.equal(arrayWithString.sum(), '0dontworry', 'it should match.');
  testing.end();
});