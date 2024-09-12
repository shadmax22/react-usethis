import { retrieveFunction } from "./functionStore";

export const replaceIdsWithFunctions = (obj: any): any => {
  if (
    typeof obj === "string" &&
    obj.startsWith("__func_") &&
    obj.endsWith("__")
  ) {
    return retrieveFunction(obj);
  } else if (Array.isArray(obj)) {
    return obj.map(replaceIdsWithFunctions);
  } else if (obj !== null && typeof obj === "object") {
    return Object.keys(obj).reduce((acc, key) => {
      acc[key] = replaceIdsWithFunctions(obj[key]);
      return acc;
    }, {} as any);
  }
  return obj;
};
