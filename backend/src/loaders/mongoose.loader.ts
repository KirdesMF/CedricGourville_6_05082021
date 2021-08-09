import mongoose from 'mongoose';
import config from '../config/config';

const mongooseOptions = {
   useNewUrlParser: true,
   useUnifiedTopology: true,
};

const message =
   process.env.NODE_ENV !== 'production'
      ? `✌ Mongo connected :${config.db}`
      : '✌ Mongo connected';

export async function MongooseLoader() {
   try {
      if (process.env.NODE_ENV !== 'test') {
         const connect = mongoose.connect(config.db, mongooseOptions);
         console.log(message);
         return connect;
      }
   } catch (err) {
      console.log(err);
   }
}
