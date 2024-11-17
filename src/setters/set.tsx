import { set as jsSet, SetValueSignature } from "js-upsert";
import { setFun } from "./setFun";

type setType = {
  <T>(value: T | ((prevValue: T) => T)): SetValueSignature<T>;
  fun: <T>(fun: T) => SetValueSignature<T>;
};

export const set = jsSet as unknown as setType;

set.fun = setFun;
