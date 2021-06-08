const logger = require('../utils/logger');

const messages = {
  invalid_url: {
    status: 500,
    code: 9001,
    message: 'Invalid API URL'
  },

  server_error: {
    status: 500,
    code: 9003,
    message: 'Something went wrong'
  },

  unauthorized: {
    status: 401,
    code: 401,
    message: "You don't have permission"
  },

  invalid_token: {
    status: 500,
    code: 7003,
    message: 'Invalid Token'
  },
  invalid_header: {
    status: 500,
    code: 7004,
    message: 'Invalid Header'
  }
};

const success = (req, res, data = null, friendly_message, count) => {
  const resp = {
    status: true,
    code: 0,
    message: 'Success',
    friendly_message: 'Success',
    data: data,
    recordsTotal: count
  };

  if (friendly_message) {
    resp.friendly_message = friendly_message;
  }

  logger.info(req.url, resp);
  res.status(200);
  res.json(resp);
  return;
};

const fail = (req, res, message, friendly_message, data) => {
  const resp = {
    status: false,
    code: message.code,
    message: message.message,
    friendly_message: message.message,
    data: data || {}
  };

  if (friendly_message) {
    resp.friendly_message = friendly_message;
  }

  logger.error(req.url, resp);
  res.status(message.status);
  res.json(resp);
  return;
};

exports.success = success;
exports.fail = fail;
exports.message = messages;
