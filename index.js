const express = require('express');
const bodyParser = require('body-parser');
const multer = require('multer');
const dataRepo = require('./lib/data-repo');

const upload = multer(); // for parsing multipart/form-data
const app = express();

// For parsing application/x-www-form-urlencoded
app.use(bodyParser.urlencoded({ extended: true }));

app.get('/', (req, res) => {
  res.send('hello');
});

app.get('/comment', (req, res) => {
  dataRepo.getComments()
    .then(comments => {
      res.setHeader('Content-Type', 'application/json');
      res.end(JSON.stringify(comments));
    })
    .catch(err => {
      handleError(res, err);
    });
});

app.post('/comment', upload.array(), (req, res) => {
  // Grab only relevant params to avoid saving unwanted data
  const comment = {
    email: req.body.email,
    message: req.body.message,
  };

  dataRepo.insertComment(comment)
    .then(id => {
      res.send(id);
    })
    .catch(err => {
      handleError(res, err);
    });
});

app.listen(3000, () => {
  console.log('App is up and running on port 3000');
});

function handleError(res, err) {
  console.log('err:', err);
  res.status(500);
  res.send('There was a problem with the request');
}
