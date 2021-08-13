import express, { Application } from 'express';
import helmet from 'helmet';
import path from 'node:path';
import { Route } from '../api/routes/routes';
import {
   errorLogger,
   errorResponder,
   errorServer,
} from '../middlewares/errors';
import { setHeaders } from '../middlewares/headers';

export function ExpressLoader(app: Application) {
   app.use(helmet());
   app.use(setHeaders);
   app.use(express.json());
   app.use(express.urlencoded({ extended: true }));
   app.use('/images', express.static(path.join(__dirname, '../../images/')));
   app.use('/api', Route());

   app.use(errorLogger);
   app.use(errorResponder);
   app.use(errorServer);

   return app;
}
