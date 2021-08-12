import { Request, Response, NextFunction } from 'express';
import { httpStatus } from '../../http-status/status';
import { Sauce } from '../../models/sauces.models';
import { SaucesService } from '../../services/sauces.services';
import { deleteImageFromDisk, getUserIdFromToken } from '../../utils';

// GET
async function listSauces(req: Request, res: Response, next: NextFunction) {
   const sauces = await SaucesService.getAllSauces().catch(next);
   return res.json(sauces);
}

// GET
async function getSauce(req: Request, res: Response, next: NextFunction) {
   const sauce = await SaucesService.findSauceById(req.params.id).catch(next);
   return res.status(httpStatus.OK).json(sauce);
}

// POST
async function postSauce(req: Request, res: Response, next: NextFunction) {
   const bodySauce = req.body.sauce as Sauce;
   const imageUrl = `${req.protocol}://${req.get('host')}/images/${
      req.file?.filename
   }`;

   const sauce = await SaucesService.createSauce({
      ...bodySauce,
      imageUrl,
   }).catch((err) => {
      next(err);
   });

   return res.status(httpStatus.OK).json(sauce);
}

// PUT
async function updateSauce(req: Request, res: Response, next: NextFunction) {
   const sauceId = req.params.id;

   try {
      if (!req.body.sauce) {
         const sauce = await SaucesService.findSauceAndUpdate(sauceId, {
            ...req.body,
         });

         return res.status(httpStatus.OK).json(sauce);
      }

      const oldSauce = (await SaucesService.findSauceById(sauceId)) as Sauce;
      const oldImageUrl = oldSauce.imageUrl as string;
      const imageUrl = `${req.protocol}://${req.get('host')}/images/${
         req.file?.filename
      }`;

      const sauce = await SaucesService.findSauceAndUpdate(sauceId, {
         ...(req.body.sauce as Sauce),
         imageUrl,
      });

      return deleteImageFromDisk(oldImageUrl, () => {
         res.status(httpStatus.OK).json(sauce);
      });
   } catch (err) {
      next(err);
   }
}

// DELETE
async function deleteSauce(req: Request, res: Response, next: NextFunction) {
   const userId = getUserIdFromToken(req);
   const sauceId = req.params.id;

   try {
      const sauce = await SaucesService.findSauceById(sauceId);
      const userIdSauce = sauce?.userId;
      const imageUrl = sauce?.imageUrl as string;

      if (userIdSauce !== userId) {
         res.status(httpStatus.unauthorized);
         throw new Error('🚨 Not Authorized 🚨');
      }

      deleteImageFromDisk(imageUrl, async () => {
         await SaucesService.findSauceAndDelete(req.params.id);
         res.status(httpStatus.OK).json({
            message: '✔ Sauce Deleted!',
         });
      });
   } catch (err) {
      next(err);
   }
}

// PUT
async function likeSauce(req: Request, res: Response, next: NextFunction) {
   res.json({ message: 'Sauce successfully liked' });
}

export const SaucesController = {
   listSauces,
   postSauce,
   getSauce,
   updateSauce,
   deleteSauce,
   likeSauce,
};
