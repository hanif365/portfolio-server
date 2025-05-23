import { StatusCodes } from 'http-status-codes';
import { AppError } from '../../errors/AppError';
import { TSkill } from './skill.interface';
import { Skill } from './skill.model';

// Create a new skill
const createSkill = async (payload: TSkill) => {
  const result = await Skill.create(payload);
  return result;
};

// Get all skills
const getAllSkills = async () => {
  const result = await Skill.find();
  return result;
};

// Get skills by category
const getSkillsByCategory = async (category: string) => {
  const result = await Skill.find({ category });
  return result;
};

// Get featured skills
const getFeaturedSkills = async () => {
  const result = await Skill.find({ is_featured: true });
  return result;
};

// Get a single skill by ID
const getSingleSkill = async (id: string) => {
  const result = await Skill.findById(id);
  
  if (!result) {
    throw new AppError(StatusCodes.NOT_FOUND, 'Skill not found');
  }
  
  return result;
};

// Update a skill
const updateSkill = async (id: string, payload: Partial<TSkill>) => {
  const exists = await Skill.findById(id);
  
  if (!exists) {
    throw new AppError(StatusCodes.NOT_FOUND, 'Skill not found');
  }

  const result = await Skill.findByIdAndUpdate(
    id,
    { $set: payload },
    { new: true, runValidators: true },
  );
  
  return result;
};

// Delete a skill
const deleteSkill = async (id: string) => {
  const result = await Skill.findByIdAndDelete(id);
  
  if (!result) {
    throw new AppError(StatusCodes.NOT_FOUND, 'Skill not found');
  }
  
  return result;
};

export const SkillService = {
  createSkill,
  getAllSkills,
  getSkillsByCategory,
  getFeaturedSkills,
  getSingleSkill,
  updateSkill,
  deleteSkill,
}; 