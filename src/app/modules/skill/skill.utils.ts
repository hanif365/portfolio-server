// Generate a unique skill ID
export const generateSkillId = (): string => {
  return `SKL-${Math.floor(100000 + Math.random() * 900000)}`;
}; 