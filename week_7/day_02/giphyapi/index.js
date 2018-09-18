'use strict'

const express = require('express');
const app = express();
const path = require('path');
const fetch = require('node-fetch');
// const bodyParser = require('body-parser');
// const jsonParser = bodyParser.json();
const PORT = 3060;
const apiKey = 'JLJWmt7LsNZM4XXzjgixgjUBGhIfHgvw';

app.use('/assets', express.static('assets'));

app.get('/', (req, res) => {
  res.sendFile(path.join(__dirname, 'index.html'));
})

app.get('/api/giphy/:q', (req, res) => {
  let url = [
    `https://api.giphy.com/v1/gifs/search?api_key=${apiKey}`,
    `&q=${req.params.q}`,
    `&limit=16&offset=0&rating=G&lang=en`,
  ].join('');

  fetch(url)
  .then((resp) => (resp.json()))
  .then(response => {
    res.json(response);
  });
});

app.listen(PORT, () => {
  console.log(`The server is up and running on ${PORT}.`);
})
