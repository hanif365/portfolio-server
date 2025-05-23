import { z } from 'zod';

const hashtagValidationSchema = z.object({
  name: z.string({
    required_error: 'Hashtag name is required',
  }),
});

export const createBlogValidationSchema = z.object({
  body: z.object({
    name: z.string({
      required_error: 'Blog name is required',
    }),
    image: z.string({
      required_error: 'Image URL is required',
    }),
    short_description: z.string({
      required_error: 'Short description is required',
    }),
    description: z.string({
      required_error: 'Description is required',
    }),
    hashtags: z.array(hashtagValidationSchema, {
      required_error: 'Hashtags are required',
    }),
    live_link: z.string().optional(),
    status: z.enum(['draft', 'published']).optional(),
  }),
});

export const updateBlogValidationSchema = z.object({
  body: z.object({
    name: z.string().optional(),
    image: z.string().optional(),
    short_description: z.string().optional(),
    description: z.string().optional(),
    hashtags: z.array(hashtagValidationSchema).optional(),
    live_link: z.string().optional(),
    status: z.enum(['draft', 'published']).optional(),
  }),
}); 