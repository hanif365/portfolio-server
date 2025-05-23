import { StatusCodes } from 'http-status-codes';
import { AppError } from '../../errors/AppError';
import { TLoginResponse, TLoginUser, TRefreshTokenResponse, TUser } from './auth.interface';
import { User } from './auth.model';
import { createAccessToken, createRefreshToken, verifyRefreshToken } from './auth.utils';

// Register a new user
const registerUser = async (payload: TUser) => {
  // Check if user already exists
  const existingUser = await User.findOne({ email: payload.email });
  if (existingUser) {
    throw new AppError(StatusCodes.CONFLICT, 'User already exists with this email');
  }

  // Create new user
  const result = await User.create(payload);
  return result;
};

// Get all users
const getAllUsers = async () => {
  const result = await User.find();
  return result;
};

// Login user
const loginUser = async (payload: TLoginUser): Promise<TLoginResponse> => {
  // Find user with email
  const user = await User.findOne({ email: payload.email }).select('+password');
  
  if (!user) {
    throw new AppError(StatusCodes.NOT_FOUND, 'User not found');
  }

  // Check if password is correct
  const isPasswordMatched = await user.isPasswordMatched(payload.password);
  
  if (!isPasswordMatched) {
    throw new AppError(StatusCodes.UNAUTHORIZED, 'Invalid credentials');
  }

  // Create access and refresh tokens
  const accessToken = createAccessToken(user.email, user.role);
  const refreshToken = createRefreshToken(user.email, user.role);

  return {
    accessToken,
    refreshToken,
    // user: {
    //   name: user.name,
    //   email: user.email,
    //   role: user.role,
    // },
  };
};

// Refresh token
const refreshToken = async (token: string): Promise<TRefreshTokenResponse> => {
  try {
    // Verify refresh token
    const decoded = verifyRefreshToken(token);
    
    // Check if user exists
    const user = await User.findOne({ email: decoded.email });
    
    if (!user) {
      throw new AppError(StatusCodes.NOT_FOUND, 'User not found');
    }

    // Create new access token
    const accessToken = createAccessToken(user.email, user.role);

    return {
      accessToken,
    };
  } catch (error) {
    throw new AppError(StatusCodes.UNAUTHORIZED, 'Invalid refresh token');
  }
};

// Delete a user
const deleteUser = async (userId: string) => {
  const user = await User.findByIdAndDelete(userId);
  
  if (!user) {
    throw new AppError(StatusCodes.NOT_FOUND, 'User not found');
  }
  
  return user;
};

export const AuthService = {
  registerUser,
  getAllUsers,
  loginUser,
  refreshToken,
  deleteUser,
}; 