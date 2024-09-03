/* eslint-disable no-async-promise-executor */
import 'dotenv/config';
import pgp from 'pg-promise';
import promise from 'bluebird';
import detectPort from 'detect-port';
import config from '../setup';

const pg = pgp({ promiseLib: promise, noWarnings: true });
const db = pg(config.DATABASE_URL);

const connection = (app, port) => new Promise(async resolve => {
  port = port || (await detectPort());
  const server = app.listen(port, '0.0.0.0', () => {
    logger.info(`Listening on port ${server.address().port}`);
    const originalClose = server.close.bind(server);
    server.close = () => new Promise(resolveClose => {
      originalClose(resolveClose);
    });
    db
      .connect()
      .then(conn => {
        logger.info(
          `connected to ${conn.client.database} database`,
        );
      })
      .catch(err => {
        logger.info(err, 'err');
      });
  });
  resolve(server);
});

export { db, connection };
