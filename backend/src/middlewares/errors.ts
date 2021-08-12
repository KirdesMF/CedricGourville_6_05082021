import { ErrorType } from '../types';

export const errorLogger: ErrorType = (err, req, res, next) => {
   console.error(err);
   next(err);
};

export const errorServer: ErrorType = (err, req, res, next) => {
   return res.status(500).send(err);
};
