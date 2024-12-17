import { useSelector } from "react-redux";
import { useThisDispatcher } from "../core/Dispatcher";
import { useThisInstanceReturn } from "./useThisInstance";
import { useThisReturnType, useThisType } from "./useThisTypes";

function useThisMainFunction<DefaultValue>(
  StateName: string,
  defaultValue?: DefaultValue
): useThisReturnType<DefaultValue> {
  try {
    useSelector((s: any) => s.This?.[StateName]);
  } catch (e) {}

  return useThisDispatcher(
    StateName,
    defaultValue
  ) as unknown as useThisReturnType<DefaultValue>;
}

function useThisBuilder(prop1: unknown, prop2: unknown) {
  // Handling new Instance
  if (new.target) {
    return useThisInstanceReturn(prop1);
  }

  // Rtn useThis as it is
  return useThisMainFunction(prop1 as string, prop2);
}

export const useThis: useThisType = useThisBuilder as unknown as useThisType;
