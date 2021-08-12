import { Router } from 'express';
import { SaucesController } from '../../api/controllers/sauces.controller';
import { isAuthenticated } from '../../middlewares/isAuth';
import { uploadMulter } from '../../middlewares/multer';
import { parseSauce, validateInput } from '../../middlewares/validator';

const route = Router();

export function saucesRouter(app: Router) {
   app.use('/sauces', route);

   route
      .get('/', isAuthenticated, SaucesController.listSauces)
      .post(
         '/',
         isAuthenticated,
         uploadMulter,
         parseSauce,
         validateInput,
         SaucesController.postSauce
      );

   route
      .get('/:id', isAuthenticated, SaucesController.getSauce)
      .delete('/:id', isAuthenticated, SaucesController.deleteSauce)
      .put(
         '/:id',
         isAuthenticated,
         uploadMulter,
         parseSauce,
         validateInput,
         SaucesController.updateSauce
      );

   route.post(
      '/:id/like',
      isAuthenticated,
      uploadMulter,
      SaucesController.likeSauce
   );

   return app;
}
