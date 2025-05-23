import { Model } from 'mongoose';

export type TSkillLevel = 'beginner' | 'intermediate' | 'advanced' | 'expert';
export type TSkillCategory = 'frontend' | 'backend' | 'database' | 'devops' | 'mobile' | 'design' | 'other';

export type TSkill = {
  name: string;
  image: string;
  short_description: string;
  experience_years: number;
  level: TSkillLevel;
  category: TSkillCategory;
  proficiency_percentage?: number; // Optional field for visual representation (0-100)
  is_featured: boolean; // To highlight top skills
  created_at: Date;
  updated_at: Date;
};

export type SkillModel = Model<TSkill, Record<string, unknown>>; 