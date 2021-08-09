import { UserModel } from '../models/auth.model';

export async function createUser(email: string, password: string) {
   const model = new UserModel({ email, password });
   const user = await model.save((err) => {
      // TODO improve handles error
      throw err;
   });
   return user;
}

export async function findUserByEmail(email: string) {
   try {
      return await UserModel.findOne({ email });
   } catch (err) {
      console.log(err);
   }
}

export async function findUserById(id: string) {
   try {
      return await UserModel.findById(id);
   } catch (err) {
      console.log(err);
   }
}
