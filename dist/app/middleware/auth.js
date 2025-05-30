"use strict";
var __awaiter = (this && this.__awaiter) || function (thisArg, _arguments, P, generator) {
    function adopt(value) { return value instanceof P ? value : new P(function (resolve) { resolve(value); }); }
    return new (P || (P = Promise))(function (resolve, reject) {
        function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }
        function rejected(value) { try { step(generator["throw"](value)); } catch (e) { reject(e); } }
        function step(result) { result.done ? resolve(result.value) : adopt(result.value).then(fulfilled, rejected); }
        step((generator = generator.apply(thisArg, _arguments || [])).next());
    });
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.auth = void 0;
const http_status_codes_1 = require("http-status-codes");
const AppError_1 = require("../errors/AppError");
const auth_utils_1 = require("../modules/auth/auth.utils");
const auth = (...requiredRoles) => {
    return (req, _res, next) => __awaiter(void 0, void 0, void 0, function* () {
        try {
            // Get authorization header
            const token = req.headers.authorization;
            if (!token) {
                throw new AppError_1.AppError(http_status_codes_1.StatusCodes.UNAUTHORIZED, "You are not authorized");
            }
            // Check if the token starts with 'Bearer '
            const tokenParts = token.split(" ");
            if (tokenParts.length !== 2 || tokenParts[0] !== "Bearer") {
                throw new AppError_1.AppError(http_status_codes_1.StatusCodes.UNAUTHORIZED, "Invalid token format");
            }
            // Verify token
            const decoded = (0, auth_utils_1.verifyAccessToken)(tokenParts[1]);
            // Check if the user's role is allowed
            if (requiredRoles.length && !requiredRoles.includes(decoded.role)) {
                throw new AppError_1.AppError(http_status_codes_1.StatusCodes.FORBIDDEN, "You are not authorized to access this resource");
            }
            // Set user in request object
            req.user = decoded;
            next();
        }
        catch (error) {
            next(error);
        }
    });
};
exports.auth = auth;
