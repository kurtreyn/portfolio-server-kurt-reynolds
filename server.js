const express = require('express');
const morgan = require('morgan');
const cors = require('cors');
require('dotenv/config');
const server = process.env.SERVER || 2000;
const app = express();

// const hostname = 'localhost';
const port = 8080;

// app.use(morgan('dev'));
// app.use(express.json());
// app.get('/', (req, res) => res.send('Welcome!'));

app.use((req, res) => {
  res.statusCode = 200;
  res.setHeader('Content-Type', 'text/html');
  res.end('<html><body><h1>This is an Express Server</h1></body></html>');
});

app.listen(port, () => console.log(`Example app listening on port ${port}!`));
