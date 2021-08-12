import { httpStatus } from '../http-status/status';
import { MiddlewareType } from '../types';
import { getUserIdFromToken } from '../utils';

export const isAuthenticated: MiddlewareType<void> = (req, res, next) => {
   const userId = getUserIdFromToken(req);

   if (req.body.userId && req.body.userId !== userId) {
      return res.status(httpStatus.unauthorized).json({
         error: '❌ Not authorized',
      });
   }

   // TODO add a res status ?
   next();
};
