import { StatusCodes } from 'http-status-codes';
import { AppError } from '../../errors/AppError';
import { TExperience } from './experience.interface';
import { Experience } from './experience.model';

// Create a new experience
const createExperience = async (payload: TExperience) => {
  const result = await Experience.create(payload);
  return result;
};

// Get all experiences (sorted by start_date in descending order)
const getAllExperiences = async () => {
  const result = await Experience.find().sort({ start_date: -1 });
  return result;
};

// Get current experiences
const getCurrentExperiences = async () => {
  const result = await Experience.find({ is_current: true }).sort({ start_date: -1 });
  return result;
};

// Get a single experience by ID
const getSingleExperience = async (id: string) => {
  const result = await Experience.findById(id);
  
  if (!result) {
    throw new AppError(StatusCodes.NOT_FOUND, 'Experience not found');
  }
  
  return result;
};

// Update an experience
const updateExperience = async (id: string, payload: Partial<TExperience>) => {
  const exists = await Experience.findById(id);
  
  if (!exists) {
    throw new AppError(StatusCodes.NOT_FOUND, 'Experience not found');
  }

  // If is_current is true, make sure end_date is null/undefined
  if (payload.is_current === true) {
    payload.end_date = undefined;
  }

  const result = await Experience.findByIdAndUpdate(
    id,
    { $set: payload },
    { new: true, runValidators: true },
  );
  
  return result;
};

// Delete an experience
const deleteExperience = async (id: string) => {
  const result = await Experience.findByIdAndDelete(id);
  
  if (!result) {
    throw new AppError(StatusCodes.NOT_FOUND, 'Experience not found');
  }
  
  return result;
};

// Get total years of experience
const getTotalExperience = async () => {
  const experiences = await Experience.find();
  
  let totalMonths = 0;
  
  experiences.forEach(exp => {
    const startDate = new Date(exp.start_date);
    const endDate = exp.is_current ? new Date() : new Date(exp.end_date as Date);
    
    const years = endDate.getFullYear() - startDate.getFullYear();
    const months = endDate.getMonth() - startDate.getMonth();
    
    totalMonths += years * 12 + months;
  });
  
  const years = Math.floor(totalMonths / 12);
  const months = totalMonths % 12;
  
  return {
    years,
    months,
    totalMonths,
    formatted: `${years} year${years !== 1 ? 's' : ''} ${months} month${months !== 1 ? 's' : ''}`,
  };
};

export const ExperienceService = {
  createExperience,
  getAllExperiences,
  getCurrentExperiences,
  getSingleExperience,
  updateExperience,
  deleteExperience,
  getTotalExperience,
}; 