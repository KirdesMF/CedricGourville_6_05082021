import { Router } from 'express';
import { userRouter } from './user.routes';
import { saucesRouter } from './sauces.routes';

export function Route() {
   const app = Router();

   userRouter(app);
   saucesRouter(app);

   return app;
}
