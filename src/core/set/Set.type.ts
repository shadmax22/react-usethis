import { SetValueSignature } from "js-upsert";

export type setType = {
  <T>(value: T | ((prevValue: T) => T)): SetValueSignature<T>;
  fun: <T>(fun: T) => SetValueSignature<T>;
};
