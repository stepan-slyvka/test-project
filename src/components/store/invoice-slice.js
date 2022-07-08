import { createSlice } from "@reduxjs/toolkit";

import { INVOICES_LIST } from "../Pages/Invoice/InvoicesList";

const invoiceSlice = createSlice({
  name: "invoice",
  initialState: {
    invoices: INVOICES_LIST,
  },
  reducers: {
    addNewInvoice(state, action) {
      const newItem = action.payload;
      state.invoices.push({
        id: newItem.id,
        billFrom: newItem.bill_from,
        billFromAddress: newItem.billFromAddress,
        billTo: newItem.bill_to,
        billToAddress: newItem.bill_to_address,
      });
    },
    removeInvoice(state, action) {
      const id = action.payload;
      console.log(id);
      state.invoices = state.invoices.filter((item) => item.id !== id);
      console.log(action);
    },
    editInvoice() {},
  },
});

export const invoiceActions = invoiceSlice.actions;

export default invoiceSlice;
