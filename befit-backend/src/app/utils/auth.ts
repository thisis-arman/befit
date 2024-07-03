import e, { NextFunction, Request, Response } from "express"
import catchAsync from "./catchAsync"
import { JwtPayload } from "jsonwebtoken";
import httpStatus from "http-status";
import jwt from 'jsonwebtoken'
import config from "../config";
import { AppError } from "../errors/AppError";
import { User } from "../modules/user/user.model";



const auth = (...requiredRoles:string[]) => {
    return catchAsync(async (req: Request, res: Response, next: NextFunction) => {
      const headersToken = req.headers.authorization;

      const token = headersToken?.split(' ')[1];

      
      console.log({token});
       

         if (!token) {
           throw new AppError(httpStatus.UNAUTHORIZED, "Unauthorized request");
         }

         const decoded = jwt.verify(
           token,
           config.jwt_access_token as string
         ) as JwtPayload;

         const { email, role } = decoded;

         const user = await User.isUserExists(email);

         if (!user) {
           throw new AppError(
             httpStatus.NOT_FOUND,
             `User ${email} does not exist`
           );
         }

         const isDeleted = user.isDeleted;
         if (isDeleted) {
           throw new AppError(
             httpStatus.FORBIDDEN,
             `this User is already deleted`
           );
         }

       

         if (requiredRoles && !requiredRoles.includes(role)) {
           throw new AppError(
             httpStatus.UNAUTHORIZED,
             "You have no access to this route"
           );
        }
        

         req.user = decoded as JwtPayload;

         next();
        
        
    })
}


export default auth;