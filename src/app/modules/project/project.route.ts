import express from 'express';
import { ProjectController } from './project.controller';
import validateRequest from '../../middleware/validateRequest';
import { createProjectValidationSchema, updateProjectValidationSchema } from './project.validation';

const router = express.Router();

// Create a new project
router.post(
  '/',
  validateRequest(createProjectValidationSchema),
  ProjectController.createProject,
);

// Get all projects
router.get('/', ProjectController.getAllProjects);

// Get a single project
router.get('/:id', ProjectController.getSingleProject);

// Update a project
router.patch(
  '/:id',
  validateRequest(updateProjectValidationSchema),
  ProjectController.updateProject,
);

// Delete a project
router.delete('/:id', ProjectController.deleteProject);

export const ProjectRoutes = router;
