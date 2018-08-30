'use strict'

import { test } from 'tape';
import { anagramChecker } from './anagram';

test('Test1 to check if anagram', (t) => {
  let testString1: string = 'cat';
  let testString2: string = 'dog';

  t.equal(anagramChecker(testString1, testString2), true, 'It should not pass.');
  t.end();
});

test('Test2 to check if anagram', (t) => {
  let testString1: string = 'William Shakespeare';
  let testString2: string = 'I am a weakish speller';

  t.equal(anagramChecker(testString1, testString2), true, 'It should pass.');
  t.end();
});

test('Test3 to check if anagram', (t) => {
  let testString1: string = '';
  let testString2: string = 'I am a weakish speller';

  t.equal(anagramChecker(testString1, testString2), true, 'It should not pass.');
  t.end();
});

test('Test4 to check if anagram', (t) => {
  let testString1: any = 5;
  let testString2: string = 'I am a weakish speller';

  t.throws(() => {
    let result = anagramChecker(testString1, testString2);
}, TypeError);

t.end();
});

test('Test5 to check if anagram', (t) => {
  let testString1: any = 'William Shakespeare';
  let testString2: string = 'I am a weakish speller';

  t.deepEqual(anagramChecker(testString1, testString2), true, 'It should pass')

t.end();
});

test('Test5 to check if anagram', (t) => {
  let testString1: any = 'William Shakespeare';
  let testString2: string = 'I am a weakish speller';

  t.notDeepEqual(anagramChecker(testString1, testString2), true, 'It should not pass')

t.end();
});

test('Test6 to check if anagram', (t) => {
  let testString1: string = 'William Shakespeare';
  let testString2: string = 'I am a weakish speller';

  t.notDeepEqual(anagramChecker(testString1, testString2), true, 'It should not pass')

t.end();
});