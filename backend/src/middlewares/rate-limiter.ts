import { NextFunction, Request, Response } from 'express';
import { RateLimiterMemory, IRateLimiterOptions } from 'rate-limiter-flexible';
import { httpStatus } from '../http-status/status';
import { ErrorHandler } from '../utils/error.utils';

const opts: IRateLimiterOptions = {
   points: 5, // 5 points
   duration: 1, // Per second
   blockDuration: 300, // block for 5 minutes if more than points consumed
};

const rateLimiter = new RateLimiterMemory(opts);

export const rateLimiterMiddleware = async (
   req: Request,
   res: Response,
   next: NextFunction
) => {
   // Consume 1 point for each request
   await rateLimiter
      .consume(req.ip)
      .catch(() =>
         next(new ErrorHandler(httpStatus.tooManyRequests, 'Too many requests'))
      );
   next();
};
