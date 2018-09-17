const express = require('express');
const app = express();
const PORT = 3060;

app.get('/', (req, res) => {
  res.send('OK!');
})

app.listen(PORT, () => {
  console.log(`App successfully started and running on ${PORT}.`);
  
})