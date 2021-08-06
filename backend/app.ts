import express from 'express';
import dotenv from 'dotenv';
import { router } from 'api/routes/fakeRoute';

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

app.use(router);
app.listen(port, () => console.log(`API hosted: http://localhost:${port}`));
