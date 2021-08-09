import { MiddlewareType } from '../types';

export function errorLogger(params: MiddlewareType) {
   const { err } = params;
   console.log(err);
}

export function errorServer(params: MiddlewareType) {
   const { err, res } = params;
   res.status(500).json({ error: err });
}
