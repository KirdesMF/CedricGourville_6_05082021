import express from 'express';
import dotenv from 'dotenv';

dotenv.config();

const port = process.env.PORT || 3000;
const app = express();

app.use((req, res, next) => {
   res.setHeader('Access-Control-Allow-Origin', '*');
   res.setHeader(
      'Access-Control-Allow-Headers',
      'Origin, X-Requested-With, Content, Accept, Content-Type, Authorization'
   );
   res.setHeader(
      'Access-Control-Allow-Methods',
      'GET, POST, PUT, DELETE, PATCH, OPTIONS'
   );
   next();
});

app.get('/', (req, res) => res.send('Hello'));
app.post('/api/auth/login', (req, res) => {
   console.log(req.params);
   return res.send({ userId: '', token: '' });
});

const fakeSauce = {
   userId: '123',
   name: 'fake',
   manufacturer: 'fakeManu',
   description: 'lorem',
   mainPepper: '',
   imageUrl: '',
   heat: 2,
   likes: 12,
   dislikes: 20,
   usersLiked: ['123', '245'],
   usersDislikes: ['589', '789'],
};
app.get('/api/sauces', (req, res) => {
   res.send([fakeSauce]);
});
app.listen(port, () => console.log(`API hosted: http://localhost:${port}`));
