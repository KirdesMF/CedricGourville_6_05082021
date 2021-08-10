import { Sauce, SauceModel } from '../models/sauces.models';

const getAllSauces = async () => {
   try {
      return await SauceModel.find();
   } catch (err) {
      console.log(err);
   }
};

const createSauce = async (params: Sauce) => {
   try {
      return await SauceModel.create(params);
   } catch (err) {
      console.log(err);
   }
};

export const SaucesService = {
   getAllSauces,
   createSauce,
};
