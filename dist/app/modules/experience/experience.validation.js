"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.updateExperienceValidationSchema = exports.createExperienceValidationSchema = void 0;
const zod_1 = require("zod");
exports.createExperienceValidationSchema = zod_1.z.object({
    body: zod_1.z.object({
        company: zod_1.z.string({
            required_error: 'Company name is required',
        }),
        position: zod_1.z.string({
            required_error: 'Position is required',
        }),
        location: zod_1.z.string({
            required_error: 'Location is required',
        }),
        location_type: zod_1.z.enum(['on-site', 'remote', 'hybrid'], {
            required_error: 'Location type is required',
        }),
        employment_type: zod_1.z.enum(['full-time', 'part-time', 'contract', 'internship', 'freelance'], {
            required_error: 'Employment type is required',
        }),
        start_date: zod_1.z.string({
            required_error: 'Start date is required',
        }),
        end_date: zod_1.z.string().optional(),
        is_current: zod_1.z.boolean().default(false),
        description: zod_1.z.string({
            required_error: 'Description is required',
        }),
        responsibilities: zod_1.z.array(zod_1.z.string(), {
            required_error: 'At least one responsibility is required',
        }),
        technologies_used: zod_1.z.array(zod_1.z.string(), {
            required_error: 'At least one technology is required',
        }),
        company_logo: zod_1.z.string().optional(),
        company_website: zod_1.z.string().optional(),
        achievements: zod_1.z.array(zod_1.z.string()).optional(),
    }),
});
exports.updateExperienceValidationSchema = zod_1.z.object({
    body: zod_1.z.object({
        company: zod_1.z.string().optional(),
        position: zod_1.z.string().optional(),
        location: zod_1.z.string().optional(),
        location_type: zod_1.z.enum(['on-site', 'remote', 'hybrid']).optional(),
        employment_type: zod_1.z.enum(['full-time', 'part-time', 'contract', 'internship', 'freelance']).optional(),
        start_date: zod_1.z.string().optional(),
        end_date: zod_1.z.string().optional(),
        is_current: zod_1.z.boolean().optional(),
        description: zod_1.z.string().optional(),
        responsibilities: zod_1.z.array(zod_1.z.string()).optional(),
        technologies_used: zod_1.z.array(zod_1.z.string()).optional(),
        company_logo: zod_1.z.string().optional(),
        company_website: zod_1.z.string().optional(),
        achievements: zod_1.z.array(zod_1.z.string()).optional(),
    }),
});
