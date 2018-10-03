'use strict'

const express = require('express');
const app = express();
const PORT = 8088;
const path = require('path');
// const cors = require('cors');
const bodyParser = require('body-parser');

// app.use(cors());
app.use('/assets', express.static('assets'));

app.use(bodyParser.urlencoded({ extended: false }));
app.use(bodyParser.json());

const mysql = require('mysql');
const conn = mysql.createConnection({
  host: 'localhost',
  user: 'root',
  password: '12345',
  database: 'quiz',
})

conn.connect(function (err) {
  if (err) {
    console.log('Error connecting to Db.');
    return;
  }
  console.log('Connection established.');
})

app.get('/', (req, res) => {
  res.sendFile(path.join(__dirname, '/assets/index.html'))
})

app.get('/questioning', (req, res) => {
  res.sendFile(path.join(__dirname, '/assets/questions.html'))
})

app.get('/game', (req, res) => {
  //This endpoint should return a random question with its answers.

  let randomNumber = Math.ceil(Math.random() * 10);

  conn.query(`SELECT question_id, question, questions.id, answer, is_correct FROM answers INNER JOIN questions ON answers.question_id = questions.id WHERE questions.id = ${randomNumber};`, (err, result) => {
    if (err) {
      console.log(err.toString());
      res.status(500).send('Database error');
      return;
    } else {
      console.log(result);

      let array = [];

      result.forEach(element => {
        array.push(element);
      })

      console.log(array);

      res.status(200).json({
        id: result[0].id,
        question: result[0].question,
        answers: array,
      })
    }
  })
})

app.get('/questions', (req, res) => {
  //This endpoint should return all the questions.
  conn.query(`SELECT * FROM questions;`, (err, result) => {
    if (err) {
      console.log(err.toString());
      res.status(500).send('Database error');
      return;
    } else {
      res.status(200).json({
        questions: result,
      })
    }
  })
})

app.post('/questions', (req, res) => {

  let newQuestion = req.body.question;
  let newAnswerOne = req.body.answer1;
  let newAnswerTwo = req.body.answer2;
  let newAnswerThree = req.body.answer3;
  let newAnswerFour = req.body.answer4;
  let isCorrect = 0;

  if (newQuestion) {
    conn.query('INSERT INTO questions (question) VALUES (?);', [newQuestion], (err, result) => {
      if (err) {
        console.log(err.toString());
        res.status(500).send('Database error');
        return;
      }

      conn.query(`INSERT INTO answers (question_id, answer, is_correct) VALUES (${result.insertId}, '${newAnswerOne}', ${isCorrect}), (${result.insertId}, '${newAnswerTwo}', ${isCorrect}), (${result.insertId}, '${newAnswerThree}', ${isCorrect}), (${result.insertId}, '${newAnswerFour}', ${isCorrect});`, (err, resultee) => {
        if (err) {
          console.log(err.toString());
          res.status(500).send('Database error');
          return;
        }

        conn.query(`SELECT * FROM answers WHERE question_id = ${result.insertId};`, (err, resulteree) => {
          if (err) {
            console.log(err.toString());
            res.status(500).send('Database error');
            return;
          }
          console.log(resulteree)
          res.redirect('/');
        })
      })
    })
  }
})

app.delete('/questions/:id', (req, res) => {
  //   If you click on the delete link (which is next to the question)
  // It should delete the question and its answers

  let questionToDelete = req.params.id;

  conn.query(`DELETE FROM questions WHERE id = ${questionToDelete};`, (err, result) => {
    if (err) {
      console.log(err.toString());
      res.status(500).json({ error: 'Database error' });
      return;
    }
    conn.query(`DELETE FROM answers WHERE question_id = ${questionToDelete};`, (err, result) => {
      if (err) {
        console.log(err.toString());
        res.status(500).json({ error: 'Database error' });
        return;
      }
    })
    res.status(200);
    console.log(questionToDelete);
  })
})


app.listen(PORT, () => {
  console.log(`The app is up and running ${PORT}`);
})