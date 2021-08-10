import { Schema, model } from 'mongoose';

export type User = {
   email: string;
   password: string;
};

const userSchema = new Schema<User>({
   email: String!,
   password: String!,
});

export const UserModel = model<User>('User', userSchema);
