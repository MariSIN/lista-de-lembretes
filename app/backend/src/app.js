const express = require('express');
const router = require('./routes');
const cors = require('cors');

const app = express();

app.get('/', (_request, response) => {
  response.send();
});

app.use(cors());

app.use(express.json());


app.use(router);

module.exports = app;
