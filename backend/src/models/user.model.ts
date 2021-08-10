import { Schema, model } from 'mongoose';
import uniqueValidator from 'mongoose-unique-validator';

export type User = {
   email: string;
   password: string;
};

const userSchema = new Schema<User>({
   email: { type: String, required: true, unique: true },
   password: { type: String, required: true },
});

userSchema.plugin(uniqueValidator as any, {
   message: '❌ Error, expected mail to be unique.',
});

export const UserModel = model<User>('User', userSchema);
