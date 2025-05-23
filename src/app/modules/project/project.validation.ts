import { z } from 'zod';

const technologyValidationSchema = z.object({
  name: z.string({
    required_error: 'Technology name is required',
  }),
});

export const createProjectValidationSchema = z.object({
  body: z.object({
    name: z.string({
      required_error: 'Project name is required',
    }),
    short_description: z.string({
      required_error: 'Short description is required',
    }),
    description: z.string({
      required_error: 'Description is required',
    }),
    image: z.string({
      required_error: 'Image URL is required',
    }),
    technology_used: z.array(technologyValidationSchema, {
      required_error: 'Technology used is required',
    }),
    github_link_client: z.string().optional(),
    github_link_server: z.string().optional(),
    live_link_client: z.string().optional(),
    live_link_server: z.string().optional(),
    status: z.enum(['ongoing', 'completed']).optional(),
  }),
});

export const updateProjectValidationSchema = z.object({
  body: z.object({
    name: z.string().optional(),
    short_description: z.string().optional(),
    description: z.string().optional(),
    image: z.string().optional(),
    technology_used: z.array(technologyValidationSchema).optional(),
    github_link_client: z.string().optional(),
    github_link_server: z.string().optional(),
    live_link_client: z.string().optional(),
    live_link_server: z.string().optional(),
    status: z.enum(['ongoing', 'completed']).optional(),
  }),
});
