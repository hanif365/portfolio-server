import { StatusCodes } from 'http-status-codes';
import { AppError } from '../../errors/AppError';
import { TBlog } from './blog.interface';
import { Blog } from './blog.model';

// Create a new blog
const createBlog = async (payload: TBlog) => {
  const result = await Blog.create(payload);
  return result;
};

// Get all blogs
const getAllBlogs = async () => {
  const result = await Blog.find();
  return result;
};

// Get a single blog by ID
const getSingleBlog = async (id: string) => {
  const result = await Blog.findById(id);
  
  if (!result) {
    throw new AppError(StatusCodes.NOT_FOUND, 'Blog not found');
  }
  
  return result;
};

// Update a blog
const updateBlog = async (id: string, payload: Partial<TBlog>) => {
  const exists = await Blog.findById(id);
  
  if (!exists) {
    throw new AppError(StatusCodes.NOT_FOUND, 'Blog not found');
  }

  const result = await Blog.findByIdAndUpdate(
    id,
    { $set: payload },
    { new: true, runValidators: true },
  );
  
  return result;
};

// Delete a blog
const deleteBlog = async (id: string) => {
  const result = await Blog.findByIdAndDelete(id);
  
  if (!result) {
    throw new AppError(StatusCodes.NOT_FOUND, 'Blog not found');
  }
  
  return result;
};

export const BlogService = {
  createBlog,
  getAllBlogs,
  getSingleBlog,
  updateBlog,
  deleteBlog,
}; 