"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.ProjectRoutes = void 0;
const express_1 = __importDefault(require("express"));
const project_controller_1 = require("./project.controller");
const validateRequest_1 = __importDefault(require("../../middleware/validateRequest"));
const project_validation_1 = require("./project.validation");
const router = express_1.default.Router();
// Create a new project
router.post('/', (0, validateRequest_1.default)(project_validation_1.createProjectValidationSchema), project_controller_1.ProjectController.createProject);
// Get all projects
router.get('/', project_controller_1.ProjectController.getAllProjects);
// Get a single project
router.get('/:id', project_controller_1.ProjectController.getSingleProject);
// Update a project
router.patch('/:id', (0, validateRequest_1.default)(project_validation_1.updateProjectValidationSchema), project_controller_1.ProjectController.updateProject);
// Delete a project
router.delete('/:id', project_controller_1.ProjectController.deleteProject);
exports.ProjectRoutes = router;
