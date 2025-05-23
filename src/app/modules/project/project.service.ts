import { StatusCodes } from 'http-status-codes';
import { AppError } from '../../errors/AppError';
import { TProject } from './project.interface';
import { Project } from './project.model';

// Create a new project
const createProject = async (payload: TProject) => {
  const result = await Project.create(payload);
  return result;
};

// Get all projects
const getAllProjects = async () => {
  const result = await Project.find();
  return result;
};

// Get a single project by ID
const getSingleProject = async (id: string) => {
  const result = await Project.findById(id);
  
  if (!result) {
    throw new AppError(StatusCodes.NOT_FOUND, 'Project not found');
  }
  
  return result;
};

// Update a project
const updateProject = async (id: string, payload: Partial<TProject>) => {
  const exists = await Project.findById(id);
  
  if (!exists) {
    throw new AppError(StatusCodes.NOT_FOUND, 'Project not found');
  }

  const result = await Project.findByIdAndUpdate(
    id,
    { $set: payload },
    { new: true, runValidators: true },
  );
  
  return result;
};

// Delete a project
const deleteProject = async (id: string) => {
  const result = await Project.findByIdAndDelete(id);
  
  if (!result) {
    throw new AppError(StatusCodes.NOT_FOUND, 'Project not found');
  }
  
  return result;
};

export const ProjectService = {
  createProject,
  getAllProjects,
  getSingleProject,
  updateProject,
  deleteProject,
};
