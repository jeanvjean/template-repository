import Joi from 'joi';
import * as ValidationHelpers from '../utils/lib.validation.helper';

const {
  editStringCheck, emailCheck,
} = ValidationHelpers;

export const UserSchema = Joi.object({
  first_name: editStringCheck('first_name'),
  last_name: editStringCheck('last_name'),
  email: emailCheck(),
});
