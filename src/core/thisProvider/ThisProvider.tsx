import { Provider } from "react-redux";
import _MAINSTORE from "../../shared/redux/store";

export function ThisProvider(props: { children: React.ReactNode }) {
  return (
    <>
      <Provider store={_MAINSTORE} {...props}></Provider>
    </>
  );
}
