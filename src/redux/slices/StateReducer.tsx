import { createSlice } from "@reduxjs/toolkit";
import { upsert } from "js-upsert";
export const StateReducer = createSlice({
  name: "StateReducer",
  initialState: {},
  reducers: {
    append: (state: any, action) => {
      if (Array.isArray(action.payload.data)) {
        state[action.payload.state] = [
          ...(state[action.payload.state] ?? []),
          ...action.payload.data,
        ];
      } else {
        state[action.payload.state] = {
          ...(state[action.payload.state] ?? {}),
          ...action.payload.data,
        };
      }
    },
    update: (state: any, action) => {
      if (Array.isArray(action.payload.data)) {
        state[action.payload.state] = [...action.payload.data];
      } else {
        state[action.payload.state] = {
          ...action.payload.data,
        };
      }
    },
    upsert: (state: any, action) => {
      // index = greeen.k.someValue.value
      let { data, active_state } = action.payload;

      let OLD_STATE = state[active_state];

      state[active_state] = upsert(OLD_STATE, data);
    },

    set: (state: any, action) => {
      if (Array.isArray(action.payload.data)) {
        state[action.payload.state] = [
          ...state[action.payload.state],
          ...action.payload.data,
        ];
      } else {
        state[action.payload.state] = {
          ...state[action.payload.state],
          ...action.payload.data,
        };
      }
    },
  },
});

export const { ...StateHandler } = StateReducer.actions;
export default StateReducer.reducer;
