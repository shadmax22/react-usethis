import { set } from "js-upsert";
import { replaceFunctionsWithIds } from "../redux/middleware/function_presever";

export function setFun<T>(value: T) {
  return set<T>(() => replaceFunctionsWithIds(value));
}
