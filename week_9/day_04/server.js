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

// app.post('/questions', (req, res) => {
  // If you fill the form
  // And click on the submit button
  // It should add a new question
  // And update the questions

  // let newQuestion = req.body.question;
  // let newAnswerOne = req.body.answer;
  // let newAnswerTwo = req.body.answer;
  // let newAnswerThree = req.body.answer;
  // let newAnswerFour = req.body.answer;
  // let correct = req.body.is_correct;
  // let questionId = req.body.question_id;

  // if (newQuestion && newAnswerOne && newAnswerTwo && newAnswerThree && newAnswerFour && correct && questionId) {
  //   conn.query('INSERT INTO questions (question) VALUES (?);', [newQuestion], (err, result) => {
  //     if (err) {
  //       console.log(err.toString());
  //       res.status(500).send('Database error');
  //       return;
  //     }

  //     conn.query('INSERT INTO answers (question) VALUES (?);', [newQuestion], (err, result) => {
  //       if (err) {
  //         console.log(err.toString());
  //         res.status(500).send('Database error');
  //         return;
  //       }

  //     conn.query(`SELECT * FROM posts WHERE id = ${result.insertId};`, (err, resulter) => {
  //       if (err) {
  //         console.log(err.toString());
  //         res.status(500).send('Database error');
  //         return;
  //       }
  //       res.status(200).redirect('/');
  //     })
  //   }
    // )
  // }

  app.delete('/questions/:id', (req, res) => {
    //   If you click on the delete link (which is next to the question)
    // It should delete the question and its answers
  })

  app.listen(PORT, () => {
    console.log(`The app is up and running ${PORT}`);
  })