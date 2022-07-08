const { MongoClient } = require('mongodb');

const connection = 'mongodb://localhost:27017/db_latihan';

const db = new MongoClient(connection, {
  useUnifiedTopology: true,
});

(async () => {
  try {
    await db.connect();
  } catch (err) {
    console.log(err);
  }
})();

module.exports = db;
