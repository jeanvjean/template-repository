import enums from '../../lib/enums';
import ApiResponse from '../../lib/http/lib.http.response';
import * as UserPayload from '../../lib/payloads/lib.payload.user';
import * as UserService from '../services/service.user';

export const createUserController = async(req, res) => {
  const { user, body } = req;
  if (!user) {
    const payload = UserPayload.createUser(body);
    const createdUser = await UserService.createUser(payload);
    return ApiResponse.success(res, enums.RESOURCE_CREATED('User'), enums.HTTP_CREATED, { user: createdUser });
  }
  logger.info('Successfully retreived user record from the DB', 'controller::controller.user');
  return ApiResponse.success(res, enums.RESOURCE_FETCHED('User'), enums.HTTP_OK, { user });
};
