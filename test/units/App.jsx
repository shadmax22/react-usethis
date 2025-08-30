import { ThisProvider } from "../../exports/thisProvider.ts";

export function App({ children }) {
  return <ThisProvider>{children}</ThisProvider>;
}
