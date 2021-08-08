import mongoose from 'mongoose';
import config from '@config/config';

const mongooseOptions = {
   useNewUrlParser: true,
   useUnifiedTopology: true,
};

export async function MongooseLoader() {
   try {
      const connect = mongoose.connect(config.db, mongooseOptions);
      console.log('Mongodb connected');
      return connect;
   } catch (err) {
      console.log(err);
   }
}
