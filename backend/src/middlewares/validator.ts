import { NextFunction, Request, Response } from 'express';
import { Schema } from 'express-validator';
import fs from 'fs';

export const loginSchemaValidator: Schema = {
   email: {
      isEmail: true,
      notEmpty: true,
      errorMessage: '❌ Please provide an email',
   },
   password: {
      notEmpty: true,
      isLength: {
         options: { min: 8 },
         errorMessage: '❌ Password should contain at least 8 characters',
      },
   },
};

export const sauceValidatorMulter: Schema = {
   'sauce.name': {
      isLength: {
         options: { min: 2 },
      },
      errorMessage: '❌ Please provide an email',
   },
};

export const validateInput = (
   req: Request,
   res: Response,
   next: NextFunction
) => {
   try {
      if (req.body.sauce) {
         checkInputs(req.body.sauce);
         return next();
      }

      checkInputs(req.body);
      next();
   } catch (err) {
      if (req.body.sauce) {
         fs.unlink(req.file!.path, (err) => {
            if (err) return err;
            console.log('✔ Succesfully deleted');
         });
      }

      res.status(400).send(err);
   }
};

export const parseSauce = (req: Request, res: Response, next: NextFunction) => {
   if (!req.body.sauce) return next();
   req.body.sauce = JSON.parse(req.body.sauce);
   next();
};

// TODO improve checking inputs
export const checkInputs = (obj: Record<string, string>) => {
   if (obj.name.length <= 1) {
      throw new Error('error name');
   }
};
