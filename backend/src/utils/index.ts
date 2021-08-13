import { unlink } from 'fs';
import { Request } from 'express-serve-static-core';
import jwt from 'jsonwebtoken';
import { SECRET } from '../config/config';

export function deleteImageFromDisk(imageUrl: string, callback: any) {
   const url = imageUrl.split('/images/')[1];
   unlink(`images/${url}`, (err) => {
      if (err) throw err;
      callback();
   });
}

export function getUserIdFromToken(req: Request) {
   const token = req.headers.authorization?.replace('Bearer ', '') as string;
   const decodedToken = jwt.verify(token, SECRET);
   const { userId } = decodedToken as { userId: string };

   return userId;
}
