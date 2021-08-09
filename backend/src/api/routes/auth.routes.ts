import { auth } from '../../api/controllers/auth.controller';
import express, { Router } from 'express';

const route = express.Router();

export function authRouter(app: Router) {
   app.use('/auth', route);

   route.post('/signup', auth.signup);
   route.post('/login', auth.login);

   return app;
}
