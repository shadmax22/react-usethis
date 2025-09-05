import { FunctionManager } from "../useThis/managers/FunctionManager";

export function setFun<T>(value: T) {
  return FunctionManager.store(value) as T;
}
