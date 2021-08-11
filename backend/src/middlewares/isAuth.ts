import { Request } from 'express-serve-static-core';
import jwt from 'jsonwebtoken';
import { SECRET } from '../config/config';
import { httpStatus } from '../http-status/status';
import { MiddlewareType } from '../types';

export function getUserIdFromToken(req: Request) {
   const token = req.headers.authorization?.replace('Bearer ', '') as string;
   const decodedToken = jwt.verify(token, SECRET);
   const { userId } = decodedToken as { userId: string };

   return userId;
}

export const isAuthenticated: MiddlewareType<void> = async (req, res, next) => {
   try {
      const userId = getUserIdFromToken(req);

      if (req.body.userId && req.body.userId !== userId) {
         throw new Error('❌ Invalid user ID');
      } else {
         // TODO remove console.log
         console.log('✔ User Authorized');
         next();
      }
   } catch {
      res.status(httpStatus.unauthorized).send({
         error: new Error('❌ Not authorized'),
      });
   }
};
