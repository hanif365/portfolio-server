"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.Skill = void 0;
const mongoose_1 = require("mongoose");
const skillSchema = new mongoose_1.Schema({
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
        enum: ['beginner', 'intermediate', 'advanced', 'expert'],
        required: true,
    },
    category: {
        type: String,
        enum: ['frontend', 'backend', 'database', 'devops', 'mobile', 'design', 'other'],
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
}, {
    timestamps: {
        createdAt: 'created_at',
        updatedAt: 'updated_at',
    },
    toJSON: {
        virtuals: true,
    },
});
exports.Skill = (0, mongoose_1.model)('Skill', skillSchema);
