import { useSelector, useDispatch } from "react-redux";
import { Appender, Updater, Upsert } from "./utils/Reducers";
import ThisContext from "../thisContext/context";
import _MAINSTORE from "../redux/store";

export default function ThisContextProvider(props: any) {
  let dispatcher = useDispatch();
  const __MAIN = useSelector((s: any) => s.This);

  return (
    <ThisContext.Provider
      {...props}
      value={(StateName: string) => {
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
