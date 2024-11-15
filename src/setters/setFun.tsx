import { replaceFunctionsWithIds } from "../redux/middleware/function_presever";

export function setFun(value: any) {
  return replaceFunctionsWithIds(value);
}
