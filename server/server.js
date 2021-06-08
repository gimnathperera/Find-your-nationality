const express = require('express');
const app = express();
require('dotenv').config();

const logger = require('./utils/logger');
const routes = require('./routes');
const response = require('./configurations/response');

app.use(express.json({ extended: false }));

app.all('/*', (req, res, next) => {
  res.header('Access-Control-Allow-Origin', '*');
  res.header('Access-Control-Allow-Methods', 'GET, PUT, POST, DELETE, OPTIONS');
  res.header('Access-Control-Allow-Headers', 'Content-type, Accept, Authorization, token');
  if (req.method == 'OPTIONS') {
    res.status(200).end();
  } else {
    let reqData = {
      method: req.method,
      body: req.body,
      query: req.query,
      peram: req.peram
    };
    logger.req(req.url, reqData);
    next();
  }
});

app.use('/', routes);

app.use((req, res) => {
  response.fail(req, res, response.message.invalid_url);
  return;
});

const PORT = process.env.PORT || 4000;

app.listen(PORT, () => logger.info('APIs Started', { PORT: process.env.PORT }));
