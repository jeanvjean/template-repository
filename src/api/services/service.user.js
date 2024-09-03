import DB from '../../services/service.db';
import * as Query from '../../lib/queries/lib.query.user';

export const getUser = payload => DB.transact(Query.getAccount, payload);

export const createUser = payload => DB.singleTransaction(Query.createUserAccount, payload);
