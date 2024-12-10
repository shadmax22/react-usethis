import { Provider } from "react-redux";
import _MAINSTORE from "../redux/store";
import ThisContextProvider from "./ThisContextProblem";

export function ThisProvider(props: { children: React.ReactNode[] }) {
  return (
    <>
      <Provider store={_MAINSTORE}>
        <ThisContextProvider {...props}></ThisContextProvider>
      </Provider>
    </>
  );
}
