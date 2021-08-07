import { Request, Response, NextFunction } from 'express';
import dotenv from 'dotenv';

dotenv.config();

export const env = {
   port: process.env.PORT || 3000,
};

export async function setHeaders(
   req: Request,
   res: Response,
   next: NextFunction
) {
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
}
