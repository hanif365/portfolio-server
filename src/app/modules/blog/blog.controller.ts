import { Request, Response } from 'express';
import catchAsync from '../../utils/catchAsync';
import { BlogService } from './blog.service';
import { StatusCodes } from 'http-status-codes';
import sendResponse from '../../utils/sendResponse';

// Create a new blog
const createBlog = catchAsync(async (req: Request, res: Response) => {
  const result = await BlogService.createBlog(req.body);

  sendResponse(res, {
    success: true,
    statusCode: StatusCodes.CREATED,
    message: 'Blog created successfully',
    data: result,
  });
});

// Get all blogs
const getAllBlogs = catchAsync(async (req: Request, res: Response) => {
  const result = await BlogService.getAllBlogs();

  sendResponse(res, {
    success: true,
    statusCode: StatusCodes.OK,
    message: 'Blogs retrieved successfully',
    data: result,
  });
});

// Get a single blog
const getSingleBlog = catchAsync(async (req: Request, res: Response) => {
  const { id } = req.params;
  const result = await BlogService.getSingleBlog(id);

  sendResponse(res, {
    success: true,
    statusCode: StatusCodes.OK,
    message: 'Blog retrieved successfully',
    data: result,
  });
});

// Update a blog
const updateBlog = catchAsync(async (req: Request, res: Response) => {
  const { id } = req.params;
  const result = await BlogService.updateBlog(id, req.body);

  sendResponse(res, {
    success: true,
    statusCode: StatusCodes.OK,
    message: 'Blog updated successfully',
    data: result,
  });
});

// Delete a blog
const deleteBlog = catchAsync(async (req: Request, res: Response) => {
  const { id } = req.params;
  await BlogService.deleteBlog(id);

  sendResponse(res, {
    success: true,
    statusCode: StatusCodes.OK,
    message: 'Blog deleted successfully',
    data: null,
  });
});

export const BlogController = {
  createBlog,
  getAllBlogs,
  getSingleBlog,
  updateBlog,
  deleteBlog,
}; 