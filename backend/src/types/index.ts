import { Request, Response, NextFunction, ErrorRequestHandler } from 'express';

export type MiddlewareType = (
   req: Request,
   res: Response,
   next: NextFunction
) => Promise<void> | void;

export type ErrorType = (
   err: ErrorRequestHandler,
   req: Request,
   res: Response,
   next: NextFunction
) => Promise<void> | void;
