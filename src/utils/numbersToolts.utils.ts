export const fixNumber = (number:number | string):string => {
  return number ? number.toLocaleString("en-US") : "0.00";
};