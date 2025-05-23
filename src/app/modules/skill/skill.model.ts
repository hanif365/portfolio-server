import { Schema, model } from 'mongoose';
import { SkillModel, TSkill, TSkillCategory, TSkillLevel } from './skill.interface';

const skillSchema = new Schema<TSkill>(
  {
    name: {
      type: String,
      required: true,
      unique: true,
    },
    image: {
      type: String,
      required: true,
    },
    short_description: {
      type: String,
      required: true,
    },
    experience_years: {
      type: Number,
      required: true,
    },
    level: {
      type: String,
      enum: ['beginner', 'intermediate', 'advanced', 'expert'] as TSkillLevel[],
      required: true,
    },
    category: {
      type: String,
      enum: ['frontend', 'backend', 'database', 'devops', 'mobile', 'design', 'other'] as TSkillCategory[],
      required: true,
    },
    proficiency_percentage: {
      type: Number,
      min: 0,
      max: 100,
    },
    is_featured: {
      type: Boolean,
      default: false,
    },
  },
  {
    timestamps: {
      createdAt: 'created_at',
      updatedAt: 'updated_at',
    },
    toJSON: {
      virtuals: true,
    },
  },
);

export const Skill = model<TSkill, SkillModel>('Skill', skillSchema); 