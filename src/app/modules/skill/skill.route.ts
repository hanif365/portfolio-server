import express from 'express';
import { SkillController } from './skill.controller';
import validateRequest from '../../middleware/validateRequest';
import { createSkillValidationSchema, updateSkillValidationSchema } from './skill.validation';

const router = express.Router();

// Create a new skill
router.post(
  '/',
  validateRequest(createSkillValidationSchema),
  SkillController.createSkill,
);

// Get all skills
router.get('/', SkillController.getAllSkills);

// Get featured skills
router.get('/featured', SkillController.getFeaturedSkills);

// Get skills by category
router.get('/category/:category', SkillController.getSkillsByCategory);

// Get a single skill
router.get('/:id', SkillController.getSingleSkill);

// Update a skill
router.patch(
  '/:id',
  validateRequest(updateSkillValidationSchema),
  SkillController.updateSkill,
);

// Delete a skill
router.delete('/:id', SkillController.deleteSkill);

export const SkillRoutes = router; 