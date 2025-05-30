"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.updateProjectValidationSchema = exports.createProjectValidationSchema = void 0;
const zod_1 = require("zod");
const technologyValidationSchema = zod_1.z.object({
    name: zod_1.z.string({
        required_error: 'Technology name is required',
    }),
});
exports.createProjectValidationSchema = zod_1.z.object({
    body: zod_1.z.object({
        name: zod_1.z.string({
            required_error: 'Project name is required',
        }),
        short_description: zod_1.z.string({
            required_error: 'Short description is required',
        }),
        description: zod_1.z.string({
            required_error: 'Description is required',
        }),
        image: zod_1.z.string({
            required_error: 'Image URL is required',
        }),
        technology_used: zod_1.z.array(technologyValidationSchema, {
            required_error: 'Technology used is required',
        }),
        github_link_client: zod_1.z.string().optional(),
        github_link_server: zod_1.z.string().optional(),
        live_link_client: zod_1.z.string().optional(),
        live_link_server: zod_1.z.string().optional(),
        status: zod_1.z.enum(['ongoing', 'completed']).optional(),
    }),
});
exports.updateProjectValidationSchema = zod_1.z.object({
    body: zod_1.z.object({
        name: zod_1.z.string().optional(),
        short_description: zod_1.z.string().optional(),
        description: zod_1.z.string().optional(),
        image: zod_1.z.string().optional(),
        technology_used: zod_1.z.array(technologyValidationSchema).optional(),
        github_link_client: zod_1.z.string().optional(),
        github_link_server: zod_1.z.string().optional(),
        live_link_client: zod_1.z.string().optional(),
        live_link_server: zod_1.z.string().optional(),
        status: zod_1.z.enum(['ongoing', 'completed']).optional(),
    }),
});
