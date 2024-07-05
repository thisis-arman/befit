import { Model } from "mongoose";
import { USER_ROLE } from "./user.constant";

interface TUser {
  firstName: string;
  lastName: string;
  contactNo: string;
  gender: "Male" | "Female" | "Other";
  address: string;                                                   
  username: string;
  email: string;
  password: string;
  role: "admin" | "trainer" | "member" | "user";
  isDeleted?: boolean;
};


export interface UserModel extends Model<TUser> {
  isUserExists(username: string): Promise<TUser>;
  isPasswordMatched(
    plainPassword: string,
    hashedPassword: string
  ): Promise<boolean>;

  isJWTIssuedBeforePasswordChanged(
    passwordChangedTimestamp: Date,
    jwtIssuedTimestamp: number
  ): boolean;
}


export type TUserRole = keyof typeof USER_ROLE;

export default TUser;


