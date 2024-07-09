export const getLocalStorageItem = (key) => {
  return localStorage.getItem(key);
};

export const setLocalStorageItem = (key, value) => {
  localStorage.setItem(key, value);
};
