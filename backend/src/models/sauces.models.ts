import { Schema, model } from 'mongoose';

export type Sauce = {
   userId: string;
   name: string;
   manufacturer: string;
   description: string;
   mainPepper: string;
   imageUrl?: string;
   heat: number;
   likes?: number;
   dislikes?: number;
   usersLikes?: string[];
   usersDislikes?: string[];
};

const sauceSchema = new Schema({
   userId: { type: String, required: true },
   name: { type: String, required: true },
   manufacturer: { type: String, required: true },
   description: { type: String, required: true },
   mainPepper: { type: String, required: true },
   imageUrl: { type: String },
   heat: { type: Number, required: true },
   likes: { type: Number },
   dislikes: { type: Number },
   usersDislikes: { type: [String] },
   usersLikes: { type: [String] },
});

export const SauceModel = model<Sauce>('Sauce', sauceSchema);
