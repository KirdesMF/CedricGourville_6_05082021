import { QueryFindOneAndUpdateOptions } from 'mongoose';
import { Sauce, SauceModel } from '../models/sauces.models';

async function getAllSauces() {
   try {
      const sauces = await SauceModel.find();
      return sauces;
   } catch (err) {
      console.log(err);
   }
}

async function createSauce(params: Sauce) {
   try {
      const model = await SauceModel.create(params);
      const saved = await model.save();
      return saved;
   } catch (err) {
      console.log(err);
   }
}

async function findSauceById(sauceId: string) {
   try {
      const sauce = await SauceModel.findById(sauceId);
      return sauce;
   } catch (err) {
      console.log(err);
   }
}

async function findSauceAndDelete(sauceId: string) {
   try {
      const sauce = await SauceModel.deleteOne({ _id: sauceId });
      return sauce;
   } catch (err) {
      console.log(err);
   }
}

const options: QueryFindOneAndUpdateOptions = {
   upsert: true,
   setDefaultsOnInsert: true,
};
async function findSauceAndUpdate(sauceId: string, update: Partial<Sauce>) {
   try {
      const sauce = await SauceModel.findOneAndUpdate(
         { _id: sauceId },
         update,
         options
      );
      return sauce;
   } catch (err) {
      console.log(err);
   }
}

export const SaucesService = {
   getAllSauces,
   createSauce,
   findSauceById,
   findSauceAndDelete,
   findSauceAndUpdate,
};
