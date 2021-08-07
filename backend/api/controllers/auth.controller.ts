import { Request, Response, NextFunction } from 'express';

async function signup(req: Request, res: Response, next: NextFunction) {
   // const email = req.body.email;
   // const password = req.body.password;

   res.json({ message: '' });
   next();
}

async function login(req: Request, res: Response, next: NextFunction) {
   // const email = req.body.email;
   // const password = req.body.password;

   res.json({ userId: '123', token: 'abc' });
   next();
}

export const auth = { signup, login };
