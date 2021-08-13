import {
   FilterQuery,
   QueryFindOneAndUpdateOptions,
   UpdateQuery,
} from 'mongoose';
import { httpStatus } from '../http-status/status';
import { Sauce, SauceModel } from '../models/sauces.models';
import { ErrorHandler } from '../utils/error.utils';

async function getAllSauces() {
   try {
      const sauces = await SauceModel.find();
      return sauces;
   } catch (err) {
      // throw new ErrorHandler(httpStatus.serverError, err);
   }
}

async function createSauce(params: Sauce) {
   try {
      const model = await SauceModel.create(params);
      const saved = await model.save();
      return saved;
   } catch (err) {
      throw new ErrorHandler(httpStatus.serverError, err);
   }
}

async function findSauceById(sauceId: string) {
   try {
      const sauce = await SauceModel.findById(sauceId);
      return sauce;
   } catch (err) {
      throw new ErrorHandler(httpStatus.serverError, err);
   }
}

async function findSauceAndDelete(sauceId: string) {
   try {
      const sauce = await SauceModel.deleteOne({ _id: sauceId });
      return sauce;
   } catch (err) {
      throw new ErrorHandler(httpStatus.serverError, err);
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
      throw new ErrorHandler(httpStatus.serverError, err);
   }
}

async function updateOneSauce(
   filter: FilterQuery<Sauce>,
   update: UpdateQuery<Sauce> | Partial<Sauce>
) {
   try {
      const model = await SauceModel.updateOne(filter, update);
      return model;
   } catch (err) {
      throw new ErrorHandler(httpStatus.serverError, err);
   }
}

export const SaucesService = {
   getAllSauces,
   createSauce,
   findSauceById,
   findSauceAndDelete,
   findSauceAndUpdate,
   updateOneSauce,
};
