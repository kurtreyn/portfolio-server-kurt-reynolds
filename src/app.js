const express = require('express');
const app = express();
const port = process.env.PORT || 2000;
const mongoose = require('mongoose');
const cors = require('cors');
require('dotenv/config');
const usersRouter = require('./routes/usersRouter');
const postsRouter = require('./routes/postsRouter');

// CONNECT TO ONLINE DATABASE
const connect = mongoose.connect(process.env.DB_CONNECTION, {
  useUnifiedTopology: true,
});
connect.then(
  () => console.log('Connected correctly to MongoDB server'),
  (err) => console.log(err)
);
app.use(
  cors({
    origin: '*',
    methods: ['GET', 'PUT', 'POST', 'DELETE', 'OPTIONS'],
  })
);
app.use(function (req, res, next) {
  res.header('Access-Control-Allow-Origin', '*');
  res.header('Access-Control-Allow-Methods', 'GET, PUT, POST, DELETE');
  res.header(
    'Access-Control-Allow-Headers',
    'Origin, X-Requested-With, Content-Type, Accept, Authorization'
  );
  next();
});

app.use(express.json());
app.use(express.urlencoded({ extended: false }));
app.use('/users', usersRouter);
app.use('/posts', postsRouter);
app.set('view engine', 'pug');

app.listen(port, () => {
  console.log(`We are listening at http://localhost:${port}`);
});
