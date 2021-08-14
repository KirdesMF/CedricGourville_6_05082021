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
import { rateLimiterMiddleware } from '../middlewares/rate-limiter';
import hpp from 'hpp';

const requestSizeLimit = '1kb';

export function ExpressLoader(app: Application) {
   app.use(helmet()); // help to set various http headers
   app.use(setHeaders);

   app.use(express.urlencoded({ extended: true, limit: requestSizeLimit }));
   app.use(express.json({ limit: requestSizeLimit }));

   app.use(hpp()); // http parameter pollution
   app.use(rateLimiterMiddleware); // rate limite block force

   app.use('/images', express.static(path.join(__dirname, '../../images/')));
   app.use('/api', Route());

   app.use(errorLogger);
   app.use(errorResponder);
   app.use(errorServer);

   return app;
}
