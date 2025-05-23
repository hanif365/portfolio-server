import express from 'express';
import { AuthController } from './auth.controller';
import validateRequest from '../../middleware/validateRequest';
import { loginValidationSchema, refreshTokenValidationSchema, registerUserValidationSchema } from './auth.validation';
import { auth } from '../../middleware/auth';

const router = express.Router();

// Register a new user
router.post(
  '/register',
  validateRequest(registerUserValidationSchema),
  AuthController.registerUser,
);

// Login user
router.post(
  '/login',
  validateRequest(loginValidationSchema),
  AuthController.loginUser,
);

// Refresh token
router.post(
  '/refresh-token',
  validateRequest(refreshTokenValidationSchema),
  AuthController.refreshToken,
);

// Logout user
router.post('/logout', AuthController.logoutUser);

// Get all users (admin only)
router.get('/users', auth('admin'), AuthController.getAllUsers);

// Delete user (admin only)
router.delete('/users/:userId', auth('admin'), AuthController.deleteUser);

export const AuthRoutes = router; 