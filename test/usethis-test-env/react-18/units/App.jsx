import { ThisProvider } from "react-usethis/thisProvider";

export function App({ children }) {
  return <ThisProvider>{children}</ThisProvider>;
}
