import { auth } from '@api/controllers/auth.controller';
import express from 'express';

const authRouter = express.Router();

authRouter.post('/auth/signup', auth.signup);
authRouter.post('/auth/login', auth.login);

export default authRouter;
