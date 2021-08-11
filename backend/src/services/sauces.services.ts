import { Sauce, SauceModel } from '../models/sauces.models';

async function getAllSauces() {
   try {
      return await SauceModel.find();
   } catch (err) {
      console.log(err);
   }
}

async function createSauce(params: Sauce) {
   try {
      const model = await SauceModel.create(params);
      await model.save();
      return model;
   } catch (err) {
      console.log(err);
   }
}

async function findSauceById(sauceId: string) {
   try {
      return await SauceModel.findById(sauceId);
   } catch (err) {
      console.log(err);
   }
}

async function findSauceAndDelete(sauceId: string) {
   try {
      return await SauceModel.deleteOne({ _id: sauceId });
   } catch (err) {
      console.log(err);
   }
}

export const SaucesService = {
   getAllSauces,
   createSauce,
   findSauceById,
   findSauceAndDelete,
};
