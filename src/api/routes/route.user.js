import { Router } from 'express';
import { catchErrors } from '../../lib/http/lib.http.errorhandler';
import * as Middleware from '../middlewares/middleware.user';
import * as Controller from '../controllers/controller.user';
import Model from '../middlewares/middleware.model';
import * as Schema from '../../lib/schema/lib.schema.user';

const router = Router();

router.post(
  '/',
  Model(Schema.UserSchema, 'payload'),
  catchErrors(Middleware.getUserAccount),
  catchErrors(Controller.createUserController),
);

export default router;
