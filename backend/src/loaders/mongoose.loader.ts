import mongoose, { ConnectOptions } from 'mongoose';
import config from '../config/config';

export const mongooseOptions: ConnectOptions = {
   useNewUrlParser: true,
   useUnifiedTopology: true,
   useCreateIndex: true,
   useFindAndModify: false,
};

const message = '✌ Mongo connected';
const connect = mongoose.connect(config.db, mongooseOptions);
export async function MongooseLoader() {
   try {
      if (process.env.NODE_ENV !== 'test') {
         console.log(message);
         return connect;
      }
   } catch (err) {
      console.log(err);
   }
}
