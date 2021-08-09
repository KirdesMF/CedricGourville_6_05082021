import mongoose from 'mongoose';
import { MongoMemoryServer } from 'mongodb-memory-server';
import { mongooseOptions } from '../loaders/mongoose.loader';

let mongod: MongoMemoryServer;

async function connect() {
   await mongoose.disconnect();
   mongod = await MongoMemoryServer.create();
   const mongoUri = mongod.getUri();

   await mongoose.connect(mongoUri, mongooseOptions);
   console.log('test db is connected');
}

async function close() {
   await mongoose.disconnect();
   await mongod.stop();
}

async function clear() {
   const collections = mongoose.connection.collections;

   for (const key in collections) {
      await collections[key].deleteMany({});
   }
}

export const testDatabase = {
   connect,
   close,
   clear,
};
