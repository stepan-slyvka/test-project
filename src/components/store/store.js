import { configureStore } from "@reduxjs/toolkit";

import uiSlice from "./ui-slice";
import invoiceSlice from "./invoice-slice";

const store = configureStore({
  reducer: { ui: uiSlice.reducer, invoice: invoiceSlice.reducer },
});

export default store;
