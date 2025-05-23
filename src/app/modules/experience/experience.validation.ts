import { z } from 'zod';

export const createExperienceValidationSchema = z.object({
  body: z.object({
    company: z.string({
      required_error: 'Company name is required',
    }),
    position: z.string({
      required_error: 'Position is required',
    }),
    location: z.string({
      required_error: 'Location is required',
    }),
    location_type: z.enum(['on-site', 'remote', 'hybrid'], {
      required_error: 'Location type is required',
    }),
    employment_type: z.enum(['full-time', 'part-time', 'contract', 'internship', 'freelance'], {
      required_error: 'Employment type is required',
    }),
    start_date: z.string({
      required_error: 'Start date is required',
    }),
    end_date: z.string().optional(),
    is_current: z.boolean().default(false),
    description: z.string({
      required_error: 'Description is required',
    }),
    responsibilities: z.array(z.string(), {
      required_error: 'At least one responsibility is required',
    }),
    technologies_used: z.array(z.string(), {
      required_error: 'At least one technology is required',
    }),
    company_logo: z.string().optional(),
    company_website: z.string().optional(),
    achievements: z.array(z.string()).optional(),
  }),
});

export const updateExperienceValidationSchema = z.object({
  body: z.object({
    company: z.string().optional(),
    position: z.string().optional(),
    location: z.string().optional(),
    location_type: z.enum(['on-site', 'remote', 'hybrid']).optional(),
    employment_type: z.enum(['full-time', 'part-time', 'contract', 'internship', 'freelance']).optional(),
    start_date: z.string().optional(),
    end_date: z.string().optional(),
    is_current: z.boolean().optional(),
    description: z.string().optional(),
    responsibilities: z.array(z.string()).optional(),
    technologies_used: z.array(z.string()).optional(),
    company_logo: z.string().optional(),
    company_website: z.string().optional(),
    achievements: z.array(z.string()).optional(),
  }),
}); 