import test from 'tape';

declare function require(path: string): any;
const test = require('tape');

test(`one should equal one`, (test) => {
 test.equal(1, 2, `should be equal`);
 test.end();
});