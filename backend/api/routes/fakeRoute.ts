import express from 'express';
import { fakesSauces } from 'api/models/fakeData';

const router = express.Router();

router.post('/api/auth/login', (req, res) => {
   console.log(req.params);
   return res.send({ userId: '', token: '' });
});

router.get('/api/sauces', (req, res) => {
   res.send(fakesSauces);
});

router.get('/api/sauces:id', (req, res) => {
   const id = req.params.id;
   const sauce = fakesSauces.find((sauce) => sauce.userId === id);
   res.send(sauce);
});

export { router };
