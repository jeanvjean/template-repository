/* eslint-disable new-cap */
import winston, { format } from 'winston';
import 'dotenv/config';
import { PapertrailConnection, PapertrailTransport } from 'winston-papertrail';
import config from '../setup';

const {
  combine, timestamp, errors, colorize, printf,
} = format;

const papertrailConnection = new PapertrailConnection({
  host: `${config.PAPERTRAIL_HOST}`.split('\r')[0],
  port: config.PAPERTRAIL_PORT,
  hostname: 'boiler',
});
const logger = (env) => {
  let ret;
  const consoleFormat = printf(({
    level, timestamp: time, message, stack,
  }) => `${time}, ${level}, ${stack || message}`);

  const fileFormat = printf(({ level, timestamp: time_stamp, message }) => `${time_stamp}, ${level}, ${message}`);

  if (env === 'production') {
    ret = new winston.createLogger({
      format: combine(
        colorize({ all: true }),
        timestamp({ format: 'YYYY-MM-DD HH:mm:ss' }),
        fileFormat,
        errors({ stack: true }),
      ),
      transports: [
        new PapertrailTransport(papertrailConnection, {
          hostname: 'boiler',
        }),
      ],
      exitOnError: false,
    });
  } else if (env === 'development') {
    ret = new winston.createLogger({
      format: combine(
        colorize({ all: true }),
        timestamp({ format: 'YYYY-MM-DD HH:mm:ss' }),
        fileFormat,
        errors({ stack: true }),
      ),
      transports: [
        new winston.transports.Console({
          level: 'debug',
          handleExceptions: true,
          json: false,
          colorize: true,
          format: consoleFormat,
        }),
      ],
      exitOnError: false,
    });
  } else if (env === 'test') {
    ret = new winston.createLogger({
      format: combine(
        colorize({ all: true }),
        timestamp({ format: 'YYYY-MM-DD HH:mm:ss' }),
        fileFormat,
        errors({ stack: true }),
      ),
      transports: [
        new winston.transports.File({
          level: 'info',
          filename: './test.log',
          handleExceptions: true,
          json: true,
          maxsize: 5242880, // 5MB
          maxFiles: 50,
          colorize: false,
        }),
        // new winston.transports.Console({
        //   level: 'debug',
        //   handleExceptions: true,
        //   json: false,
        //   colorize: true,
        //   format: consoleFormat,
        // }),
      ],
      exitOnError: false,
    });
  } else {
    // Else return default logger
    return new winston.createLogger({
      transports: [
        new winston.transports.Console({
          level: 'debug',
          handleExceptions: true,
          json: true,
          colorize: true,
        }),
        // new PapertrailTransport(papertrailConnection, {
        //   hostname: 'boiler',
        // }),
      ],
      exitOnError: false,
    });
  }

  ret.stream = {
    write: (message, encoding) => {
      logger.info(message);
    },
  };

  return ret;
};

export default logger;
