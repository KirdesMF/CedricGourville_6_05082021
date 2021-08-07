import express from 'express';
import { sauces } from 'controllers/sauces.controller';

const saucesRouter = express.Router();

saucesRouter.get('/sauces', sauces.getAllSauces);
saucesRouter.post('/sauces', sauces.postSauce);

saucesRouter.get('sauces/:id', sauces.getSauce);
saucesRouter.put('/sauces/:id', sauces.updateSauce);
saucesRouter.delete('/sauces/:id', sauces.deleteSauce);

saucesRouter.post('/sauces/:id/like', sauces.likeSauce);

export default saucesRouter;
