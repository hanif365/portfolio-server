"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.verifyRefreshToken = exports.verifyAccessToken = exports.createRefreshToken = exports.createAccessToken = void 0;
const jsonwebtoken_1 = __importDefault(require("jsonwebtoken"));
const config_1 = __importDefault(require("../../config"));
// Create access token
const createAccessToken = (email, role) => {
    const payload = {
        email,
        role,
    };
    const options = {
        expiresIn: config_1.default.jwt_access_expires_in,
    };
    return jsonwebtoken_1.default.sign(payload, config_1.default.jwt_access_secret, options);
};
exports.createAccessToken = createAccessToken;
// Create refresh token
const createRefreshToken = (email, role) => {
    const payload = {
        email,
        role,
    };
    const options = {
        expiresIn: config_1.default.jwt_refresh_expires_in,
    };
    return jsonwebtoken_1.default.sign(payload, config_1.default.jwt_refresh_secret, options);
};
exports.createRefreshToken = createRefreshToken;
// Verify access token
const verifyAccessToken = (token) => {
    return jsonwebtoken_1.default.verify(token, config_1.default.jwt_access_secret);
};
exports.verifyAccessToken = verifyAccessToken;
// Verify refresh token
const verifyRefreshToken = (token) => {
    return jsonwebtoken_1.default.verify(token, config_1.default.jwt_refresh_secret);
};
exports.verifyRefreshToken = verifyRefreshToken;
