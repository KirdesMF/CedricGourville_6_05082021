import bcrypt from 'bcrypt';
import jwt from 'jsonwebtoken';
import { httpStatus } from '../../http-status/status';
import { SECRET } from '../../config/config';
import { User } from '../../models/user.model';
import { UserServices } from '../../services/user.services';
import { MiddlewareType } from '../../types';
import { ErrorHandler } from '../../utils/error.utils';

const signup: MiddlewareType<User> = async (req, res, next) => {
   const email = req.body.email;
   const password = req.body.password;

   try {
      const hashedPassword = await bcrypt.hash(password, 10);
      const user = await UserServices.createUser(email, hashedPassword);

      if (user) {
         res.status(httpStatus.OK).json({ message: '✔ User created' });
      }
   } catch (err) {
      next(new ErrorHandler(httpStatus.notFound, '❌ Something went wrong'));
   }
};

const login: MiddlewareType = async (req, res, next) => {
   const email = req.body.email as string;
   const password = req.body.password as string;

   try {
      const user = await UserServices.findUserByEmail(email);

      if (!user) {
         return next(
            new ErrorHandler(
               httpStatus.notFound,
               '❌ User is not registred please sign in'
            )
         );
      } else {
         const isPassword = await bcrypt.compare(password, user.password);
         if (!isPassword) {
            return next(
               new ErrorHandler(
                  httpStatus.unauthorized,
                  '❌ Wrong password - Mail'
               )
            );
         }

         res.status(httpStatus.OK).json({
            message: '✔ User connected successfully',
            userId: user._id,
            token: jwt.sign({ userId: user._id }, SECRET, { expiresIn: '12h' }),
         });

         next();
      }
   } catch (err) {
      next(new ErrorHandler(httpStatus.unauthorized, err));
   }
};

export const UserController = { signup, login };
