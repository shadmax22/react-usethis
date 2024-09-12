import { replaceFunctionsWithIds } from "../redux/middleware/function_presever";

export function setFun(value: any, index: any[] | null | string = null) {
  return replaceFunctionsWithIds(value);
}
