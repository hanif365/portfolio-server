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
Object.defineProperty(exports, "__esModule", { value: true });
exports.ExperienceService = void 0;
const http_status_codes_1 = require("http-status-codes");
const AppError_1 = require("../../errors/AppError");
const experience_model_1 = require("./experience.model");
// Create a new experience
const createExperience = (payload) => __awaiter(void 0, void 0, void 0, function* () {
    const result = yield experience_model_1.Experience.create(payload);
    return result;
});
// Get all experiences (sorted by start_date in descending order)
const getAllExperiences = () => __awaiter(void 0, void 0, void 0, function* () {
    const result = yield experience_model_1.Experience.find().sort({ start_date: -1 });
    return result;
});
// Get current experiences
const getCurrentExperiences = () => __awaiter(void 0, void 0, void 0, function* () {
    const result = yield experience_model_1.Experience.find({ is_current: true }).sort({ start_date: -1 });
    return result;
});
// Get a single experience by ID
const getSingleExperience = (id) => __awaiter(void 0, void 0, void 0, function* () {
    const result = yield experience_model_1.Experience.findById(id);
    if (!result) {
        throw new AppError_1.AppError(http_status_codes_1.StatusCodes.NOT_FOUND, 'Experience not found');
    }
    return result;
});
// Update an experience
const updateExperience = (id, payload) => __awaiter(void 0, void 0, void 0, function* () {
    const exists = yield experience_model_1.Experience.findById(id);
    if (!exists) {
        throw new AppError_1.AppError(http_status_codes_1.StatusCodes.NOT_FOUND, 'Experience not found');
    }
    // If is_current is true, make sure end_date is null/undefined
    if (payload.is_current === true) {
        payload.end_date = undefined;
    }
    const result = yield experience_model_1.Experience.findByIdAndUpdate(id, { $set: payload }, { new: true, runValidators: true });
    return result;
});
// Delete an experience
const deleteExperience = (id) => __awaiter(void 0, void 0, void 0, function* () {
    const result = yield experience_model_1.Experience.findByIdAndDelete(id);
    if (!result) {
        throw new AppError_1.AppError(http_status_codes_1.StatusCodes.NOT_FOUND, 'Experience not found');
    }
    return result;
});
// Get total years of experience
const getTotalExperience = () => __awaiter(void 0, void 0, void 0, function* () {
    const experiences = yield experience_model_1.Experience.find();
    let totalMonths = 0;
    experiences.forEach(exp => {
        const startDate = new Date(exp.start_date);
        const endDate = exp.is_current ? new Date() : new Date(exp.end_date);
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
});
exports.ExperienceService = {
    createExperience,
    getAllExperiences,
    getCurrentExperiences,
    getSingleExperience,
    updateExperience,
    deleteExperience,
    getTotalExperience,
};
