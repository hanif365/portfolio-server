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
exports.SkillService = void 0;
const http_status_codes_1 = require("http-status-codes");
const AppError_1 = require("../../errors/AppError");
const skill_model_1 = require("./skill.model");
// Create a new skill
const createSkill = (payload) => __awaiter(void 0, void 0, void 0, function* () {
    const result = yield skill_model_1.Skill.create(payload);
    return result;
});
// Get all skills
const getAllSkills = () => __awaiter(void 0, void 0, void 0, function* () {
    const result = yield skill_model_1.Skill.find();
    return result;
});
// Get skills by category
const getSkillsByCategory = (category) => __awaiter(void 0, void 0, void 0, function* () {
    const result = yield skill_model_1.Skill.find({ category });
    return result;
});
// Get featured skills
const getFeaturedSkills = () => __awaiter(void 0, void 0, void 0, function* () {
    const result = yield skill_model_1.Skill.find({ is_featured: true });
    return result;
});
// Get a single skill by ID
const getSingleSkill = (id) => __awaiter(void 0, void 0, void 0, function* () {
    const result = yield skill_model_1.Skill.findById(id);
    if (!result) {
        throw new AppError_1.AppError(http_status_codes_1.StatusCodes.NOT_FOUND, 'Skill not found');
    }
    return result;
});
// Update a skill
const updateSkill = (id, payload) => __awaiter(void 0, void 0, void 0, function* () {
    const exists = yield skill_model_1.Skill.findById(id);
    if (!exists) {
        throw new AppError_1.AppError(http_status_codes_1.StatusCodes.NOT_FOUND, 'Skill not found');
    }
    const result = yield skill_model_1.Skill.findByIdAndUpdate(id, { $set: payload }, { new: true, runValidators: true });
    return result;
});
// Delete a skill
const deleteSkill = (id) => __awaiter(void 0, void 0, void 0, function* () {
    const result = yield skill_model_1.Skill.findByIdAndDelete(id);
    if (!result) {
        throw new AppError_1.AppError(http_status_codes_1.StatusCodes.NOT_FOUND, 'Skill not found');
    }
    return result;
});
exports.SkillService = {
    createSkill,
    getAllSkills,
    getSkillsByCategory,
    getFeaturedSkills,
    getSingleSkill,
    updateSkill,
    deleteSkill,
};
