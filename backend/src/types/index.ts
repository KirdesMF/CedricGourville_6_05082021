import { Request, Response, NextFunction, ErrorRequestHandler } from 'express';
import { Document } from 'mongoose';

export type MiddlewareType<T> = (
   req: Request,
   res: Response,
   next: NextFunction
) => Promise<(T | (T[] & Document)) | undefined | void> | T;

export type ErrorType = (
   err: ErrorRequestHandler,
   req: Request,
   res: Response,
   next: NextFunction
) => Promise<void> | void;
