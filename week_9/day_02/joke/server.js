'use strict'

const express = require('express');
const app = express();
const PORT = 8086;
const path = require('path');
const cors = require('cors');
const fetch = require('node-fetch');
const bodyParser = require('body-parser');

app.use(cors());

app.use(bodyParser.urlencoded({ extended: false }));
app.use(bodyParser.json());

app.use('/assets', express.static('assets'));

app.get('/', (req, res) => {
  res.sendFile(path.join(__dirname, '/assets/index.html'))
})

app.get('/api', (req, res) => {
  let url = 'http://api.icndb.com/jokes/random';

  fetch(url)
  .then((resp) => (resp.json()))
  .then(response => {
    res.json(response);
  });
})

app.listen(PORT, () => {
  console.log(`The server is up and running on ${PORT}.`);
})