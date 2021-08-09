import { MongooseLoader } from './loaders/mongoose.loader';
import { ExpressLoader } from './loaders/express.loader';
import express from 'express';
import config from './config/config';

const { port, host } = config;

const app = express();

async function startServer() {
   await MongooseLoader();
   ExpressLoader();

   app.listen(port, () => console.log(`🔥 API hosted: http://${host}:${port}`));
}

startServer();
