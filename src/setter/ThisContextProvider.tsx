import { useSelector, useDispatch } from "react-redux";
import ThisContext from "../thisContext/context";
import _MAINSTORE from "../redux/store";
import { __USETHIS_DISPATCHER } from "./utils/Dispatcher";

export default function ThisContextProvider(props: any) {
  let dispatcher = useDispatch();
  const __MAIN = useSelector((s: any) => s.This);

  const __USETHIS_FUNCTION = __USETHIS_DISPATCHER(dispatcher, __MAIN);

  return (
    <ThisContext.Provider
      {...props}
      value={__USETHIS_FUNCTION}
    ></ThisContext.Provider>
  );
}
