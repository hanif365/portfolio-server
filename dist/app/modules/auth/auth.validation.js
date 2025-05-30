"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.registerUserValidationSchema = exports.refreshTokenValidationSchema = exports.loginValidationSchema = void 0;
const zod_1 = require("zod");
exports.loginValidationSchema = zod_1.z.object({
    body: zod_1.z.object({
        email: zod_1.z.string({
            required_error: 'Email is required',
        }).email('Invalid email format'),
        password: zod_1.z.string({
            required_error: 'Password is required',
        }),
    }),
});
exports.refreshTokenValidationSchema = zod_1.z.object({
    cookies: zod_1.z.object({
        refreshToken: zod_1.z.string({
            required_error: 'Refresh token is required',
        }),
    }),
});
exports.registerUserValidationSchema = zod_1.z.object({
    body: zod_1.z.object({
        name: zod_1.z.string({
            required_error: 'Name is required',
        }),
        email: zod_1.z.string({
            required_error: 'Email is required',
        }).email('Invalid email format'),
        password: zod_1.z.string({
            required_error: 'Password is required',
        }).min(6, 'Password must be at least 6 characters'),
        role: zod_1.z.enum(['admin', 'user']).default('user').optional(),
    }),
});
