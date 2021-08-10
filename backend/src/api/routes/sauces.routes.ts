import { Router } from 'express';
import { SaucesController } from '../../api/controllers/sauces.controller';

const route = Router();

export function saucesRouter(app: Router) {
   app.use('/sauces', route);

   route.get('/', SaucesController.getAllSauces);
   route.post('/', SaucesController.postSauce);

   route.get('/:id', SaucesController.getSauce);
   route.put('/:id', SaucesController.updateSauce);
   route.delete('/:id', SaucesController.deleteSauce);

   route.post('/:id/like', SaucesController.likeSauce);

   return app;
}
