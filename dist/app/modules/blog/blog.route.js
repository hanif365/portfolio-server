"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.BlogRoutes = void 0;
const express_1 = __importDefault(require("express"));
const blog_controller_1 = require("./blog.controller");
const validateRequest_1 = __importDefault(require("../../middleware/validateRequest"));
const blog_validation_1 = require("./blog.validation");
const router = express_1.default.Router();
// Create a new blog
router.post('/', (0, validateRequest_1.default)(blog_validation_1.createBlogValidationSchema), blog_controller_1.BlogController.createBlog);
// Get all blogs
router.get('/', blog_controller_1.BlogController.getAllBlogs);
// Get a single blog
router.get('/:id', blog_controller_1.BlogController.getSingleBlog);
// Update a blog
router.patch('/:id', (0, validateRequest_1.default)(blog_validation_1.updateBlogValidationSchema), blog_controller_1.BlogController.updateBlog);
// Delete a blog
router.delete('/:id', blog_controller_1.BlogController.deleteBlog);
exports.BlogRoutes = router;
