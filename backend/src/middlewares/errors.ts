import { ErrorType } from '../types';

export const errorLogger: ErrorType = (err, req, res, next) => {
   console.log(err);
};

export const errorServer: ErrorType = (err, req, res, next) => {
   res.status(500).json({ error: err });
};
