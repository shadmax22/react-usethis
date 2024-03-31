import { configureStore } from "@reduxjs/toolkit";
import StateReducer from "./slices/StateReducer";

const _MAINSTORE: any = configureStore({
  reducer: {
    This: StateReducer,
  },
});

export default _MAINSTORE;
