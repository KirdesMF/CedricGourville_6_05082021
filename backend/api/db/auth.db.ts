import { Schema, model } from 'mongoose';

type User = {
   name?: string;
   password?: string;
   email?: string;
};

const userSchema = new Schema<User>({
   name: String,
   password: String,
   email: String,
});

export const UserModel = model<User>('User', userSchema);
