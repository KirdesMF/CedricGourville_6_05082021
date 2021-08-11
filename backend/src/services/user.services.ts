import { UserModel } from '../models/user.model';

async function createUser(email: string, password: string) {
   try {
      const model = await UserModel.create({
         email: email,
         password: password,
      });
      await model.save();

      return model;
   } catch (err) {
      console.log(err);
   }
}

async function findUserByEmail(email: string) {
   try {
      return await UserModel.findOne({ email });
   } catch (err) {
      console.log(err);
   }
}

async function findUserById(id: string) {
   try {
      return await UserModel.findById(id);
   } catch (err) {
      console.log(err);
   }
}

export const UserServices = {
   createUser,
   findUserByEmail,
   findUserById,
};
