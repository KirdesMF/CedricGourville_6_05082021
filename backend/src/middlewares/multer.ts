import multer from 'multer';
import { ErrorHandler } from '../utils/error.utils';

const storage = multer.diskStorage({
   destination: function (req, file, cb) {
      cb(null, 'images');
   },
   filename: function (req, file, cb) {
      const name = file.originalname.split('.')[0];
      const extension = file.mimetype.split('/')[1];
      const fileName = `${name}-${Date.now()}.${extension}`;

      cb(null, fileName);
   },
});

// TODO add filter to handle erro image ( size , format ...)
export const uploadMulter = multer({
   storage: storage,
   limits: { fileSize: 2e6 },
   fileFilter: (req, file, cb) => {
      const allowedExtensions = /.(jpg|png|jpeg)$/gi;
      if (!allowedExtensions.test(file.originalname)) {
         return cb(new ErrorHandler(400, '❌ Only jpg,jpeg,png are allowed'));
      }
      cb(null, true);
   },
}).single('image');
