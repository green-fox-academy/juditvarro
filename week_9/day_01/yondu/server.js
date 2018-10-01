'use strict'

const express = require('express');
const app = express();
const PORT = 3000;
const path = require('path');
const bodyParser = require('body-parser');
const jsonParser = bodyParser.json();

app.use(bodyParser.urlencoded({ extended: false }));
app.use(bodyParser.json());

app.get('/hello', (req, res) => {
  res.send("Hello");
})

// Create a GET /yondu endpoint
// That receives a query parameter: "distance=100.0&time=10.0"
// (Speed = Distance / Time)
// And responds with the calculated speed of the arrow:
// {
//   "distance": 100.0,
//   "time": 10.0,
//   "speed": 10.0
// }
// Try time with zero! Look what happens!

// Write a test where you check:

// With giving a parameter the status is ok,
// and the given respone is the same as expected
// That without giving a parameter the status is not ok,
// and the given error respone is the same as expected

// http://localhost:3000/yondu/?distance=50&time=0

app.get('/yondu/', (req, res) => {

  let distanceOfQuery = req.query.distance;
  let timeOfQuery = req.query.time;
  const speedOfQuery = () => {
    return distanceOfQuery / timeOfQuery;
  }

  if (req.query.distance && req.query.time) {
    res.status(200).json({
      distance : req.query.distance,
      time : req.query.time,
      speed : speedOfQuery(),
    })
  } else {
    console.log("it doesnt work");
    
  }
})

app.listen(PORT, () => {
  console.log(`Server is up and running on ${PORT}.`);
})