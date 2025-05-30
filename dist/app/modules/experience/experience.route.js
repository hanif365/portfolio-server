"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.ExperienceRoutes = void 0;
const express_1 = __importDefault(require("express"));
const experience_controller_1 = require("./experience.controller");
const validateRequest_1 = __importDefault(require("../../middleware/validateRequest"));
const experience_validation_1 = require("./experience.validation");
const router = express_1.default.Router();
// Create a new experience
router.post('/', (0, validateRequest_1.default)(experience_validation_1.createExperienceValidationSchema), experience_controller_1.ExperienceController.createExperience);
// Get all experiences
router.get('/', experience_controller_1.ExperienceController.getAllExperiences);
// Get current experiences
router.get('/current', experience_controller_1.ExperienceController.getCurrentExperiences);
// Get total experience
router.get('/total', experience_controller_1.ExperienceController.getTotalExperience);
// Get a single experience
router.get('/:id', experience_controller_1.ExperienceController.getSingleExperience);
// Update an experience
router.patch('/:id', (0, validateRequest_1.default)(experience_validation_1.updateExperienceValidationSchema), experience_controller_1.ExperienceController.updateExperience);
// Delete an experience
router.delete('/:id', experience_controller_1.ExperienceController.deleteExperience);
exports.ExperienceRoutes = router;
