import express from 'express';
import { ExperienceController } from './experience.controller';
import validateRequest from '../../middleware/validateRequest';
import { createExperienceValidationSchema, updateExperienceValidationSchema } from './experience.validation';

const router = express.Router();

// Create a new experience
router.post(
  '/',
  validateRequest(createExperienceValidationSchema),
  ExperienceController.createExperience,
);

// Get all experiences
router.get('/', ExperienceController.getAllExperiences);

// Get current experiences
router.get('/current', ExperienceController.getCurrentExperiences);

// Get total experience
router.get('/total', ExperienceController.getTotalExperience);

// Get a single experience
router.get('/:id', ExperienceController.getSingleExperience);

// Update an experience
router.patch(
  '/:id',
  validateRequest(updateExperienceValidationSchema),
  ExperienceController.updateExperience,
);

// Delete an experience
router.delete('/:id', ExperienceController.deleteExperience);

export const ExperienceRoutes = router; 