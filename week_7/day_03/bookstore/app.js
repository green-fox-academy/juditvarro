'use strict'

const express = require('express');
const app = express();
const PORT = 8082;
const path = require('path');
const cors = require('cors');

app.use(cors());
app.use('/assets', express.static('assets'));

const mysql = require('mysql');

const conn = mysql.createConnection({
  host: 'localhost',
  user: 'root',
  password: '12345',
  database: 'bookstore',
});

conn.connect(function (err) {
  if (err) {
    console.log('Error connecting to Db');
    return;
  }
  console.log('Connection established');
});

conn.query(`SHOW TABLES;`, (err, result) => {
  console.log(result);
})

app.get('/', (req, res) => {
  res.sendFile(path.join(__dirname, 'index.html'));
})

// WITHOUT FILTER:

// app.get('/api/v1/books', (req, res) => {
//   conn.query('SELECT book_name, aut_name, cate_descrip, pub_name, book_price FROM book_mast INNER JOIN author ON book_mast.aut_id = author.aut_id INNER JOIN category ON book_mast.cate_id = category.cate_id INNER JOIN publisher ON book_mast.pub_id = publisher.pub_id;', function (err, result) {
//     if (err) {
//       console.log(err.toString());
//       res.status(500).send('Database error');
//       return;
//     }
//     res.send(result);
//   });
// });

// FILTER TRY:

app.get('/api/v1/books', (req, res) => {
  let basicQuery = 'SELECT book_name, aut_name, cate_descrip, pub_name, book_price FROM book_mast INNER JOIN author ON book_mast.aut_id = author.aut_id INNER JOIN category ON book_mast.cate_id = category.cate_id INNER JOIN publisher ON book_mast.pub_id = publisher.pub_id';

  let titleQuery = req.query.title;
  let authorQuery = req.query.author;
  let cateQuery = req.query.category;
  let publishQuery = req.query.publisher;
  let priceQuery = req.query.price;

  let queryToSend = '';

  if (titleQuery) {
    queryToSend = `${basicQuery} WHERE book_name = '${titleQuery}';`
  }
  else if (authorQuery) {
    queryToSend = `${basicQuery} WHERE aut_name = '${authorQuery}'`
  }
  else if (cateQuery) {
    queryToSend = `${basicQuery} WHERE cate_descrip = '${cateQuery}'`
  }
  else if (publishQuery) {
    queryToSend = `${basicQuery} WHERE pub_name = '${publishQuery}'`
  }
  else if (priceQuery) {
    queryToSend = `${basicQuery} WHERE book_price = '${priceQuery}'`
  } else {
    queryToSend = basicQuery;
  }

  conn.query(queryToSend, function (err, result) {
    if (err) {
      console.log(err.toString());
      res.status(500).send('Database error');
      return;
    }
    res.send(result);
  });
});

app.listen(PORT, () => {
  console.log(`The app is up and running on ${PORT}.`)
})
