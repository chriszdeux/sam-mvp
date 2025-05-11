export const setLocalStorage = (key: string, value: any): void => {
  if (typeof window !== "undefined") {
    localStorage.setItem(key, JSON.stringify(value));
  }
};

export const getLocalStorage = (key: string): string | null => {
  if (typeof window !== "undefined") {
    const data = localStorage.getItem(key);
    if (data) {
      return JSON.parse(data);
    }
  }
  return null;
};

export const removeLocalStorage = (key: string): void => {
  if (typeof window !== "undefined") {
    const token = localStorage.getItem(key);
    if (token) {
      localStorage.removeItem(key);
    }
  }
};