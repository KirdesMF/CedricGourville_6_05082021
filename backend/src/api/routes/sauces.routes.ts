import { Router } from 'express';
import { sauces } from '../../api/controllers/sauces.controller';

const route = Router();

export function saucesRouter(app: Router) {
   app.use('/sauces', route);

   route.get('/', sauces.getAllSauces);
   route.post('/', sauces.postSauce);

   route.get('/:id', sauces.getSauce);
   route.put('/:id', sauces.updateSauce);
   route.delete('/:id', sauces.deleteSauce);

   route.post('/:id/like', sauces.likeSauce);

   return app;
}
