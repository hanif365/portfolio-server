"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.SkillRoutes = void 0;
const express_1 = __importDefault(require("express"));
const skill_controller_1 = require("./skill.controller");
const validateRequest_1 = __importDefault(require("../../middleware/validateRequest"));
const skill_validation_1 = require("./skill.validation");
const router = express_1.default.Router();
// Create a new skill
router.post('/', (0, validateRequest_1.default)(skill_validation_1.createSkillValidationSchema), skill_controller_1.SkillController.createSkill);
// Get all skills
router.get('/', skill_controller_1.SkillController.getAllSkills);
// Get featured skills
router.get('/featured', skill_controller_1.SkillController.getFeaturedSkills);
// Get skills by category
router.get('/category/:category', skill_controller_1.SkillController.getSkillsByCategory);
// Get a single skill
router.get('/:id', skill_controller_1.SkillController.getSingleSkill);
// Update a skill
router.patch('/:id', (0, validateRequest_1.default)(skill_validation_1.updateSkillValidationSchema), skill_controller_1.SkillController.updateSkill);
// Delete a skill
router.delete('/:id', skill_controller_1.SkillController.deleteSkill);
exports.SkillRoutes = router;
