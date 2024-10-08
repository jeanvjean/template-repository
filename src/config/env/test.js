import 'dotenv/config';

const {
  BOILER_TEST_DATABASE_URL,
  BOILER_TEST_DATABASE_MAX_CONNECTIONS,
  BOILER_TEST_PAPERTRAIL_PORT,
  BOILER_TEST_PAPERTRAIL_HOST,
  BOILER_TEST_TERMII_API_KEY,
  BOILER_TEST_TERMII_SENDER_ID,
  BOILER_TEST_TERMII_URL,
  BOILER_TEST_SENDGRID_APIKEY,
  BOILER_TEST_EMAIL_SENDER,
  BOILER_TEST_EMAIL_SERVICE,
  BOILER_TEST_PORT,
} = process.env;

export default {
  NODE_ENV: 'test',
  DATABASE_URL: BOILER_TEST_DATABASE_URL,
  DATABASE_MAX_CONNECTIONS: BOILER_TEST_DATABASE_MAX_CONNECTIONS,
  PAPERTRAIL_PORT: BOILER_TEST_PAPERTRAIL_PORT,
  PAPERTRAIL_HOST: BOILER_TEST_PAPERTRAIL_HOST,
  EMAIL_SENDER_SERVICE: BOILER_TEST_EMAIL_SERVICE,
  EMAIL_SENDER_KEY: BOILER_TEST_SENDGRID_APIKEY,
  EMAIL_SENDER: BOILER_TEST_EMAIL_SENDER,
  SMS_API_KEY: BOILER_TEST_TERMII_API_KEY,
  SMS_SENDER_ID: BOILER_TEST_TERMII_SENDER_ID,
  SMS_SENDER_URL: BOILER_TEST_TERMII_URL,
  PORT: BOILER_TEST_PORT,
};
