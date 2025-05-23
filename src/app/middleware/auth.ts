import { NextFunction, Request, Response } from "express";
import { StatusCodes } from "http-status-codes";
import { AppError } from "../errors/AppError";
import { verifyAccessToken } from "../modules/auth/auth.utils";
import { TJwtPayload } from "../modules/auth/auth.interface";

export const auth = (...requiredRoles: string[]) => {
  return async (req: Request, _res: Response, next: NextFunction) => {
    try {
      // Get authorization header
      const token = req.headers.authorization;

      if (!token) {
        throw new AppError(StatusCodes.UNAUTHORIZED, "You are not authorized");
      }

      // Check if the token starts with 'Bearer '
      const tokenParts = token.split(" ");
      if (tokenParts.length !== 2 || tokenParts[0] !== "Bearer") {
        throw new AppError(StatusCodes.UNAUTHORIZED, "Invalid token format");
      }

      // Verify token
      const decoded = verifyAccessToken(tokenParts[1]) as TJwtPayload;

      // Check if the user's role is allowed
      if (requiredRoles.length && !requiredRoles.includes(decoded.role)) {
        throw new AppError(
          StatusCodes.FORBIDDEN,
          "You are not authorized to access this resource"
        );
      }

      // Set user in request object
      req.user = decoded;
      next();
    } catch (error) {
      next(error);
    }
  };
};
