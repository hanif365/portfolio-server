"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.updateSkillValidationSchema = exports.createSkillValidationSchema = void 0;
const zod_1 = require("zod");
exports.createSkillValidationSchema = zod_1.z.object({
    body: zod_1.z.object({
        name: zod_1.z.string({
            required_error: 'Skill name is required',
        }),
        image: zod_1.z.string({
            required_error: 'Image URL is required',
        }),
        short_description: zod_1.z.string({
            required_error: 'Short description is required',
        }),
        experience_years: zod_1.z.number({
            required_error: 'Experience years is required',
        }),
        level: zod_1.z.enum(['beginner', 'intermediate', 'advanced', 'expert'], {
            required_error: 'Skill level is required',
        }),
        category: zod_1.z.enum(['frontend', 'backend', 'database', 'devops', 'mobile', 'design', 'other'], {
            required_error: 'Skill category is required',
        }),
        proficiency_percentage: zod_1.z.number().min(0).max(100).optional(),
        is_featured: zod_1.z.boolean().optional().default(false),
    }),
});
exports.updateSkillValidationSchema = zod_1.z.object({
    body: zod_1.z.object({
        name: zod_1.z.string().optional(),
        image: zod_1.z.string().optional(),
        short_description: zod_1.z.string().optional(),
        experience_years: zod_1.z.number().optional(),
        level: zod_1.z.enum(['beginner', 'intermediate', 'advanced', 'expert']).optional(),
        category: zod_1.z.enum(['frontend', 'backend', 'database', 'devops', 'mobile', 'design', 'other']).optional(),
        proficiency_percentage: zod_1.z.number().min(0).max(100).optional(),
        is_featured: zod_1.z.boolean().optional(),
    }),
});
