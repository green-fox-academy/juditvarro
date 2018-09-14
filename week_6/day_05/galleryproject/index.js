'use strict'

const express = require('express');
const app = express();
const PORT = 3030;

app.set('view engine', 'ejs');
app.use('/assets', express.static('assets'));

app.get('/', (req, res) => {
  res.render('home', {
    picture: 'https://images.theconversation.com/files/64453/original/js7ptn5n-1415855719.jpg?ixlib=rb-1.1.0&q=45&auto=format&w=926&fit=clip',
  });
});

app.listen(PORT, () => {
  console.log(`The server is up and running on ${PORT}`);
});
