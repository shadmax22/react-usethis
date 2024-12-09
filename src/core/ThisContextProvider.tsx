import { useSelector, useDispatch } from "react-redux";
import ThisContext from "../thisContext/context";
import _MAINSTORE from "../redux/store";
import { useThisDispatcher } from "./Dispatcher";

export default function ThisContextProvider(props: any) {
  const reduxStateDispatcher = useDispatch();
  // let __FUNCTION_STORED = new Proxy(
  //   {},
  //   {
  //     get: function (target: any) {
  //       return target;
  //     },
  //     set: function (target, prop, value) {
  //       console.log("Set value of proxy:", value);
  //       target[prop] = value;
  //       return true;
  //     },
  //   }
  // );

  const useThisMainFunction = useThisDispatcher(reduxStateDispatcher);

  return (
    <ThisContext.Provider
      {...props}
      value={useThisMainFunction}
    ></ThisContext.Provider>
  );
}
