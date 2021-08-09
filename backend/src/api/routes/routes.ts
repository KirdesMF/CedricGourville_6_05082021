import { Router } from 'express';
import { authRouter } from './auth.routes';
import { saucesRouter } from './sauces.routes';

export function Route() {
   const app = Router();

   authRouter(app);
   saucesRouter(app);

   return app;
}
