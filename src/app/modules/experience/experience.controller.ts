import { Request, Response } from 'express';
import catchAsync from '../../utils/catchAsync';
import { ExperienceService } from './experience.service';
import { StatusCodes } from 'http-status-codes';
import sendResponse from '../../utils/sendResponse';

// Create a new experience
const createExperience = catchAsync(async (req: Request, res: Response) => {
  const result = await ExperienceService.createExperience(req.body);

  sendResponse(res, {
    success: true,
    statusCode: StatusCodes.CREATED,
    message: 'Experience created successfully',
    data: result,
  });
});

// Get all experiences
const getAllExperiences = catchAsync(async (req: Request, res: Response) => {
  const result = await ExperienceService.getAllExperiences();

  sendResponse(res, {
    success: true,
    statusCode: StatusCodes.OK,
    message: 'Experiences retrieved successfully',
    data: result,
  });
});

// Get current experiences
const getCurrentExperiences = catchAsync(async (req: Request, res: Response) => {
  const result = await ExperienceService.getCurrentExperiences();

  sendResponse(res, {
    success: true,
    statusCode: StatusCodes.OK,
    message: 'Current experiences retrieved successfully',
    data: result,
  });
});

// Get total experience
const getTotalExperience = catchAsync(async (req: Request, res: Response) => {
  const result = await ExperienceService.getTotalExperience();

  sendResponse(res, {
    success: true,
    statusCode: StatusCodes.OK,
    message: 'Total experience calculated successfully',
    data: result,
  });
});

// Get a single experience
const getSingleExperience = catchAsync(async (req: Request, res: Response) => {
  const { id } = req.params;
  const result = await ExperienceService.getSingleExperience(id);

  sendResponse(res, {
    success: true,
    statusCode: StatusCodes.OK,
    message: 'Experience retrieved successfully',
    data: result,
  });
});

// Update an experience
const updateExperience = catchAsync(async (req: Request, res: Response) => {
  const { id } = req.params;
  const result = await ExperienceService.updateExperience(id, req.body);

  sendResponse(res, {
    success: true,
    statusCode: StatusCodes.OK,
    message: 'Experience updated successfully',
    data: result,
  });
});

// Delete an experience
const deleteExperience = catchAsync(async (req: Request, res: Response) => {
  const { id } = req.params;
  await ExperienceService.deleteExperience(id);

  sendResponse(res, {
    success: true,
    statusCode: StatusCodes.OK,
    message: 'Experience deleted successfully',
    data: null,
  });
});

export const ExperienceController = {
  createExperience,
  getAllExperiences,
  getCurrentExperiences,
  getSingleExperience,
  updateExperience,
  deleteExperience,
  getTotalExperience,
}; 