import { NextFunction, Request, Response } from 'express';
import { Schema, validationResult } from 'express-validator';
import fs from 'fs';
import { httpStatus } from '../http-status/status';
import { ErrorHandler } from '../utils/error.utils';

export const userValidatorSchema: Schema = {
   email: {
      in: 'body',
      notEmpty: true,
      normalizeEmail: true,
      isEmail: {
         bail: true,
      },
      errorMessage: '❌ Invalid email',
   },
   password: {
      in: 'body',
      isLength: {
         errorMessage:
            '❌ Please provide a strong password at least 6 characters',
         options: {
            min: 6,
         },
      },
   },
};

export const sauceValidatorSchema: Schema = {
   name: {
      in: 'body',
      notEmpty: true,
      isLength: {
         errorMessage: '❌ Name should at least contain 2 characters',
         options: {
            min: 2,
         },
      },
   },
   manufacturer: {
      in: 'body',
      notEmpty: true,
      isLength: {
         errorMessage: '❌ Manufacturer should at least contain 2 characters',
         options: {
            min: 2,
         },
      },
   },
   description: {
      in: 'body',
      notEmpty: true,
      isLength: {
         errorMessage:
            '❌ Description should at least contain 2 characters and less than 60 characters',
         options: {
            min: 2,
            max: 60,
         },
      },
   },
   mainPepper: {
      in: 'body',
      notEmpty: true,
      isLength: {
         errorMessage: '❌ Main Pepper should at least contain 2 characters',
         options: {
            min: 2,
         },
      },
   },
};

export const validateInputLog = (
   req: Request,
   res: Response,
   next: NextFunction
) => {
   const errors = validationResult(req);
   if (!errors.isEmpty()) {
      return res.status(httpStatus.badRequest).json({
         errors: errors.throw(),
      });
   }
   next();
};

export const validateInputSauce = (
   req: Request,
   res: Response,
   next: NextFunction
) => {
   const errors = validationResult(req);
   if (!errors.isEmpty()) {
      if (req.file) {
         fs.unlink(req.file.path, (err) => {
            if (err) console.log(err);
            console.log('✔ Succesfully deleted');
         });
      }

      next(
         new ErrorHandler(
            httpStatus.badRequest,
            '❌ Something is going wrong',
            errors.array()
         )
      );
   }
   next();
};
