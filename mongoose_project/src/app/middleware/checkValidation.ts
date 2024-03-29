import { NextFunction, Request, Response } from 'express';
import { AnyZodObject } from 'zod';

const checkValidation = (schema: AnyZodObject) => {
  return async (req: Request, res: Response, next: NextFunction) => {
    // console.log('firstValidation', name);

    // validation error
    try {
      await schema.parseAsync({
        body: req.body,
      });
      return next();
    } catch (error) {
      next(error);
      console.log(error);
    }
  };
};

export default checkValidation;
