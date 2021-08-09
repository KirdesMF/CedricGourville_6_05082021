import { Request, Response, NextFunction, ErrorRequestHandler } from 'express';

export type MiddlewareType = {
   err: ErrorRequestHandler;
   req: Request;
   res: Response;
   next: NextFunction;
};
