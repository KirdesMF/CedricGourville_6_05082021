import { UserModel } from '../models/user.model';
import { httpStatus } from '../http-status/status';
import { ErrorHandler } from '../utils/error.utils';

async function createUser(email: string, password: string) {
   try {
      const model = await UserModel.create({
         email: email,
         password: password,
      });
      await model.save();

      return model;
   } catch (err) {
      throw new ErrorHandler(httpStatus.serverError, err);
   }
}

async function findUserByEmail(email: string) {
   try {
      return await UserModel.findOne({ email });
   } catch (err) {
      throw new ErrorHandler(httpStatus.serverError, err);
   }
}

async function findUserById(id: string) {
   try {
      return await UserModel.findById(id);
   } catch (err) {
      throw new ErrorHandler(httpStatus.serverError, err);
   }
}

export const UserServices = {
   createUser,
   findUserByEmail,
   findUserById,
};
