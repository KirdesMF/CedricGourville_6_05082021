import { Request, Response, NextFunction } from 'express';
import { fakesSauces } from 'api/db/sauces.db';

async function getAllSauces(req: Request, res: Response, next: NextFunction) {
   res.send(fakesSauces);
}

async function postSauce(req: Request, res: Response, next: NextFunction) {
   // const sauce = req.body.sauce;
   // const image = req.body.image;

   res.json({ message: 'Image send to server 🎉' });
}

async function getSauce(req: Request, res: Response, next: NextFunction) {
   // const id = req.body.id;

   res.json(fakesSauces[1]);
}

async function updateSauce(req: Request, res: Response, next: NextFunction) {
   res.json({ message: 'Sauce successfully updated' });
}

async function deleteSauce(req: Request, res: Response, next: NextFunction) {
   res.json({ message: 'Sauce successfully deleted' });
}

async function likeSauce(req: Request, res: Response, next: NextFunction) {
   res.json({ message: 'Sauce successfully liked' });
}

export const sauces = {
   getAllSauces,
   postSauce,
   getSauce,
   updateSauce,
   deleteSauce,
   likeSauce,
};
