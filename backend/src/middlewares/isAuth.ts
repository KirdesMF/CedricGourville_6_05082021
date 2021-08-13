import { httpStatus } from '../http-status/status';
import { MiddlewareType } from '../types';
import { getUserIdFromToken } from '../utils';
import { ErrorHandler } from '../utils/error.utils';

export const isAuthenticated: MiddlewareType<void> = (req, res, next) => {
   const userId = getUserIdFromToken(req);

   if (req.body.userId && req.body.userId !== userId) {
      throw new ErrorHandler(httpStatus.unauthorized, '❌ Not authorized');
   }

   next();
};
