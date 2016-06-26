const express = require('express');
const app = express();

app.get('/', (req, res) => {
  res.send('hello');
});

app.get('/comment', (req, res) => {
  res.send('hello');
});

app.post('/comment', (req, res) => {
  res.send('hello');
});

app.listen(3000, function () {
  console.log('App is up and running on port 3000');
});
