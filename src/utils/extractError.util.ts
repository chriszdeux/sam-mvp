export const extractErrorMessage = (obj:any):string|null => {
  if (typeof obj === "string") return obj;

  if (typeof obj === "object" && obj !== null) {
    for (const key in obj) {
      const result = extractErrorMessage (obj[key]);
      if (result) return result;
    }
  }

  return null;
}
