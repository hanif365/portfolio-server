"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.AuthRoutes = void 0;
const express_1 = __importDefault(require("express"));
const auth_controller_1 = require("./auth.controller");
const validateRequest_1 = __importDefault(require("../../middleware/validateRequest"));
const auth_validation_1 = require("./auth.validation");
const auth_1 = require("../../middleware/auth");
const router = express_1.default.Router();
// Register a new user
router.post('/register', (0, validateRequest_1.default)(auth_validation_1.registerUserValidationSchema), auth_controller_1.AuthController.registerUser);
// Login user
router.post('/login', (0, validateRequest_1.default)(auth_validation_1.loginValidationSchema), auth_controller_1.AuthController.loginUser);
// Refresh token
router.post('/refresh-token', (0, validateRequest_1.default)(auth_validation_1.refreshTokenValidationSchema), auth_controller_1.AuthController.refreshToken);
// Logout user
router.post('/logout', auth_controller_1.AuthController.logoutUser);
// Get all users (admin only)
router.get('/users', (0, auth_1.auth)('admin'), auth_controller_1.AuthController.getAllUsers);
// Delete user (admin only)
router.delete('/users/:userId', (0, auth_1.auth)('admin'), auth_controller_1.AuthController.deleteUser);
exports.AuthRoutes = router;
