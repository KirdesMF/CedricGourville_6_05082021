import { Router } from 'express';
import { checkSchema } from 'express-validator';
import { SaucesController } from '../../api/controllers/sauces.controller';
import { isAuthenticated } from '../../middlewares/isAuth';
import { uploadMulter } from '../../middlewares/multer';
import { parseSauce } from '../../middlewares/parse';
import {
   sauceValidatorSchema,
   validateInputSauce,
} from '../../middlewares/validator';

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
         checkSchema(sauceValidatorSchema),
         validateInputSauce,
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
         checkSchema(sauceValidatorSchema),
         validateInputSauce,
         SaucesController.updateSauce
      );

   route.post('/:id/like', isAuthenticated, SaucesController.likeSauce);

   return app;
}
