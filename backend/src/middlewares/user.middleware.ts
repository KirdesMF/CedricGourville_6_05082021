import { UserServices } from '../services/user.services';
import { MiddlewareType } from '../types';

const validateEmailIsUnique: MiddlewareType = async (req, res, next) => {
   const user = await UserServices.findUserByEmail(req.body.email);

   if (user) {
      res.status(400).send({ error: `User email already exists` });
   } else {
      next();
   }
};

export const UserMiddleware = {
   validateEmailIsUnique,
};
