import express from 'express';
import { auth } from 'api/controllers/auth.controller';

const authRouter = express.Router();

authRouter.post('/auth/signup', auth.signup);
authRouter.post('/auth/login', auth.login);

export default authRouter;
