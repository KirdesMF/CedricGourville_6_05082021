import { UserController } from '../controllers/user.controller';
import express, { Router } from 'express';

const route = express.Router();

export function userRouter(app: Router) {
   app.use('/auth', route);

   route.post('/signup', UserController.signup);
   route.post('/login', UserController.login);

   return app;
}
