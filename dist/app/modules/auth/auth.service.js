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
exports.AuthService = void 0;
const http_status_codes_1 = require("http-status-codes");
const AppError_1 = require("../../errors/AppError");
const auth_model_1 = require("./auth.model");
const auth_utils_1 = require("./auth.utils");
// Register a new user
const registerUser = (payload) => __awaiter(void 0, void 0, void 0, function* () {
    // Check if user already exists
    const existingUser = yield auth_model_1.User.findOne({ email: payload.email });
    if (existingUser) {
        throw new AppError_1.AppError(http_status_codes_1.StatusCodes.CONFLICT, 'User already exists with this email');
    }
    // Create new user
    const result = yield auth_model_1.User.create(payload);
    return result;
});
// Get all users
const getAllUsers = () => __awaiter(void 0, void 0, void 0, function* () {
    const result = yield auth_model_1.User.find();
    return result;
});
// Login user
const loginUser = (payload) => __awaiter(void 0, void 0, void 0, function* () {
    // Find user with email
    const user = yield auth_model_1.User.findOne({ email: payload.email }).select('+password');
    if (!user) {
        throw new AppError_1.AppError(http_status_codes_1.StatusCodes.NOT_FOUND, 'User not found');
    }
    // Check if password is correct
    const isPasswordMatched = yield user.isPasswordMatched(payload.password);
    if (!isPasswordMatched) {
        throw new AppError_1.AppError(http_status_codes_1.StatusCodes.UNAUTHORIZED, 'Invalid credentials');
    }
    // Create access and refresh tokens
    const accessToken = (0, auth_utils_1.createAccessToken)(user.email, user.role);
    const refreshToken = (0, auth_utils_1.createRefreshToken)(user.email, user.role);
    return {
        accessToken,
        refreshToken,
        // user: {
        //   name: user.name,
        //   email: user.email,
        //   role: user.role,
        // },
    };
});
// Refresh token
const refreshToken = (token) => __awaiter(void 0, void 0, void 0, function* () {
    try {
        // Verify refresh token
        const decoded = (0, auth_utils_1.verifyRefreshToken)(token);
        // Check if user exists
        const user = yield auth_model_1.User.findOne({ email: decoded.email });
        if (!user) {
            throw new AppError_1.AppError(http_status_codes_1.StatusCodes.NOT_FOUND, 'User not found');
        }
        // Create new access token
        const accessToken = (0, auth_utils_1.createAccessToken)(user.email, user.role);
        return {
            accessToken,
        };
    }
    catch (error) {
        throw new AppError_1.AppError(http_status_codes_1.StatusCodes.UNAUTHORIZED, 'Invalid refresh token');
    }
});
// Delete a user
const deleteUser = (userId) => __awaiter(void 0, void 0, void 0, function* () {
    const user = yield auth_model_1.User.findByIdAndDelete(userId);
    if (!user) {
        throw new AppError_1.AppError(http_status_codes_1.StatusCodes.NOT_FOUND, 'User not found');
    }
    return user;
});
exports.AuthService = {
    registerUser,
    getAllUsers,
    loginUser,
    refreshToken,
    deleteUser,
};
