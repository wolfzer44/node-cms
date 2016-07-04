'use strict';

const express = require('express');
const app = express();
const bodyParser = require('body-parser')
const routes = require('./routes/index');
const middlewares = require('./middlewares/index');

app.use(bodyParser.urlencoded({ extended: false }))
app.use(bodyParser.json())

app.use('/api/v1/', middlewares.verifyToken, routes.login);

app.listen(3000, function() {
  console.log('server running in port: 3000');
})
