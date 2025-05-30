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
exports.ProjectService = void 0;
const http_status_codes_1 = require("http-status-codes");
const AppError_1 = require("../../errors/AppError");
const project_model_1 = require("./project.model");
// Create a new project
const createProject = (payload) => __awaiter(void 0, void 0, void 0, function* () {
    const result = yield project_model_1.Project.create(payload);
    return result;
});
// Get all projects
const getAllProjects = () => __awaiter(void 0, void 0, void 0, function* () {
    const result = yield project_model_1.Project.find();
    return result;
});
// Get a single project by ID
const getSingleProject = (id) => __awaiter(void 0, void 0, void 0, function* () {
    const result = yield project_model_1.Project.findById(id);
    if (!result) {
        throw new AppError_1.AppError(http_status_codes_1.StatusCodes.NOT_FOUND, 'Project not found');
    }
    return result;
});
// Update a project
const updateProject = (id, payload) => __awaiter(void 0, void 0, void 0, function* () {
    const exists = yield project_model_1.Project.findById(id);
    if (!exists) {
        throw new AppError_1.AppError(http_status_codes_1.StatusCodes.NOT_FOUND, 'Project not found');
    }
    const result = yield project_model_1.Project.findByIdAndUpdate(id, { $set: payload }, { new: true, runValidators: true });
    return result;
});
// Delete a project
const deleteProject = (id) => __awaiter(void 0, void 0, void 0, function* () {
    const result = yield project_model_1.Project.findByIdAndDelete(id);
    if (!result) {
        throw new AppError_1.AppError(http_status_codes_1.StatusCodes.NOT_FOUND, 'Project not found');
    }
    return result;
});
exports.ProjectService = {
    createProject,
    getAllProjects,
    getSingleProject,
    updateProject,
    deleteProject,
};
