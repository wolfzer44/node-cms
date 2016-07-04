'use strict';

const express = require('express');
const router = express.Router();

router.post('/login', function(req, res) {
  res.json({
    'message': 'Olá Marilene'
  })
});

module.exports = router;
