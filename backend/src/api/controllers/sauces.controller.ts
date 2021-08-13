import { Request, Response, NextFunction } from 'express';
import { httpStatus } from '../../http-status/status';
import { Sauce } from '../../models/sauces.models';
import { SaucesService } from '../../services/sauces.services';
import { deleteImageFromDisk, getUserIdFromToken } from '../../utils';
import { ErrorHandler } from '../../utils/error.utils';

// GET
async function listSauces(req: Request, res: Response, next: NextFunction) {
   const sauces = await SaucesService.getAllSauces().catch(next);
   return res.status(httpStatus.OK).send(sauces);
}

// GET
async function getSauce(req: Request, res: Response, next: NextFunction) {
   const sauce = await SaucesService.findSauceById(req.params.id).catch(next);
   return res.status(httpStatus.OK).json(sauce);
}

// POST
async function postSauce(req: Request, res: Response, next: NextFunction) {
   const bodySauce = req.body as Sauce;
   const imageUrl = `${req.protocol}://${req.get('host')}/images/${
      req.file?.filename
   }`;

   const sauce = await SaucesService.createSauce({
      ...bodySauce,
      imageUrl,
   }).catch((err) => {
      next(err);
   });

   res.status(httpStatus.OK).json({ message: 'Success' });
   return sauce;
}

// PUT
async function updateSauce(req: Request, res: Response, next: NextFunction) {
   try {
      const sauceId = req.params.id;
      const oldSauce = (await SaucesService.findSauceById(sauceId)) as Sauce;
      const oldImageUrl = oldSauce.imageUrl as string;
      const imageUrl = `${req.protocol}://${req.get('host')}/images/${
         req.file?.filename
      }`;

      if (!req.file) {
         await SaucesService.findSauceAndUpdate(sauceId, {
            ...(req.body as Sauce),
         });
         return res.status(httpStatus.OK).json({
            message: '✔ Sauce Updated',
         });
      }

      await SaucesService.findSauceAndUpdate(sauceId, {
         ...(req.body as Sauce),
         imageUrl,
      });

      return deleteImageFromDisk(oldImageUrl, () => {
         res.status(httpStatus.OK).json({
            message: '✔  Old images removed and Sauce updated',
         });
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
         next(
            new ErrorHandler(httpStatus.unauthorized, '🚨 Not Authorized 🚨')
         );
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
   const userId = req.body.userId as string;
   const count = req.body.like as number;
   const sauceId = req.params.id;
   const sauce = await SaucesService.findSauceById(sauceId);

   const hasLiked = sauce?.usersLiked?.includes(userId);
   const hasDisliked = sauce?.usersDisliked?.includes(userId);

   // if like
   if (count === 1 && !hasLiked) {
      await SaucesService.updateOneSauce(
         { _id: sauceId },
         {
            $push: {
               usersLiked: userId,
            },
            $inc: {
               likes: +1,
            },
         }
      ).catch(() =>
         next(new ErrorHandler(httpStatus.badRequest, '❌ Already liked'))
      );

      res.status(httpStatus.OK).json({ message: '✔ Liked' });
   }

   // if dislike
   if (count === -1 && !hasDisliked) {
      await SaucesService.updateOneSauce(
         { _id: sauceId },
         {
            $push: {
               usersDisliked: userId,
            },
            $inc: {
               dislikes: +1,
            },
         }
      ).catch(() =>
         next(new ErrorHandler(httpStatus.badRequest, '❌ Already disliked'))
      );

      return res.status(httpStatus.OK).json({ message: '✔ Disliked' });
   }

   // remove like - dislike
   if (count === 0) {
      if (hasLiked) {
         await SaucesService.updateOneSauce(
            { _id: sauceId },
            {
               $pull: {
                  usersLiked: userId,
               },
               $inc: {
                  likes: -1,
               },
            }
         ).catch(() =>
            next(
               new ErrorHandler(
                  httpStatus.badRequest,
                  '❌ Something went wrong'
               )
            )
         );
         return res.status(httpStatus.OK).json({ message: '✔ like remove' });
      }

      if (hasDisliked) {
         await SaucesService.updateOneSauce(
            { _id: sauceId },
            {
               $pull: {
                  usersDisliked: userId,
               },
               $inc: {
                  dislikes: -1,
               },
            }
         ).catch(() =>
            next(
               new ErrorHandler(
                  httpStatus.badRequest,
                  '❌ Something went wrong'
               )
            )
         );

         return res.status(httpStatus.OK).json({ message: 'Dislike remove' });
      }
   }
}

export const SaucesController = {
   listSauces,
   postSauce,
   getSauce,
   updateSauce,
   deleteSauce,
   likeSauce,
};
