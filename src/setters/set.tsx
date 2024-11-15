import { set as jsSet } from "js-upsert";
import { setFun } from "./setFun";

type setType = {
  (value: any, index?: any[] | null | string): void;
  fun: (fun: void) => void;
  append: (value: any, index?: any[] | null | string) => void;
};

export const set = jsSet as setType;

set.fun = setFun;

set.append = (value: any, index?: any[] | null | string) => {
  return jsSet((pv: any) => {
    const valueToAppend = typeof value == "function" ? value(pv) : value;
    return { ...pv, ...valueToAppend };
  }, index ?? null);
};
