import { createSlice } from "@reduxjs/toolkit";

const uiSlice = createSlice({
  name: "ui",
  initialState: {
    selectOptionsIsVisible: false,
    selectMoreOptionsIsVisible: false,
  },
  reducers: {
    toggleSelectOptions(state) {
      state.selectOptionsIsVisible = !state.selectOptionsIsVisible;
    },
    toggleMoreOptions(state) {
      state.selectMoreOptionsIsVisible = !state.selectMoreOptionsIsVisible;
    },
  },
});

export const uiActions = uiSlice.actions;

export default uiSlice;
