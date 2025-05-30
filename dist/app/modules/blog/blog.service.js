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
exports.BlogService = void 0;
const http_status_codes_1 = require("http-status-codes");
const AppError_1 = require("../../errors/AppError");
const blog_model_1 = require("./blog.model");
// Create a new blog
const createBlog = (payload) => __awaiter(void 0, void 0, void 0, function* () {
    const result = yield blog_model_1.Blog.create(payload);
    return result;
});
// Get all blogs
const getAllBlogs = () => __awaiter(void 0, void 0, void 0, function* () {
    const result = yield blog_model_1.Blog.find();
    return result;
});
// Get a single blog by ID
const getSingleBlog = (id) => __awaiter(void 0, void 0, void 0, function* () {
    const result = yield blog_model_1.Blog.findById(id);
    if (!result) {
        throw new AppError_1.AppError(http_status_codes_1.StatusCodes.NOT_FOUND, 'Blog not found');
    }
    return result;
});
// Update a blog
const updateBlog = (id, payload) => __awaiter(void 0, void 0, void 0, function* () {
    const exists = yield blog_model_1.Blog.findById(id);
    if (!exists) {
        throw new AppError_1.AppError(http_status_codes_1.StatusCodes.NOT_FOUND, 'Blog not found');
    }
    const result = yield blog_model_1.Blog.findByIdAndUpdate(id, { $set: payload }, { new: true, runValidators: true });
    return result;
});
// Delete a blog
const deleteBlog = (id) => __awaiter(void 0, void 0, void 0, function* () {
    const result = yield blog_model_1.Blog.findByIdAndDelete(id);
    if (!result) {
        throw new AppError_1.AppError(http_status_codes_1.StatusCodes.NOT_FOUND, 'Blog not found');
    }
    return result;
});
exports.BlogService = {
    createBlog,
    getAllBlogs,
    getSingleBlog,
    updateBlog,
    deleteBlog,
};
