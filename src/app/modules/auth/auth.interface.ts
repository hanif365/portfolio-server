import { Model } from 'mongoose';
import { JwtPayload } from 'jsonwebtoken';

export type TRole = 'admin' | 'user';

export type TUser = {
  name: string;
  email: string;
  password: string;
  role: TRole;
  created_at: Date;
  updated_at: Date;
};

// Add document methods interface
export interface TUserMethods {
  isPasswordMatched(givenPassword: string): Promise<boolean>;
}

export type TLoginUser = {
  email: string;
  password: string;
};

export type TLoginResponse = {
  accessToken: string;
  refreshToken?: string;
  user?: {
    name: string;
    email: string;
    role: TRole;
  };
};

export type TRefreshTokenResponse = {
  accessToken: string;
};

export type TJwtPayload = JwtPayload & {
  email: string;
  role: TRole;
};

export type UserModel = Model<TUser, {}, TUserMethods>; 