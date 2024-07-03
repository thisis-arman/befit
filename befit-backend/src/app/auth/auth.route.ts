import express from 'express';
import { AuthController } from './auth.controller';
import { AuthValidations } from './auth.validation';
import validateRequest from '../middlewares/validateRequest';
import { USER_ROLE } from '../modules/user/user.constant';
import Auth from '../middlewares/Auth';


const router = express.Router();


router.post('/login',validateRequest(AuthValidations.AuthValidation),AuthController.loginUser)

router.post(
  "/change-password",
  Auth(USER_ROLE.admin, ),
  validateRequest(AuthValidations.changePasswordValidation),
  AuthController.changePassword
);


export const AuthRoutes = router;