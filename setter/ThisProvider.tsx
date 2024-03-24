import _MAINSTORE from "../redux/store";
import { Provider } from "react-redux";
import ThisContextProvider from "./ThisContextProvider";

export function ThisProvider(props: any) {
  return (
    <>
      <Provider store={_MAINSTORE}>
        <ThisContextProvider {...props}></ThisContextProvider>
      </Provider>
    </>
  );
}
