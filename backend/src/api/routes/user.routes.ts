import { UserController } from '../controllers/user.controller';
import express, { Router } from 'express';
import { checkSchema } from 'express-validator';
import {
   userValidatorSchema,
   validateInputLog,
} from '../../middlewares/validator';

const route = express.Router();

export function userRouter(app: Router) {
   app.use('/auth', route);

   route.post(
      '/signup',
      checkSchema(userValidatorSchema),
      validateInputLog,
      UserController.signup
   );
   route.post(
      '/login',
      checkSchema(userValidatorSchema),
      validateInputLog,
      UserController.login
   );

   return app;
}
