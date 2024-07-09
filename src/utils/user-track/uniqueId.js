export const generateUniqueId = () => {
  return `user_${Date.now()}_${Math.random().toString(36).substr(2, 9)}`;
};
