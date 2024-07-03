import { NextFunction, Request, Response } from "express";
import { AnyZodObject } from "zod";

const validateRequest = (schema: AnyZodObject) => {
  return async (req: Request, res: Response, next: NextFunction) => {
    console.log("validate Request",  req.body );

    try {
      await schema.parseAsync(  req.body );
      next();
    } catch (error) {
      next(error);
    }
  };
};

export default validateRequest;
