const winston = require('winston');
const config = require('../config/config');

const logger = winston.createLogger({
  level: config.logLevel,
  format: winston.format.simple(),
  transports: [
    new winston.transports.Console(),
    new winston.transports.File({ filename: 'logs/test.log' })
  ]
});

module.exports = logger;