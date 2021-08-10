import mongoose from 'mongoose';
import config from '../config/config';

export const mongooseOptions = {
   useNewUrlParser: true,
   useUnifiedTopology: true,
};

const message = '✌ Mongo connected';

export async function MongooseLoader() {
   try {
      if (process.env.NODE_ENV !== 'test') {
         const connect = mongoose.connect(config.db, mongooseOptions);
         // remove deprecated err
         mongoose.set('useCreateIndex', true);
         console.log(message);
         return connect;
      }
   } catch (err) {
      console.log(err);
   }
}
