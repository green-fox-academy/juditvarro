'use strict'

const test = require('tape');

import { appleGetter } from './apple';

test('It should match', testing => {
  testing.equal(appleGetter.getApple(), 'tök', 'it should match.');
  testing.end();
});
