import multer from 'multer';

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

export const uploadMulter = multer({ storage }).single('image');
