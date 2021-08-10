import { Router } from 'express';
import { SaucesController } from '../../api/controllers/sauces.controller';
import { isAuthenticated } from '../../middlewares/isAuth';

const route = Router();

export function saucesRouter(app: Router) {
   app.use('/sauces', route);

   route.get('/', isAuthenticated, SaucesController.listSauces);
   route.post('/', isAuthenticated, SaucesController.postSauce);

   route.get('/:id', isAuthenticated, SaucesController.getSauce);
   route.put('/:id', isAuthenticated, SaucesController.updateSauce);
   route.delete('/:id', isAuthenticated, SaucesController.deleteSauce);

   route.post('/:id/like', isAuthenticated, SaucesController.likeSauce);

   return app;
}
