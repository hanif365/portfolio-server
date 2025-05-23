// Generate a unique blog ID
export const generateBlogId = (): string => {
  return `BLG-${Math.floor(100000 + Math.random() * 900000)}`;
}; 