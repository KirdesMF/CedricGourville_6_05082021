import { UserServices } from '../../services/user.services';
import { MiddlewareType } from '../../types';

const signup: MiddlewareType = async (req, res, next) => {
   res.json({ message: '' });
   next();
};

const login: MiddlewareType = async (req, res, next) => {
   const email = req.body.email || 'cedric@contact.fr';
   const password = req.body.password || '1234';

   try {
      const user = await UserServices.findUserByEmail(email);

      if (user) res.send({ info: 'User already signed up' });
      else {
         const newUser = await UserServices.createUser(email, password);
         res.send(newUser);
         next();
      }
   } catch (err) {
      res.status(404).send({ error: 'Something went wrong!' });
      next(err);
   }
};

export const UserController = { signup, login };
