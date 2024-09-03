import { json, urlencoded } from 'body-parser';
import cors from 'cors';
import router from '../router';
import loggerInit from '../logger';
import { errorHandler } from '../../lib/http/lib.http.errorhandler';
import ApiResponse from '../../lib/http/lib.http.response';
import enums from '../../lib/enums';
import config from '../setup';

const { MSG_ROUTE_DOES_NOT_EXIST, HTTP_NOT_FOUND } = enums;

let logger;

if (config.NODE_ENV === 'development') {
  logger = loggerInit('development');
} else if (config.NODE_ENV === 'production') {
  logger = loggerInit('production');
} else if (config.NODE_ENV === 'test') {
  logger = loggerInit('test');
} else {
  logger = loggerInit();
}

global.logger = logger;

const expressConfig = app => {
  logger.info('Application starting...');
  app.use(
    urlencoded({
      extended: true,
    }),
  );

  app.use(json({ limit: 25 * 1024 * 1024 }));
  app.use(cors({ limit: 25 * 1024 * 1024 }));

  router(app);

  app.get('/', (req, res) => {
    res.send({ message: 'Welcome' });
  });

  /** catch 404 and forward to error handler
   No routes matched? 404. */
  app.use((req, res /* next */) => ApiResponse.error(res, MSG_ROUTE_DOES_NOT_EXIST, HTTP_NOT_FOUND));
  app.use(errorHandler);
};

export default expressConfig;
