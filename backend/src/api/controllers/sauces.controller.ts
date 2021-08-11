import { Request, Response, NextFunction } from 'express';
import { httpStatus } from '../../http-status/status';
import { getUserIdFromToken } from '../../middlewares/isAuth';
import { SaucesService } from '../../services/sauces.services';
import { deleteImageFromDisk } from '../../utils';

async function listSauces(req: Request, res: Response, next: NextFunction) {
   try {
      const sauces = await SaucesService.getAllSauces();
      res.send(sauces);
   } catch (err) {
      next(err);
   }
}

async function postSauce(req: Request, res: Response, next: NextFunction) {
   const bodySauce = JSON.parse(req.body.sauce);

   try {
      const sauce = await SaucesService.createSauce({
         ...bodySauce,
         imageUrl: `${req.protocol}://${req.get('host')}/images/${
            req.file?.filename
         }`,
      });

      res.status(httpStatus.OK).send(sauce);
   } catch (err) {
      next(err);
   }
}

async function getSauce(req: Request, res: Response, next: NextFunction) {
   try {
      const sauce = await SaucesService.findSauceById(req.params.id);

      if (!sauce) {
         return res.status(httpStatus.notFound).json({
            error: '❌ Something wrong with the sauce',
         });
      }

      res.status(httpStatus.OK).send(sauce);
   } catch (err) {
      next(err);
   }
}

async function updateSauce(req: Request, res: Response, next: NextFunction) {
   res.json({ message: 'Sauce successfully updated' });
}

async function deleteSauce(req: Request, res: Response, next: NextFunction) {
   const userId = getUserIdFromToken(req);
   const sauceId = req.params.id;

   try {
      const sauce = await SaucesService.findSauceById(sauceId);
      const userIdSauce = sauce?.userId;
      const imageUrl = sauce?.imageUrl as string;

      if (userIdSauce !== userId) {
         return res
            .status(httpStatus.unauthorized)
            .send({ error: 'Not Authorized' });
      }

      deleteImageFromDisk(imageUrl, async () => {
         await SaucesService.findSauceAndDelete(req.params.id);
         res.status(httpStatus.OK).json({
            message: '✔ Sauce Deleted!',
         });
      });
   } catch (err) {
      res.status(httpStatus.notFound).json({
         error: '❌ Something wrong with the sauce',
      });
   }
}

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
