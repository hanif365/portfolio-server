"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.generateSkillId = void 0;
// Generate a unique skill ID
const generateSkillId = () => {
    return `SKL-${Math.floor(100000 + Math.random() * 900000)}`;
};
exports.generateSkillId = generateSkillId;
