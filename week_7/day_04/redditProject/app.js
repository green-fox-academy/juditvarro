'use strict'

const express = require('express');
const app = express();
const PORT = 8084;
const path = require('path');
const cors = require('cors');
const bodyParser = require('body-parser');

// const jsonParser = bodyParser.json();

app.use(cors());
app.use('/assets', express.static('public/assets'));

app.use(bodyParser.urlencoded({ extended: false }));
app.use(bodyParser.json());

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

app.get('/', (req, res) => {
  res.sendFile(path.join(__dirname, '/public/index.html'))
})

app.get('/submit', (req, res) => {
  res.sendFile(path.join(__dirname, '/public/submit.html'))
})

app.get('/modify', (req, res) => {
  res.sendFile(path.join(__dirname, '/public/modify.html'))
})

app.get('/posts', (req, res) => {
  conn.query('SELECT * FROM posts', (err, result) => {
    if (err) {
      console.log(err.toString());
      res.status(500).send('Database error');
      return;
    }
    res.status(200).json({
      posts: result,
    })
  })
})

app.post('/posts', (req, res) => {

  console.log(req.body);

  let newTitle = req.body.title;
  let newURL = req.body.url;
  let newOwner = req.body.owner;
  let today = new Date(Date.now()).toLocaleDateString();

  if (newTitle && newURL && newOwner) {
    conn.query('INSERT INTO posts (title, url, timestamp, score, owner, vote) VALUES (?, ?, ?, 0, ?, 0);', [newTitle, newURL, today, newOwner], (err, result) => {
      if (err) {
        console.log(err.toString());
        res.status(500).send('Database error');
        return;
      }
      conn.query(`SELECT * FROM posts WHERE id = ${result.insertId};`, (err, resulter) => {
        if (err) {
          console.log(err.toString());
          res.status(500).send('Database error');
          return;
        }
        res.status(200).redirect('/');
      })
    })
  }
})

app.delete('/posts/:id', (req, res) => {
  let idToDelete = req.params.id;

  conn.query(`DELETE FROM posts WHERE id = ${idToDelete};`, (err, result) => {
    if (err) {
      console.log(err.toString());
      res.status(500).json({ error: 'Database error' });
      return;
    } else {
      res.status(200);
      console.log(idToDelete);
    }
  })
})

app.put('/posts/:id', (req, res) => {

  let idToModify = req.params.id;
  let newTitle = req.body.title;
  let newURL = req.body.url;
  let newOwner = req.body.owner;
  let today = new Date(Date.now()).toLocaleDateString();

  conn.query(`UPDATE posts SET title = '${newTitle}', url = '${newURL}', timestamp = '${today}', score = 0, owner = '${newOwner}', vote = 0 WHERE id = ${idToModify};`, (err, result) => {
    if (err) {
      console.log(err.toString());
      res.status(500).send('Database error');
      return;
    }
    // res.redirect('/');
  }
)})

app.put('/posts/:id/upvote', (req, res) => {

  let votedId = req.params.id;

  conn.query(`UPDATE posts SET score = score + 1 WHERE id = ${votedId};`, (err, result) => {
    if (err) {
      console.log(err.toString());
      res.status(500).send('Database error');
      return;
    }
    conn.query(`UPDATE posts SET vote = 1 WHERE id = ${votedId};`, (err2, result2) => {
      if (err2) {
        console.log(err2.toString());
        res.status(500).send('Database error');
        return;
      }
      conn.query(`SELECT * FROM posts WHERE id = ${votedId};`, (err3, result3) => {
        if (err) {
          console.log(err3.toString());
          res.status(500).send('Database error');
          return;
        } else {
          res.status(200).json({
            posts: result3,
          })
        }
      })
    })
  })
})

app.put('/posts/:id/downvote', (req, res) => {

  let votedId = req.params.id;

  conn.query(`UPDATE posts SET score = score - 1 WHERE id = ${votedId};`, (err, result) => {
    if (err) {
      console.log(err.toString());
      res.status(500).send('Database error');
      return;
    }
    conn.query(`UPDATE posts SET vote = -1 WHERE id = ${votedId};`, (err2, result2) => {
      if (err2) {
        console.log(err2.toString());
        res.status(500).send('Database error');
        return;
      }
      conn.query(`SELECT * FROM posts WHERE id = ${votedId};`, (err3, result3) => {
        if (err) {
          console.log(err3.toString());
          res.status(500).send('Database error');
          return;
        } else {
          res.status(200).json({
            posts: result3,
          })
        }
      })
    })
  })
})

app.listen(PORT, () => {
  console.log(`The app is up and running ${PORT}`);
})