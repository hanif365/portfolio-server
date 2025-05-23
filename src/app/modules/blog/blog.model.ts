import { Schema, model } from 'mongoose';
import { BlogModel, TBlog, TBlogStatus } from './blog.interface';

const hashtagSchema = new Schema({
  name: {
    type: String,
    required: true,
  },
});

const blogSchema = new Schema<TBlog>(
  {
    name: {
      type: String,
      required: true,
      unique: true,
    },
    image: {
      type: String,
      required: true,
    },
    short_description: {
      type: String,
      required: true,
    },
    description: {
      type: String,
      required: true,
    },
    hashtags: {
      type: [hashtagSchema],
      required: true,
    },
    live_link: {
      type: String,
    },
    status: {
      type: String,
      enum: ['draft', 'published'] as TBlogStatus[],
      default: 'draft',
      required: true,
    },
  },
  {
    timestamps: {
      createdAt: 'created_at',
      updatedAt: 'updated_at',
    },
    toJSON: {
      virtuals: true,
    },
  },
);

export const Blog = model<TBlog, BlogModel>('Blog', blogSchema); 