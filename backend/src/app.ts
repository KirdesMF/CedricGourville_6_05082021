import { MongooseLoader } from './loaders/mongoose.loader';
import { ExpressLoader } from './loaders/express.loader';

async function startServer() {
   await MongooseLoader();
   ExpressLoader();
}

startServer();
