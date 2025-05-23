import { Model } from 'mongoose';

export type TProjectStatus = 'ongoing' | 'completed';

export type TTechnology = {
  name: string;
};

export type TProject = {
  name: string;
  short_description: string;
  description: string;
  image: string;
  technology_used: TTechnology[];
  github_link_client?: string;
  github_link_server?: string;
  live_link_client?: string;
  live_link_server?: string;
  status: TProjectStatus;
  created_at: Date;
  updated_at: Date;
};

export type ProjectModel = Model<TProject, Record<string, unknown>>;
