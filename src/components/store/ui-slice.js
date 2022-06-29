import { createSlice } from "@reduxjs/toolkit";

const uiSlice = createSlice({
  name: "ui",
  initialState: {
    addInvoicePageIsVisible: false,
    selectOptionsIsVisible: false,
    viewPageIsVisible: false,
    selectMoreOptionsIsVisible: false,
  },
  reducers: {
    toggleAddInvoice(state) {
      state.addInvoicePageIsVisible = !state.addInvoicePageIsVisible;
    },
    toggleSelectOptions(state) {
      state.selectOptionsIsVisible = !state.selectOptionsIsVisible;
    },
    toggleViewPage(state) {
      state.viewPageIsVisible = !state.viewPageIsVisible;
    },
    toggleMoreOptions(state) {
      state.selectMoreOptionsIsVisible = !state.selectMoreOptionsIsVisible;
    },
  },
});

export const uiActions = uiSlice.actions;

export default uiSlice;
