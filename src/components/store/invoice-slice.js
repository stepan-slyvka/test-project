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
        bill_from_info: newItem.billFromInfo,
        bill_to: newItem.billTo,
        bill_to_info: newItem.billToInfo,
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
    editInvoice(state) {
      const existingItem = state.invoices;
      existingItem.map((item) => {
        if (existingItem.id === item.id) {
          return {
            id: item.id,
            bill_from: item.billFrom,
            bill_from_info: item.billFromInfo,
            bill_to: item.billTo,
            bill_to_info: item.billToInfo,
            invoice_num: item.invoiceNumber,
            status: item.status,
            order_date: item.order_date,
            ITEMS: [...item.ITEMS],
          };
        }
        return item;
      });
    },
  },
});

export const invoiceActions = invoiceSlice.actions;

export default invoiceSlice;
