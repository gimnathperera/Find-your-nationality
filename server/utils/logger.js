const logger = require('npmlog');

const log = {
  debug: (action, data) => {
    logger.warn(`${new Date()} - ${action} - ${JSON.stringify(data)}`);
  },
  info: (action, data) => {
    logger.info(`${new Date()} - ${action} - ${JSON.stringify(data)}`);
  },
  error: (action, data) => {
    logger.error(`${new Date()} - ${action} - ${JSON.stringify(data)}`);
  },
  req: (action, data) => {
    logger.http(`${new Date()} - ${action} - ${JSON.stringify(data)}`);
  }
};

module.exports = log;
