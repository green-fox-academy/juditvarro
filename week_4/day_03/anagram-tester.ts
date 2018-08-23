'use strict'

const test = require('tape');
import { anagramChecker } from './anagram';

test('To check if two strings are anagrams', testing => {
  testing.equal(anagramChecker('William Shakespeare', 'I am a weakish speller'), true, 'It works!');
  testing.end();
});

