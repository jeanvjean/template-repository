import {
  devENV, prodENV, testENV,
} from './env';

const { BOILER_NODE_ENV } = process.env;

export default {
  test: testENV,
  production: prodENV,
  development: devENV,
}[BOILER_NODE_ENV || 'development'];
