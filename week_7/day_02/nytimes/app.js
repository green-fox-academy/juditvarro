'use strict'

const express = require('express');
const app = express();
const path = require('path');
const fetch = require('node-fetch');
const apiKey = '31df243d804c48e2b9dfe373c85f7f52';

const PORT = 8082;

app.use('/assets', express.static('assets'));

app.get('/', (req, res) => {
  res.sendFile(path.join(__dirname, 'index.html'));
})

app.get('/api/v1/nytimes/:q', (req, res) => {
  let url = [
    `https://api.nytimes.com/svc/search/v2/articlesearch.json`, 
    `?api-key=${apiKey}`, 
    `&q=${req.params.q}`
  ].join('');

  fetch(url)
  .then((resp) => (resp.json()))
  .then(response => {
    res.json(response);
  });
});

app.listen(PORT, () => {
  console.log(`The app is up and running on ${PORT}.`);
})

