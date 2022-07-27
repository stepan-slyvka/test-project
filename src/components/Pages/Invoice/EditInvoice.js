import React from "react";

import { useParams } from "react-router-dom";
import { useSelector } from "react-redux";

import classes from "./EditInvoice.module.css";

import EditInvoiceItem from "./EditInvoiceItem";

const EditInvoice = () => {
  const { invoiceId } = useParams();

  const invoices = useSelector((state) => state.invoice.invoices);

  const invoice = invoices.find((invoice) => invoice.id === invoiceId);

  return invoice ? (
    <EditInvoiceItem
      invoiceNumber={invoice.invoice_num}
      billFrom={invoice.bill_from}
      billFromInfo={invoice.bill_from_info}
      billTo={invoice.bill_to}
      billToInfo={invoice.bill_to_info}
      status={invoice.status}
      orderDate={invoice.order_date}
      items={invoice.ITEMS}
      itemName={invoice.item_name}
      unitCosts={invoice.unit_costs}
      units={invoice.units}
    />
  ) : (
    <div className={classes.centered}>Invoice Not Found.</div>
  );
};

export default EditInvoice;
