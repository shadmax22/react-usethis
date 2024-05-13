import { useSelector, useDispatch } from "react-redux";
import { Appender, Updater, Upsert } from "./utils/Reducers";
import ThisContext from "../thisContext/context";
import _MAINSTORE from "../redux/store";
import { StateHandler } from "../redux/slices/StateReducer";

export default function ThisContextProvider(props: any) {
  let dispatcher = useDispatch();
  const __MAIN = useSelector((s: any) => s.This);

  return (
    <ThisContext.Provider
      {...props}
      value={(StateName: string, defaultValue: any) => {
        if (!__MAIN[StateName] && defaultValue) {
          dispatcher(
            StateHandler.update({
              data: defaultValue,
              state: StateName,
            })
          );
        }

        return {
          update: Updater(StateName, dispatcher),
          append: Appender(StateName, dispatcher),
          upsert: Upsert(StateName, dispatcher),
          dispatcher: dispatcher,
          This: __MAIN[StateName] ?? null,
          get: () => _MAINSTORE.getState().This[StateName],
        };
      }}
    ></ThisContext.Provider>
  );
}
