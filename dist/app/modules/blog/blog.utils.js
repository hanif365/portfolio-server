"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.generateBlogId = void 0;
// Generate a unique blog ID
const generateBlogId = () => {
    return `BLG-${Math.floor(100000 + Math.random() * 900000)}`;
};
exports.generateBlogId = generateBlogId;
