import express from 'express';

const app = express;

app.get('/', (req, res) => {
  req.send('hello');
});