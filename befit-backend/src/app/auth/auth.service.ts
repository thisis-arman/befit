import bcrypt from "bcrypt";
import httpStatus from "http-status";

import { TAuth } from "./auth.interface";
import jwt, { JwtPayload } from "jsonwebtoken";
import { createToken } from "./auth.utils";
import { User } from "../modules/user/user.model";
import { AppError } from "../errors/AppError";
import config from "../config";

const LoginUser = async (payload: TAuth) => {
  const user = await User.isUserExists(payload.username);

  if (!user) {
    throw new AppError(
      httpStatus.NOT_FOUND,
      `User ${payload.username} does not exist`
    );
  }

  const isDeleted = user.isDeleted;
  if (isDeleted) {
    throw new AppError(httpStatus.FORBIDDEN, `this User is already deleted`);
  }

  // const isStatusBlocked = user.status === "inactive";
  // if (isStatusBlocked) {
  //   throw new AppError(httpStatus.FORBIDDEN, `User is not active`);
  // }

  console.log("passwords", payload.password, user);

  const isPasswordMatched = await User.isPasswordMatched(
    payload.password,
    user.password
  );
  if (!isPasswordMatched) {
    throw new AppError(httpStatus.BAD_REQUEST, `Password does not match`);
  }

  const jwtPayload = {
    userId: user.username,
    role: user.role,
  };

  // Create access token

  const accessToken = createToken(
    jwtPayload,
    config.jwt_access_token as string,
    config.jwt_access_token_expires_in as string,
  );
  const refreshToken = createToken(
    jwtPayload,
    config.jwt_refresh_token as string,
    config.jwt_refresh_token_expires_in as string,
  );

 
  console.log({ accessToken });
  return {
    accessToken,
    refreshToken,\
  };
};

// !  change password Service

const changePassword = async (
  userData: JwtPayload,
  payload: { oldPassword: string; newPassword: string }
) => {
  console.log({ userData });
  const user = await User.isUserExists(userData.username);

  console.log({ user });
  if (!user) {
    throw new AppError(
      httpStatus.NOT_FOUND,
      `User ${userData.userId} does not exist`
    );
  }

  const isDeleted = user.isDeleted;
  if (isDeleted) {
    throw new AppError(httpStatus.FORBIDDEN, `this User is already deleted`);
  }

  // const isStatusBlocked = user.status === "blocked";
  // if (isStatusBlocked) {
  //   throw new AppError(httpStatus.FORBIDDEN, `User is already blocked`);
  // }

  const isPasswordMatched = await User.isPasswordMatched(
    payload.oldPassword,
    user.password
  );
  if (!isPasswordMatched) {
    throw new AppError(httpStatus.BAD_REQUEST, `Password does not match`);
  }

  if (
    user.passwordUpdatedAt &&
    User.isJWTIssuedBeforePasswordChanged(
      user.passwordUpdatedAt,
      userData.iat as number
    )
  ) {
    throw new AppError(httpStatus.UNAUTHORIZED, "You are not authorized !");
  }

  const newHashedPassword = await bcrypt.hash(
    payload.newPassword,
    Number(config.bcrypt_salt_rounds)
  );

  await User.findOneAndUpdate(
    { id: user.id, role: user.role },
    {
      password: newHashedPassword,
      needsPasswordChange: false,
      passwordUpdatedAt: new Date(),
    }
  );
};

export const AuthServices = {
  LoginUser,
  changePassword,
};
