const MongoClient = require('mongodb').MongoClient;

const config = require('../config');

module.exports = { getComments, insertComment };

function getComments() {
  return new Promise((resolve, reject) => {
    dbConnect()
      .then(db => {
        const collection = db.collection('comments');

        // Get all documents in collection
        collection.find({})
          .toArray((err, docs) => {
            if (err) throw err;

            resolve(docs);

            db.close();
          });
      })
      .catch(reject);
  });
}

function insertComment(comment) {
  return new Promise((resolve, reject) => {
    dbConnect()
      .then(db => {
        const collection = db.collection('comments');

        collection.insert(comment, (err, result) => {
          if (err) throw err;

          if (!result.result.ok) throw new Error('Error inserting');

          resolve(result.ops[0]._id);

          db.close();
        });
      })
      .catch(reject);
  });
}

function dbConnect() {
  return new Promise((resolve, reject) => {
    MongoClient.connect(config.dbUrl, (err, db) => {
      if (err) reject(err);

      resolve(db);
    });
  });
}
