import { Schema, model } from 'mongoose';

export type User = {
   password?: string;
   email?: string;
};

const userSchema = new Schema<User>({
   password: String,
   email: String,
});

export const UserModel = model<User>('User', userSchema);
