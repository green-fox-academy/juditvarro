'use strict'

const express = require('express');
const app = express();
const PORT = 3060;

const todos = [
  'get up',
  'survive',
  'go back to bed',
];

app.set('view engine', 'ejs');

app.get('/', (req, res) => {
  res.render('home', {
   todoList: todos,
  });
});

app.listen(PORT, () => {
  console.log(`The server is up and running on ${PORT}`);
});

