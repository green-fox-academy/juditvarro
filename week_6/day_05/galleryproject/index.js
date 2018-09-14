'use strict'

const express = require('express');
const path = require('path');
const app = express();
const PORT = 3030;

app.set('view engine', 'ejs');

app.get('/', (req, res) => {
  res.render('home', {
    message: 'pong',
  });
});

app.listen(PORT, () => {
  console.log(`The server is up and running on ${PORT}`);
});
