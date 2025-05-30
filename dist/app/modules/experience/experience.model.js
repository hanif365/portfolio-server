"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.Experience = void 0;
const mongoose_1 = require("mongoose");
const experienceSchema = new mongoose_1.Schema({
    company: {
        type: String,
        required: true,
    },
    position: {
        type: String,
        required: true,
    },
    location: {
        type: String,
        required: true,
    },
    location_type: {
        type: String,
        enum: ['on-site', 'remote', 'hybrid'],
        required: true,
    },
    employment_type: {
        type: String,
        enum: ['full-time', 'part-time', 'contract', 'internship', 'freelance'],
        required: true,
    },
    start_date: {
        type: Date,
        required: true,
    },
    end_date: {
        type: Date,
    },
    is_current: {
        type: Boolean,
        default: false,
    },
    description: {
        type: String,
        required: true,
    },
    responsibilities: {
        type: [String],
        required: true,
    },
    technologies_used: {
        type: [String],
        required: true,
    },
    company_logo: {
        type: String,
    },
    company_website: {
        type: String,
    },
    achievements: {
        type: [String],
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
// Virtual for calculating the duration of experience
experienceSchema.virtual('duration').get(function () {
    const startDate = new Date(this.start_date);
    const endDate = this.is_current ? new Date() : new Date(this.end_date);
    const years = endDate.getFullYear() - startDate.getFullYear();
    const months = endDate.getMonth() - startDate.getMonth();
    const totalMonths = years * 12 + months;
    const remainingMonths = totalMonths % 12;
    const totalYears = Math.floor(totalMonths / 12);
    if (totalYears > 0 && remainingMonths > 0) {
        return `${totalYears} year${totalYears > 1 ? 's' : ''} ${remainingMonths} month${remainingMonths > 1 ? 's' : ''}`;
    }
    else if (totalYears > 0) {
        return `${totalYears} year${totalYears > 1 ? 's' : ''}`;
    }
    else {
        return `${remainingMonths} month${remainingMonths > 1 ? 's' : ''}`;
    }
});
exports.Experience = (0, mongoose_1.model)('Experience', experienceSchema);
