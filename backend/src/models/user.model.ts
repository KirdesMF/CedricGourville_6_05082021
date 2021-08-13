import { Schema, model } from 'mongoose';
import uniqueValidator from 'mongoose-unique-validator';
import { validateEmail } from '../utils';

export type User = {
   email: string;
   password: string;
};

const userSchema = new Schema<User>({
   email: {
      type: String,
      required: true,
      unique: true,
      validate: [validateEmail, 'Please enter a valid email'],
   },
   password: {
      type: String,
      required: true,
      minLength: [6, 'Must be at least 6 characters long, got {VALUE}'],
   },
});

userSchema.plugin(uniqueValidator as any, {
   message: '❌ Error, expected mail to be unique.',
});

export const UserModel = model<User>('User', userSchema);
