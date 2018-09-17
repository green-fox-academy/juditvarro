'use strict'

const express = require('express');
const app = express();

const bodyParser = require('body-parser');
const jsonParser = bodyParser.json();

const path = require('path');
const PORT = 8080;

app.use('/assets', express.static('assets'));

app.get('/', (req, res) => {
  res.sendFile(path.join(__dirname, 'index.html'));
})

app.get('/doubling', (req, res) => {
  if (req.query.input) {
    res.json({
      "received": req.query.input,
      "result": req.query.input * 2,
    })
  } else {
    res.json({
      error: "Please provide an input!"
    })
  }
})

app.get('/greeter', (req, res) => {

  if (req.query.name && req.query.title) {
    res.json({
      "welcome_message": `Oh, hi there ${req.query.name}, my dear ${req.query.title}!`
    })
  } else if (!req.query.name) {
    res.json({
      error: "Please provide a name!"
    })
  } else if (!req.query.title) {
    res.json({
      error: "Please provide a title!"
    })
  }
})

app.get('/appenda/:word', (req, res) => {
  if (req.params.word) {
    res.json({
      "appended": `${req.params.word}a`
    })
  }
})

function sumOfNum(numUntilSum) {
  if (numUntilSum > 0) {
    return numUntilSum += sumOfNum(numUntilSum - 1);
  } else {
    return 0;
  }
}

function factOfNum(numUntilFact) {
  if (numUntilFact === 1) {
    return 1;
  } else {
    return numUntilFact * (factOfNum(numUntilFact - 1))
  }
}

app.post('/dountil/:action', jsonParser, (req, res) => {
  if (req.params.action === "sum") {
    res.json({
      "result": sumOfNum(req.body.until),
    })
  }
  if (req.params.action === "factor") {
    res.json({
      "result": factOfNum(req.body.until),
    })
  }
})

app.post('/arrays', jsonParser, (req, res) => {
  if (req.body.what === "sum") {
    let result = 0;
    req.body.numbers.forEach(element => {
      result += element;
    })
    res.json({
      "result": `${result}`,
    })
  }
  if (req.body.what === "multiply") {
    let result = req.body.numbers[0];
    for (let i = 0; i < req.body.numbers.length; i++) {
      result = result * req.body.numbers[i];
    }
    res.json({
      "result": `${result}`,
    })
  }
  if (req.body.what === "double") {
      req.body.numbers = req.body.numbers.map(element => {
      return element * 2;
    })
    res.json({
      "result": `${req.body.numbers}`,
    })
  }
})

app.listen(PORT, () => {
  console.log(`App successfully started and running on ${PORT}.`);
})