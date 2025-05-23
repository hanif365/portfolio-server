import { Request, Response } from 'express';
import catchAsync from '../../utils/catchAsync';
import { ProjectService } from './project.service';
import { StatusCodes } from 'http-status-codes';
import sendResponse from '../../utils/sendResponse';

// Create a new project
const createProject = catchAsync(async (req: Request, res: Response) => {
  const result = await ProjectService.createProject(req.body);

  sendResponse(res, {
    success: true,
    statusCode: StatusCodes.CREATED,
    message: 'Project created successfully',
    data: result,
  });
});

// Get all projects
const getAllProjects = catchAsync(async (req: Request, res: Response) => {
  const result = await ProjectService.getAllProjects();

  sendResponse(res, {
    success: true,
    statusCode: StatusCodes.OK,
    message: 'Projects retrieved successfully',
    data: result,
  });
});

// Get a single project
const getSingleProject = catchAsync(async (req: Request, res: Response) => {
  const { id } = req.params;
  const result = await ProjectService.getSingleProject(id);

  sendResponse(res, {
    success: true,
    statusCode: StatusCodes.OK,
    message: 'Project retrieved successfully',
    data: result,
  });
});

// Update a project
const updateProject = catchAsync(async (req: Request, res: Response) => {
  const { id } = req.params;
  const result = await ProjectService.updateProject(id, req.body);

  sendResponse(res, {
    success: true,
    statusCode: StatusCodes.OK,
    message: 'Project updated successfully',
    data: result,
  });
});

// Delete a project
const deleteProject = catchAsync(async (req: Request, res: Response) => {
  const { id } = req.params;
  await ProjectService.deleteProject(id);

  sendResponse(res, {
    success: true,
    statusCode: StatusCodes.OK,
    message: 'Project deleted successfully',
    data: null,
  });
});

export const ProjectController = {
  createProject,
  getAllProjects,
  getSingleProject,
  updateProject,
  deleteProject,
};
