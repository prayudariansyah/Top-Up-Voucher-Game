const { MongoClient } = require('mongodb');

MongoClient.connect('mongodb://localhost:27017', { useUnifiedTopology: true }, (err, client) => {
  if (err) throw err;

  console.log('database berhasil connect');

  const db = client.db('db_latihan');

  db.collection('users').find().toArray((err, result) => {
    if (err) throw err;

    console.log(result);
  });
});
