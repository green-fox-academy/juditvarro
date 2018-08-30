import { test } from 'tape';
import { indexFinder } from './index';

test('test1', (t) => {
  let testArray: number[] = [1, 3, 5, 7, 9];
  let testIndexOfNum: number = 2;

  t.equal(indexFinder(testArray, testIndexOfNum), 1, 'It should not pass.');
  t.end();
});

test('test2', (t) => {
  let testArray: number[] = [1, 3, 5, 7, 9];
  let testIndexOfNum: number = 5;

  t.equal(indexFinder(testArray, testIndexOfNum), 2, 'It should pass.');
  t.end();
});

test('test3', (t) => {
  let testArray = [];
  let testIndexOfNum: number = -1;

  t.equal(indexFinder(testArray, testIndexOfNum), 1, 'It should not pass.');
  t.end();

});

test('test4', (t) => {
  let testArray: number[] = null;
  let testIndexOfNum: number = 5;

  t.throws(() => {
   indexFinder(testArray, testIndexOfNum);
}, TypeError);

t.end();

});

test('test5', (t) => {
  let testArray: number[] = [1, 3, 5, 7, 9];
  let testIndexOfNum: number = null;

  t.equal(indexFinder(testArray, testIndexOfNum), -1, 'It should pass.');
  t.end();
});

test('test6', (t) => {
  let testArray = [];
  let testIndexOfNum: number = -1;

  t.equal(indexFinder(testArray, testIndexOfNum), -1, 'It should pass.');
  t.end();

});