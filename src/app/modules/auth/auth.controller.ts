import { Request, Response } from 'express';
import catchAsync from '../../utils/catchAsync';
import { AuthService } from './auth.service';
import { StatusCodes } from 'http-status-codes';
import sendResponse from '../../utils/sendResponse';
import config from '../../config';

// Register a new user
const registerUser = catchAsync(async (req: Request, res: Response) => {
  const result = await AuthService.registerUser(req.body);

  sendResponse(res, {
    success: true,
    statusCode: StatusCodes.CREATED,
    message: 'User registered successfully',
    data: result,
  });
});

// Get all users
const getAllUsers = catchAsync(async (req: Request, res: Response) => {
  const result = await AuthService.getAllUsers();

  sendResponse(res, {
    success: true,
    statusCode: StatusCodes.OK,
    message: 'Users retrieved successfully',
    data: result,
  });
});

// Login user
const loginUser = catchAsync(async (req: Request, res: Response) => {
  const result = await AuthService.loginUser(req.body);

  // Set refresh token in HTTP-only cookie
  const { refreshToken, ...others } = result;
  
  res.cookie('refreshToken', refreshToken, {
    httpOnly: true,
    secure: config.env === 'production',
    sameSite: 'strict',
    maxAge: 7 * 24 * 60 * 60 * 1000, // 7 days
  });

  sendResponse(res, {
    success: true,
    statusCode: StatusCodes.OK,
    message: 'User logged in successfully',
    data: others,
  });
});

// Refresh token
const refreshToken = catchAsync(async (req: Request, res: Response) => {
  const { refreshToken } = req.cookies;
  const result = await AuthService.refreshToken(refreshToken);

  sendResponse(res, {
    success: true,
    statusCode: StatusCodes.OK,
    message: 'New access token generated successfully',
    data: result,
  });
});

// Logout user
const logoutUser = catchAsync(async (_req: Request, res: Response) => {
  // Clear refresh token cookie
  res.clearCookie('refreshToken');

  sendResponse(res, {
    success: true,
    statusCode: StatusCodes.OK,
    message: 'User logged out successfully',
    data: null,
  });
});

// Delete user
const deleteUser = catchAsync(async (req: Request, res: Response) => {
  const { userId } = req.params;
  await AuthService.deleteUser(userId);

  sendResponse(res, {
    success: true,
    statusCode: StatusCodes.OK,
    message: 'User deleted successfully',
    data: null,
  });
});

export const AuthController = {
  registerUser,
  getAllUsers,
  loginUser,
  refreshToken,
  logoutUser,
  deleteUser,
}; 