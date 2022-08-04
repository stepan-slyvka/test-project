import { createSlice } from "@reduxjs/toolkit";

import { INVOICES_LIST } from "../Pages/Invoice/InvoicesList";

import { v4 as uuidv4 } from "uuid";

const invoiceSlice = createSlice({
  name: "invoice",
  initialState: {
    invoices: INVOICES_LIST,
    subTotal: 0,
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
    editInvoice(state, action) {
      const { payload } = action;

      state.invoices = state.invoices.map((item) =>
        item.id === payload.id
          ? {
              ...item,
              bill_from: payload.billFrom,
              bill_from_info: payload.billFromInfo,
              bill_to: payload.billTo,
              bill_to_info: payload.billToInfo,
              invoice_num: payload.invoiceNumber,
              status: payload.status,
              order_date: payload.order_date,
              ITEMS: payload.ITEMS.slice(),
            }
          : item
      );
    },
    calcPrice(state) {
      state.subTotal = state.invoices.reduce(
        (accumulator, currentValue) =>
          accumulator + currentValue.ITEMS.grand_total,
        0
      );
    },
    calcVat(state, action) {},
    calcTotal(state, action) {},
  },
});

export const invoiceActions = invoiceSlice.actions;

export default invoiceSlice;
