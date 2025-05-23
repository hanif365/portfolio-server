import express from 'express';
import { BlogController } from './blog.controller';
import validateRequest from '../../middleware/validateRequest';
import { createBlogValidationSchema, updateBlogValidationSchema } from './blog.validation';

const router = express.Router();

// Create a new blog
router.post(
  '/',
  validateRequest(createBlogValidationSchema),
  BlogController.createBlog,
);

// Get all blogs
router.get('/', BlogController.getAllBlogs);

// Get a single blog
router.get('/:id', BlogController.getSingleBlog);

// Update a blog
router.patch(
  '/:id',
  validateRequest(updateBlogValidationSchema),
  BlogController.updateBlog,
);

// Delete a blog
router.delete('/:id', BlogController.deleteBlog);

export const BlogRoutes = router; 