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
exports.ExperienceController = void 0;
const catchAsync_1 = __importDefault(require("../../utils/catchAsync"));
const experience_service_1 = require("./experience.service");
const http_status_codes_1 = require("http-status-codes");
const sendResponse_1 = __importDefault(require("../../utils/sendResponse"));
// Create a new experience
const createExperience = (0, catchAsync_1.default)((req, res) => __awaiter(void 0, void 0, void 0, function* () {
    const result = yield experience_service_1.ExperienceService.createExperience(req.body);
    (0, sendResponse_1.default)(res, {
        success: true,
        statusCode: http_status_codes_1.StatusCodes.CREATED,
        message: 'Experience created successfully',
        data: result,
    });
}));
// Get all experiences
const getAllExperiences = (0, catchAsync_1.default)((req, res) => __awaiter(void 0, void 0, void 0, function* () {
    const result = yield experience_service_1.ExperienceService.getAllExperiences();
    (0, sendResponse_1.default)(res, {
        success: true,
        statusCode: http_status_codes_1.StatusCodes.OK,
        message: 'Experiences retrieved successfully',
        data: result,
    });
}));
// Get current experiences
const getCurrentExperiences = (0, catchAsync_1.default)((req, res) => __awaiter(void 0, void 0, void 0, function* () {
    const result = yield experience_service_1.ExperienceService.getCurrentExperiences();
    (0, sendResponse_1.default)(res, {
        success: true,
        statusCode: http_status_codes_1.StatusCodes.OK,
        message: 'Current experiences retrieved successfully',
        data: result,
    });
}));
// Get total experience
const getTotalExperience = (0, catchAsync_1.default)((req, res) => __awaiter(void 0, void 0, void 0, function* () {
    const result = yield experience_service_1.ExperienceService.getTotalExperience();
    (0, sendResponse_1.default)(res, {
        success: true,
        statusCode: http_status_codes_1.StatusCodes.OK,
        message: 'Total experience calculated successfully',
        data: result,
    });
}));
// Get a single experience
const getSingleExperience = (0, catchAsync_1.default)((req, res) => __awaiter(void 0, void 0, void 0, function* () {
    const { id } = req.params;
    const result = yield experience_service_1.ExperienceService.getSingleExperience(id);
    (0, sendResponse_1.default)(res, {
        success: true,
        statusCode: http_status_codes_1.StatusCodes.OK,
        message: 'Experience retrieved successfully',
        data: result,
    });
}));
// Update an experience
const updateExperience = (0, catchAsync_1.default)((req, res) => __awaiter(void 0, void 0, void 0, function* () {
    const { id } = req.params;
    const result = yield experience_service_1.ExperienceService.updateExperience(id, req.body);
    (0, sendResponse_1.default)(res, {
        success: true,
        statusCode: http_status_codes_1.StatusCodes.OK,
        message: 'Experience updated successfully',
        data: result,
    });
}));
// Delete an experience
const deleteExperience = (0, catchAsync_1.default)((req, res) => __awaiter(void 0, void 0, void 0, function* () {
    const { id } = req.params;
    yield experience_service_1.ExperienceService.deleteExperience(id);
    (0, sendResponse_1.default)(res, {
        success: true,
        statusCode: http_status_codes_1.StatusCodes.OK,
        message: 'Experience deleted successfully',
        data: null,
    });
}));
exports.ExperienceController = {
    createExperience,
    getAllExperiences,
    getCurrentExperiences,
    getSingleExperience,
    updateExperience,
    deleteExperience,
    getTotalExperience,
};
