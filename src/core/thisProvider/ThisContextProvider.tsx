import ThisContext from "./ThisContext";

export default function ThisContextProvider(props: any) {
  return <ThisContext.Provider {...props} value={{}}></ThisContext.Provider>;
}
