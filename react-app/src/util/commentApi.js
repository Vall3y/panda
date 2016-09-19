import request from 'superagent';

export function getComments() {
  return new Promise((resolve, reject) => {
    request.get('/api/comment')
      .end((err, res) => {
        if (err) reject(err);

        if (res) resolve(res.body);
      });
  });
}

export function submitComment(comment) {
  return new Promise((resolve, reject) => {
    request.post('/api/comment')
      .set('Content-Type', 'application/x-www-form-urlencoded')
      .send(comment)
      .end((err, res) => {
        if (err) reject(err);

        if (res) resolve(res.body);
      });
  });
}
