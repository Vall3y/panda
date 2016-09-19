const express = require('express');
const bodyParser = require('body-parser');
const multer = require('multer');
const dataRepo = require('./lib/data-repo');

const upload = multer(); // for parsing multipart/form-data
const app = express();

app.use(bodyParser.urlencoded({ extended: true }));
app.use(express.static('public'));

app.get('/api/comment', (req, res) => {
  dataRepo.getComments()
    .then(comments => {
      res.setHeader('Content-Type', 'application/json');
      res.end(JSON.stringify(comments));
    })
    .catch(err => {
      handleError(res, err);
    });
});

app.post('/api/comment', upload.array(), (req, res) => {
  // Grab only relevant params to avoid saving unwanted data
  const comment = {
    email: req.body.email,
    message: req.body.message,
  };

  // Validation
  if (!comment.email || !comment.message) {
    res.status(400);
    res.send('Please provide both email and message');
    return;
  }

  dataRepo.insertComment(comment)
    .then(commentId => res.send(commentId))
    .catch(err => {
      handleError(res, err);
    });
});

function handleError(res, err) {
  console.log('err:', err);
  res.status(500);
  res.send('There was a problem with the request');
}

app.listen(3000, () => {
  console.log('App is up and running on port 3000');
});
