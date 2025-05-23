import { Schema, model } from 'mongoose';
import { ProjectModel, TProject, TProjectStatus } from './project.interface';

const technologySchema = new Schema({
  name: {
    type: String,
    required: true,
  },
});

const projectSchema = new Schema<TProject>(
  {
    name: {
      type: String,
      required: true,
      unique: true,
    },
    short_description: {
      type: String,
      required: true,
    },
    description: {
      type: String,
      required: true,
    },
    image: {
      type: String,
      required: true,
    },
    technology_used: {
      type: [technologySchema],
      required: true,
    },
    github_link_client: {
      type: String,
    },
    github_link_server: {
      type: String,
    },
    live_link_client: {
      type: String,
    },
    live_link_server: {
      type: String,
    },
    status: {
      type: String,
      enum: ['ongoing', 'completed'] as TProjectStatus[],
      default: 'ongoing',
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

export const Project = model<TProject, ProjectModel>('Project', projectSchema);
