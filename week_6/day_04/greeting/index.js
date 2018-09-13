'use strict'

const express = require('express');
const app = express();
const PORT = 3060;

app.set('view engine', 'ejs');

app.get('/', (req, res) => {
  res.render('home', {
    title: 'Home page', 
    header: 'Welcome back, Guest!',
  });
});

app.get('/:id', (req, res) => {
  console.log(req.query);
  res.render('home', {
    title: 'Home page',
    header: `Welcome back, ${req.params.id}!`,
  })
});

app.listen(PORT, () => {
  console.log(`The server is up and running on ${PORT}`);
});

