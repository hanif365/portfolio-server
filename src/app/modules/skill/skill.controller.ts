import { Request, Response } from 'express';
import catchAsync from '../../utils/catchAsync';
import { SkillService } from './skill.service';
import { StatusCodes } from 'http-status-codes';
import sendResponse from '../../utils/sendResponse';

// Create a new skill
const createSkill = catchAsync(async (req: Request, res: Response) => {
  const result = await SkillService.createSkill(req.body);

  sendResponse(res, {
    success: true,
    statusCode: StatusCodes.CREATED,
    message: 'Skill created successfully',
    data: result,
  });
});

// Get all skills
const getAllSkills = catchAsync(async (req: Request, res: Response) => {
  const result = await SkillService.getAllSkills();

  sendResponse(res, {
    success: true,
    statusCode: StatusCodes.OK,
    message: 'Skills retrieved successfully',
    data: result,
  });
});

// Get skills by category
const getSkillsByCategory = catchAsync(async (req: Request, res: Response) => {
  const { category } = req.params;
  const result = await SkillService.getSkillsByCategory(category);

  sendResponse(res, {
    success: true,
    statusCode: StatusCodes.OK,
    message: `Skills in ${category} category retrieved successfully`,
    data: result,
  });
});

// Get featured skills
const getFeaturedSkills = catchAsync(async (req: Request, res: Response) => {
  const result = await SkillService.getFeaturedSkills();

  sendResponse(res, {
    success: true,
    statusCode: StatusCodes.OK,
    message: 'Featured skills retrieved successfully',
    data: result,
  });
});

// Get a single skill
const getSingleSkill = catchAsync(async (req: Request, res: Response) => {
  const { id } = req.params;
  const result = await SkillService.getSingleSkill(id);

  sendResponse(res, {
    success: true,
    statusCode: StatusCodes.OK,
    message: 'Skill retrieved successfully',
    data: result,
  });
});

// Update a skill
const updateSkill = catchAsync(async (req: Request, res: Response) => {
  const { id } = req.params;
  const result = await SkillService.updateSkill(id, req.body);

  sendResponse(res, {
    success: true,
    statusCode: StatusCodes.OK,
    message: 'Skill updated successfully',
    data: result,
  });
});

// Delete a skill
const deleteSkill = catchAsync(async (req: Request, res: Response) => {
  const { id } = req.params;
  await SkillService.deleteSkill(id);

  sendResponse(res, {
    success: true,
    statusCode: StatusCodes.OK,
    message: 'Skill deleted successfully',
    data: null,
  });
});

export const SkillController = {
  createSkill,
  getAllSkills,
  getSkillsByCategory,
  getFeaturedSkills,
  getSingleSkill,
  updateSkill,
  deleteSkill,
}; 