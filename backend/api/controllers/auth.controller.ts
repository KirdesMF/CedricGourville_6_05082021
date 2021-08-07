import { UserModel } from 'api/db/auth.db';
import { Request, Response, NextFunction } from 'express';

async function signup(req: Request, res: Response, next: NextFunction) {
   // const email = req.body.email;
   // const password = req.body.password;

   res.json({ message: '' });
   next();
}

async function login(req: Request, res: Response, next: NextFunction) {
   const name = req.body.name || 'Cedric';
   const email = req.body.email || 'cedric@contact.fr';
   const password = req.body.password || '1234';

   try {
      const user = await UserModel.findOne({ email });

      if (user) res.send({ info: 'User already signed up' });
      else {
         const newUser = new UserModel({ name, email, password });
         await newUser.save();
         res.send(newUser);
      }
   } catch {
      res.status(404);
      res.send({ error: 'Something went wrong!' });
   }

   next();
}

export const auth = { signup, login };
