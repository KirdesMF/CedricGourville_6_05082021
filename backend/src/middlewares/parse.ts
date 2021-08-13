import { NextFunction, Request, Response } from 'express';

export const parseSauce = (req: Request, res: Response, next: NextFunction) => {
   if (!req.body.sauce) return next();
   req.body = JSON.parse(req.body.sauce);
   next();
};
