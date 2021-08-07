import express from 'express';
import mongoose from 'mongoose';

import { setHeaders, config } from 'api/config/config';
import authRouter from 'api/routes/auth.routes';
import saucesRouter from 'api/routes/sauces.routes';

const { port, db } = config;

mongoose
   .connect(db, {
      useNewUrlParser: true,
      useUnifiedTopology: true,
   })
   .then((res) => {
      if (res) console.log('mongoose is connected');

      const app = express();

      app.use(express.json());
      app.use(express.urlencoded({ extended: true }));
      app.use(setHeaders);

      app.use('/api', authRouter);
      app.use('/api', saucesRouter);

      app.listen(port, () =>
         console.log(`API hosted: http://localhost:${port}`)
      );
   })
   .catch((err) => console.error(err));
