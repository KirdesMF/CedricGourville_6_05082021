import { Request, Response, NextFunction } from 'express';
import { findUserByEmail, createUser } from '../../services/auth.services';

async function signup(req: Request, res: Response, next: NextFunction) {
   // const email = req.body.email;
   // const password = req.body.password;

   res.json({ message: '' });
   next();
}

async function login(req: Request, res: Response, next: NextFunction) {
   const email = req.body.email || 'cedric@contact.fr';
   const password = req.body.password || '1234';

   try {
      const user = await findUserByEmail(email);

      if (user) res.send({ info: 'User already signed up' });
      else {
         const newUser = await createUser(email, password);
         res.send(newUser);
         next();
      }
   } catch (err) {
      res.status(404).send({ error: 'Something went wrong!' });
      next(err);
   }
}

export const auth = { signup, login };
