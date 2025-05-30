import jwt, { JwtPayload, SignOptions } from 'jsonwebtoken';
import { TJwtPayload, TRole } from './auth.interface';
import config from '../../config';

// Create access token
export const createAccessToken = (
  email: string,
  role: TRole,
): string => {
  const payload: TJwtPayload = {
    email,
    role,
  };

  const options: SignOptions = {
    expiresIn: config.jwt_access_expires_in as any,
  };

  return jwt.sign(payload, config.jwt_access_secret as string, options);
};

// Create refresh token
export const createRefreshToken = (
  email: string,
  role: TRole,
): string => {
  const payload: TJwtPayload = {
    email,
    role,
  };

  const options: SignOptions = {
    expiresIn: config.jwt_refresh_expires_in as any,
  };

  return jwt.sign(payload, config.jwt_refresh_secret as string, options);
};

// Verify access token
export const verifyAccessToken = (token: string): JwtPayload => {
  return jwt.verify(token, config.jwt_access_secret as string) as JwtPayload;
};

// Verify refresh token
export const verifyRefreshToken = (token: string): JwtPayload => {
  return jwt.verify(token, config.jwt_refresh_secret as string) as JwtPayload;
}; 