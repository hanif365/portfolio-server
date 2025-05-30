"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.Blog = void 0;
const mongoose_1 = require("mongoose");
const hashtagSchema = new mongoose_1.Schema({
    name: {
        type: String,
        required: true,
    },
});
const blogSchema = new mongoose_1.Schema({
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
    description: {
        type: String,
        required: true,
    },
    hashtags: {
        type: [hashtagSchema],
        required: true,
    },
    live_link: {
        type: String,
    },
    status: {
        type: String,
        enum: ['draft', 'published'],
        default: 'draft',
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
exports.Blog = (0, mongoose_1.model)('Blog', blogSchema);
