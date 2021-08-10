import { Request, Response, NextFunction, ErrorRequestHandler } from 'express';
import { Document } from 'mongoose';

export type MiddlewareType<T = void> = (
   req: Request,
   res: Response,
   next: NextFunction
) => Promise<T[] & Document> | any;

export type ErrorType = (
   err: ErrorRequestHandler,
   req: Request,
   res: Response,
   next: NextFunction
) => Promise<void> | void;
