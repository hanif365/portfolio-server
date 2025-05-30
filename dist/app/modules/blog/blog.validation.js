"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.updateBlogValidationSchema = exports.createBlogValidationSchema = void 0;
const zod_1 = require("zod");
const hashtagValidationSchema = zod_1.z.object({
    name: zod_1.z.string({
        required_error: 'Hashtag name is required',
    }),
});
exports.createBlogValidationSchema = zod_1.z.object({
    body: zod_1.z.object({
        name: zod_1.z.string({
            required_error: 'Blog name is required',
        }),
        image: zod_1.z.string({
            required_error: 'Image URL is required',
        }),
        short_description: zod_1.z.string({
            required_error: 'Short description is required',
        }),
        description: zod_1.z.string({
            required_error: 'Description is required',
        }),
        hashtags: zod_1.z.array(hashtagValidationSchema, {
            required_error: 'Hashtags are required',
        }),
        live_link: zod_1.z.string().optional(),
        status: zod_1.z.enum(['draft', 'published']).optional(),
    }),
});
exports.updateBlogValidationSchema = zod_1.z.object({
    body: zod_1.z.object({
        name: zod_1.z.string().optional(),
        image: zod_1.z.string().optional(),
        short_description: zod_1.z.string().optional(),
        description: zod_1.z.string().optional(),
        hashtags: zod_1.z.array(hashtagValidationSchema).optional(),
        live_link: zod_1.z.string().optional(),
        status: zod_1.z.enum(['draft', 'published']).optional(),
    }),
});
