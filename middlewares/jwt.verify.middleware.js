'use strict';

const jwt = require('jsonwebtoken');

function verify (req, res, next) {
  
  const token = req.headers.authorization;

  jwt.verify(token, process.env.JWT, function(err, decode) {
    if(err) {
      res.sendStatus(401)
    } else {
      next();
    }
  })
};

module.exports = verify;
