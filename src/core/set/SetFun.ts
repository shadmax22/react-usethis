import { set } from "js-upsert";
import { FunctionManager } from "../useThis/managers/FunctionManager";

export function setFun<T>(value: T) {
  return set<T>(() => FunctionManager.store(value) as T);
}
