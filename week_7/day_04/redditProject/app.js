'use strict'

const express = require('express');
const app = express();
const PORT = 8084;
const path = require('path');
const cors = require('cors');
const bodyParser = require('body-parser');
const jsonParser = bodyParser.json();

app.use(cors());
app.use('/assets', express.static('assets'));

const mysql = require('mysql');
const conn = mysql.createConnection({
  host: 'localhost',
  user: 'root',
  password: '12345',
  database: 'reddit',
})

conn.connect(function (err) {
  if (err) {
    console.log('Error connecting to Db.');
    return;
  }
  console.log('Connection established.');
})


app.get('/hello', (req, res) => {
  res.send('hello world');
})

app.get('/posts', (req, res) => {
  conn.query('SELECT * FROM posts', (err, result) => {
    if (err) {
      console.log(err.toString());
      res.status(500).send('Database error');
      return;
    }
    res.json({
      posts: result,
    })
  })
})

app.post('/posts', (req, res) => {
  conn.query('SELECT * FROM posts', (err, result) => {
    if (err) {
      console.log(err.toString());
      res.status(500).send('Database error');
      return;
    }
    res.json({
      posts: result,
    })
  })
})


app.put('/posts/<id>/upvote', (res, req) => {

})

app.put('/posts/<id>/downvote', (res, req) => {

})

app.listen(PORT, () => {
  console.log(`The app is up and running ${PORT}`);
})