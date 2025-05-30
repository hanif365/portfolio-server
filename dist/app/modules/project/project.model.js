"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.Project = void 0;
const mongoose_1 = require("mongoose");
const technologySchema = new mongoose_1.Schema({
    name: {
        type: String,
        required: true,
    },
});
const projectSchema = new mongoose_1.Schema({
    name: {
        type: String,
        required: true,
        unique: true,
    },
    short_description: {
        type: String,
        required: true,
    },
    description: {
        type: String,
        required: true,
    },
    image: {
        type: String,
        required: true,
    },
    technology_used: {
        type: [technologySchema],
        required: true,
    },
    github_link_client: {
        type: String,
    },
    github_link_server: {
        type: String,
    },
    live_link_client: {
        type: String,
    },
    live_link_server: {
        type: String,
    },
    status: {
        type: String,
        enum: ['ongoing', 'completed'],
        default: 'ongoing',
        required: true,
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
exports.Project = (0, mongoose_1.model)('Project', projectSchema);
