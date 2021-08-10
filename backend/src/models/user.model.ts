import { Schema, model } from 'mongoose';

export type User = {
   email: string;
   password: string;
};

const userSchema = new Schema<User>({
   email: { type: String, required: true },
   password: { type: String, required: true },
});

export const UserModel = model<User>('User', userSchema);