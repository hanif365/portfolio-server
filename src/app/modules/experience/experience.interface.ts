import { Model } from 'mongoose';

export type TEmploymentType = 'full-time' | 'part-time' | 'contract' | 'internship' | 'freelance';
export type TLocationType = 'on-site' | 'remote' | 'hybrid';

export type TExperience = {
  company: string;
  position: string;
  location: string;
  location_type: TLocationType;
  employment_type: TEmploymentType;
  start_date: Date;
  end_date?: Date; // Optional for current positions
  is_current: boolean;
  description: string;
  responsibilities: string[];
  technologies_used: string[];
  company_logo?: string;
  company_website?: string;
  achievements?: string[];
  created_at: Date;
  updated_at: Date;
};

export type ExperienceModel = Model<TExperience, Record<string, unknown>>; 