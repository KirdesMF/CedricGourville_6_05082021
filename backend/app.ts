import express from 'express';
import { setHeaders, env } from 'api/config/config';
import authRouter from 'api/routes/auth.routes';
import saucesRouter from 'api/routes/sauces.routes';

const { port } = env;
const app = express();

app.use(express.json());
app.use(express.urlencoded({ extended: true }));
app.use(setHeaders);

app.use('/api', authRouter);
app.use('/api', saucesRouter);

app.listen(port, () => console.log(`API hosted: http://localhost:${port}`));
