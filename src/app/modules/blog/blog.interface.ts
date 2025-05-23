import { Model } from 'mongoose';

export type TBlogStatus = 'draft' | 'published';

export type THashtag = {
  name: string;
};

export type TBlog = {
  name: string;
  image: string;
  short_description: string;
  description: string;
  hashtags: THashtag[];
  live_link?: string;
  status: TBlogStatus;
  created_at: Date;
  updated_at: Date;
};

export type BlogModel = Model<TBlog, Record<string, unknown>>; 