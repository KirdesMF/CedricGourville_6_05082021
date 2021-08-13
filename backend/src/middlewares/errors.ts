import { NextFunction, Response, Request } from 'express';
import { httpStatus } from '../http-status/status';
import { ErrorType } from '../types';
import { ErrorHandler } from '../utils/error.utils';

export const errorLogger: ErrorType = (err, req, res, next) => {
   console.error(err);
   next(err);
};

export const errorResponder = (
   err: ErrorHandler,
   req: Request,
   res: Response,
   next: NextFunction
) => {
   const status = err.status || httpStatus.serverError;
   const message = err.message || 'Something went wrong';

   res.status(status).send({ status, message });
};

export const errorServer: ErrorType = (err, req, res, next) => {
   return res.status(500).send(err);
};
