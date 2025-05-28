import { set as jsSet } from "js-upsert";
import { setFun } from "./setFun";
import { setType } from "./setType";

export const set: setType = jsSet as unknown as setType;

set.fun = setFun;
