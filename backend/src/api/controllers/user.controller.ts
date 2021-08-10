import { User } from '../../models/user.model';
import { UserServices } from '../../services/user.services';
import { MiddlewareType } from '../../types';

const signup: MiddlewareType<User> = async (req, res, next) => {
   const email = req.body.email;
   const password = req.body.password;

   try {
      const user = await UserServices.findUserByEmail(email);
      if (user) {
         res.status(500).json({ error: 'User mail already exists' });
      } else {
         await UserServices.createUser(email, password);
         res.status(200).send({ message: 'User is now registered' });
         next();
      }
   } catch (err) {
      res.status(500).send({ error: 'Something went wrong!' });
      next(err);
   }
};

const login: MiddlewareType<User> = async (req, res, next) => {
   const email = req.body.email as string;
   const password = req.body.password as string;

   try {
      const user = await UserServices.findUserByEmail(email);
      if (!user) {
         res.status(401).json({
            error: 'User is not registred please sign in',
         });
      } else {
         if (password === user.password) {
            res.send({ id: user._id });
            next();
         } else {
            res.status(401).json({ error: 'Wrong password' });
         }
      }
   } catch (err) {
      res.status(500).send({ error: 'Something went wrong!' });
      next(err);
   }
};

export const UserController = { signup, login };
