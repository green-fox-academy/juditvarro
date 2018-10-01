'use strict';

const test = require('tape');
const request = require('supertest');
const app = require('../routes');

// test('groot endpoint', (t) => {
//   t.equals(2, 1 + 1);
//   t.end();
// });

test('groot endpoint', (t) => {
  request(app)
    .get('/groot')
    .expect('Content-Type', /json/)
    .expect(200)
    .expect({})
    .end((err, res) => {
      if (err) {
        t.err(err);
      } else {
        t.end()
      }
    }
    )
})

module.exports = app;