import { ValidationError } from 'express-validator';

export class ErrorHandler extends Error {
   status: number;
   message: string;
   validator?: ValidationError[];
   constructor(status: number, message: string, validator?: ValidationError[]) {
      super(message);
      this.status = status;
      this.message = message;
      this.validator = validator;
   }
}
