import { createSlice } from "@reduxjs/toolkit";

import { INVOICES_LIST } from "../Pages/Invoice/InvoicesList";

import { v4 as uuidv4 } from "uuid";

const invoiceSlice = createSlice({
  name: "invoice",
  initialState: {
    invoices: INVOICES_LIST,
  },
  reducers: {
    addNewInvoice(state, action) {
      const newItem = action.payload;
      state.invoices.push({
        id: uuidv4(),
        bill_from: newItem.billFrom,
        bill_from_address: newItem.billFromAddress,
        bill_to: newItem.billTo,
        bill_to_address: newItem.billToAddress,
        invoice_num: newItem.invoiceNumber,
        status: newItem.status,
        order_date: newItem.order_date,
        ITEMS: [...newItem.ITEMS],
      });
      console.log(newItem);
    },
    removeInvoice(state, action) {
      const id = action.payload;
      state.invoices = state.invoices.filter((item) => item.id !== id);
    },
    editInvoice() {},
  },
});

export const invoiceActions = invoiceSlice.actions;

export default invoiceSlice;
