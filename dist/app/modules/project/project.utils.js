"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.generateProjectId = void 0;
// Generate a unique project ID
const generateProjectId = () => {
    return `PRJ-${Math.floor(100000 + Math.random() * 900000)}`;
};
exports.generateProjectId = generateProjectId;
