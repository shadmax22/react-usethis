import { Middleware } from "redux";
import { storeFunction } from "../../utils/functionStore";

export const replaceFunctionsWithIds = (obj: any): any => {
  if (typeof obj === "function") {
    return storeFunction(obj);
  } else if (Array.isArray(obj)) {
    return obj.map(replaceFunctionsWithIds);
  } else if (obj !== null && typeof obj === "object") {
    return Object.keys(obj).reduce((acc, key) => {
      acc[key] = replaceFunctionsWithIds(obj[key]);
      return acc;
    }, {} as any);
  }
  return obj;
};

export const functionMiddleware: Middleware = () => (next) => (action) => {
  const actionWithFunctionIds = replaceFunctionsWithIds(action);
  return next(actionWithFunctionIds);
};
