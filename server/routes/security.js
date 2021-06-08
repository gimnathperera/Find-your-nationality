const jwt = require('jsonwebtoken');
require('dotenv').config();

const response = require('../configurations/response');
const { JWT } = require('../configurations/constant');

const SecurityRoute = {
  //@route GET /token
  //@desc  get a token
  //@access Public
  getToken: (req, res) => {
    try {
      const payload = {
        user: {
          id: JWT.PAYLOAD.ID,
          email: JWT.PAYLOAD.EMAIL
        }
      };

      jwt.sign(payload, process.env.JWT_SECRET, { expiresIn: JWT.EXPIRE_TIME }, (err, token) => {
        if (err) throw err;
        return response.success(req, res, token, 'Token received successfully');
      });
    } catch (err) {
      return response.fail(req, res, response.message.server_error, null, err);
    }
  }
};
module.exports = SecurityRoute;
