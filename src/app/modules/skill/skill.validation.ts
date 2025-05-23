import { z } from 'zod';

export const createSkillValidationSchema = z.object({
  body: z.object({
    name: z.string({
      required_error: 'Skill name is required',
    }),
    image: z.string({
      required_error: 'Image URL is required',
    }),
    short_description: z.string({
      required_error: 'Short description is required',
    }),
    experience_years: z.number({
      required_error: 'Experience years is required',
    }),
    level: z.enum(['beginner', 'intermediate', 'advanced', 'expert'], {
      required_error: 'Skill level is required',
    }),
    category: z.enum(['frontend', 'backend', 'database', 'devops', 'mobile', 'design', 'other'], {
      required_error: 'Skill category is required',
    }),
    proficiency_percentage: z.number().min(0).max(100).optional(),
    is_featured: z.boolean().optional().default(false),
  }),
});

export const updateSkillValidationSchema = z.object({
  body: z.object({
    name: z.string().optional(),
    image: z.string().optional(),
    short_description: z.string().optional(),
    experience_years: z.number().optional(),
    level: z.enum(['beginner', 'intermediate', 'advanced', 'expert']).optional(),
    category: z.enum(['frontend', 'backend', 'database', 'devops', 'mobile', 'design', 'other']).optional(),
    proficiency_percentage: z.number().min(0).max(100).optional(),
    is_featured: z.boolean().optional(),
  }),
}); 