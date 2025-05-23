import { Schema, model } from 'mongoose';
import { TRole, TUser, TUserMethods, UserModel } from './auth.interface';
import bcrypt from 'bcrypt';
import config from '../../config';

const userSchema = new Schema<TUser, UserModel, TUserMethods>(
  {
    name: {
      type: String,
      required: true,
    },
    email: {
      type: String,
      required: true,
      unique: true,
    },
    password: {
      type: String,
      required: true,
      select: false, // Don't include password in query results by default
    },
    role: {
      type: String,
      enum: ['admin', 'user'] as TRole[],
      default: 'user',
    },
  },
  {
    timestamps: {
      createdAt: 'created_at',
      updatedAt: 'updated_at',
    },
    toJSON: {
      virtuals: true,
      transform: function (_doc, ret) {
        delete ret.password;
        return ret;
      },
    },
  },
);

// Hash password before saving
userSchema.pre('save', async function (next) {
  // Only hash the password if it's modified (or new)
  if (!this.isModified('password')) return next();

  // Hash password with bcrypt
  this.password = await bcrypt.hash(
    this.password,
    Number(config.bcrypt_salt_rounds),
  );
  next();
});

// Method to check if password is correct
userSchema.methods.isPasswordMatched = async function (
  givenPassword: string,
): Promise<boolean> {
  return await bcrypt.compare(givenPassword, this.password);
};

export const User = model<TUser, UserModel>('User', userSchema); 