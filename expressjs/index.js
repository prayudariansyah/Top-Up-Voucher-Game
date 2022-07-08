const express = require('express');
const router = require('./router');

const app = express();
const port = 3000;

const myLogger = (req, res, next) => {
  console.log('LOGGED');
  next();
};

app.use(myLogger);
app.use(express.urlencoded({ extended: true }));
app.use(express.json());
app.use(router);
app.listen(port, () => {
  console.log(`Example app listening at http://localhost:${port}`);
});
