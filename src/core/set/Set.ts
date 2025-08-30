import { set as jsSet } from "js-upsert";
import { setFun } from "./SetFun";
import { setType } from "./Set.type";

export const set: setType = jsSet as unknown as setType;

set.fun = setFun;
