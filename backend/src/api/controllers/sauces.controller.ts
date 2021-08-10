import { Request, Response, NextFunction } from 'express';
import { httpStatus } from '../../http-status/status';
import { SaucesService } from '../../services/sauces.services';

// TODO move function to services
async function listSauces(req: Request, res: Response, next: NextFunction) {
   const sauces = await SaucesService.getAllSauces();
   res.send(sauces || []);
}

async function postSauce(req: Request, res: Response, next: NextFunction) {
   const sauce = await SaucesService.createSauce({
      userId: '',
      name: req.body.name,
      manufacturer: req.body.manufacturer,
      description: req.body.description,
      mainPepper: req.body.mainPepper,
      imageUrl: 'https://picsum.photos/200/300',
      heat: req.body.heat,
   });

   res.status(httpStatus.OK).send(sauce);
   next();
}

async function getSauce(req: Request, res: Response, next: NextFunction) {
   // const id = req.body.id;

   res.json({});
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

export const SaucesController = {
   listSauces,
   postSauce,
   getSauce,
   updateSauce,
   deleteSauce,
   likeSauce,
};
