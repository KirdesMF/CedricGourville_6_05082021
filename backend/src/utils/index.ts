import { unlink } from 'fs';

export function deleteImageFromDisk(imageUrl: string, callback: any) {
   const url = imageUrl.split('/images/')[1];
   unlink(`images/${url}`, (err) => {
      if (err) throw err;
      callback();
   });
}
