import 'dotenv/config';
import express from 'express';
import expressConfig from './config/express';
import { connection } from './config/db';
import config from './config/setup';

const port = config.PORT || 8080;

const app = express();

expressConfig(app);

connection(app, port);

export default app;
