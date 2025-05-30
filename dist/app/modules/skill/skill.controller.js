"use strict";
var __awaiter = (this && this.__awaiter) || function (thisArg, _arguments, P, generator) {
    function adopt(value) { return value instanceof P ? value : new P(function (resolve) { resolve(value); }); }
    return new (P || (P = Promise))(function (resolve, reject) {
        function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }
        function rejected(value) { try { step(generator["throw"](value)); } catch (e) { reject(e); } }
        function step(result) { result.done ? resolve(result.value) : adopt(result.value).then(fulfilled, rejected); }
        step((generator = generator.apply(thisArg, _arguments || [])).next());
    });
};
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.SkillController = void 0;
const catchAsync_1 = __importDefault(require("../../utils/catchAsync"));
const skill_service_1 = require("./skill.service");
const http_status_codes_1 = require("http-status-codes");
const sendResponse_1 = __importDefault(require("../../utils/sendResponse"));
// Create a new skill
const createSkill = (0, catchAsync_1.default)((req, res) => __awaiter(void 0, void 0, void 0, function* () {
    const result = yield skill_service_1.SkillService.createSkill(req.body);
    (0, sendResponse_1.default)(res, {
        success: true,
        statusCode: http_status_codes_1.StatusCodes.CREATED,
        message: 'Skill created successfully',
        data: result,
    });
}));
// Get all skills
const getAllSkills = (0, catchAsync_1.default)((req, res) => __awaiter(void 0, void 0, void 0, function* () {
    const result = yield skill_service_1.SkillService.getAllSkills();
    (0, sendResponse_1.default)(res, {
        success: true,
        statusCode: http_status_codes_1.StatusCodes.OK,
        message: 'Skills retrieved successfully',
        data: result,
    });
}));
// Get skills by category
const getSkillsByCategory = (0, catchAsync_1.default)((req, res) => __awaiter(void 0, void 0, void 0, function* () {
    const { category } = req.params;
    const result = yield skill_service_1.SkillService.getSkillsByCategory(category);
    (0, sendResponse_1.default)(res, {
        success: true,
        statusCode: http_status_codes_1.StatusCodes.OK,
        message: `Skills in ${category} category retrieved successfully`,
        data: result,
    });
}));
// Get featured skills
const getFeaturedSkills = (0, catchAsync_1.default)((req, res) => __awaiter(void 0, void 0, void 0, function* () {
    const result = yield skill_service_1.SkillService.getFeaturedSkills();
    (0, sendResponse_1.default)(res, {
        success: true,
        statusCode: http_status_codes_1.StatusCodes.OK,
        message: 'Featured skills retrieved successfully',
        data: result,
    });
}));
// Get a single skill
const getSingleSkill = (0, catchAsync_1.default)((req, res) => __awaiter(void 0, void 0, void 0, function* () {
    const { id } = req.params;
    const result = yield skill_service_1.SkillService.getSingleSkill(id);
    (0, sendResponse_1.default)(res, {
        success: true,
        statusCode: http_status_codes_1.StatusCodes.OK,
        message: 'Skill retrieved successfully',
        data: result,
    });
}));
// Update a skill
const updateSkill = (0, catchAsync_1.default)((req, res) => __awaiter(void 0, void 0, void 0, function* () {
    const { id } = req.params;
    const result = yield skill_service_1.SkillService.updateSkill(id, req.body);
    (0, sendResponse_1.default)(res, {
        success: true,
        statusCode: http_status_codes_1.StatusCodes.OK,
        message: 'Skill updated successfully',
        data: result,
    });
}));
// Delete a skill
const deleteSkill = (0, catchAsync_1.default)((req, res) => __awaiter(void 0, void 0, void 0, function* () {
    const { id } = req.params;
    yield skill_service_1.SkillService.deleteSkill(id);
    (0, sendResponse_1.default)(res, {
        success: true,
        statusCode: http_status_codes_1.StatusCodes.OK,
        message: 'Skill deleted successfully',
        data: null,
    });
}));
exports.SkillController = {
    createSkill,
    getAllSkills,
    getSkillsByCategory,
    getFeaturedSkills,
    getSingleSkill,
    updateSkill,
    deleteSkill,
};
