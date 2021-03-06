'use strict'

const express = require('express');
// const path = require('path');
const app = express();
const PORT = 3030;

app.set('view engine', 'ejs');

app.get('/', (req, res) => {
  res.render('home', {
    title: 'Home page', 
    header: 'Green Fox Academy',
  });
});

app.get('/products/:id', (req, res) => {
  console.log(req.query);
  console.log(req.query.fox);
  res.render('home', {
    title: 'Product page', 
    header: req.params.id,
    withGoodbye: req.query.withGoodbye === 'true',
  });
});

app.listen(PORT, () => {
  console.log(`The server is up and running on ${PORT}`);
});

