import express, {
   Request,
   Response,
   NextFunction,
   ErrorRequestHandler,
} from 'express';
import config from '@config/config';

import authRouter from '@api/routes/auth.routes';
import saucesRouter from '@api/routes/sauces.routes';

const { port, host } = config;

function handleErrors(
   err: ErrorRequestHandler,
   req: Request,
   res: Response,
   next: NextFunction
) {
   res.status(500);
   res.json({ error: err });
   next();
}

function setHeaders(req: Request, res: Response, next: NextFunction) {
   res.setHeader('Access-Control-Allow-Origin', '*');
   res.setHeader(
      'Access-Control-Allow-Headers',
      'Origin, X-Requested-With, Content, Accept, Content-Type, Authorization'
   );
   res.setHeader(
      'Access-Control-Allow-Methods',
      'GET, POST, PUT, DELETE, PATCH, OPTIONS'
   );
   next();
}

export function ExpressLoader() {
   const app = express();

   app.use(express.json());
   app.use(express.urlencoded({ extended: true }));
   app.use(setHeaders);

   app.use('/api', authRouter);
   app.use('/api', saucesRouter);

   app.use(handleErrors);

   app.listen(port, () => console.log(`API hosted: http://${host}:${port}`));
}
