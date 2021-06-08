const jwt = require('jsonwebtoken');
require('dotenv').config();

const response = require('../configurations/response');

module.exports = (req, res, next) => {
  const token = req.header('Authorization');
  if (!token) {
    return response.fail(req, res, response.message.unauthorized, 'Unauthorized');
  } else {
    try {
      const decoded = jwt.verify(token, process.env.JWT_SECRET);

      req.user = decoded.user;
      next();
    } catch (err) {
      return response.fail(req, res, response.message.invalid_token, 'Invalid Token');
    }
  }
};
