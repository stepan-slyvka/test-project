import React from "react";

import { useParams } from "react-router-dom";
import { useSelector } from "react-redux";

import InvoiceItemDescription from "../Invoice/InvoiceItemDescription";
import classes from "../Invoice/InvoiceItem.module.css";

const InvoiceItem = () => {
  const { invoiceId } = useParams();

  const invoices = useSelector((state) => state.invoice.invoices);

  const invoice = invoices.find((invoice) => invoice.id === invoiceId);

  return invoice ? (
    <InvoiceItemDescription
      invoiceNumber={invoice.invoice_num}
      status={invoice.status}
      order_date={invoice.order_date}
      bill_from={invoice.bill_from}
      bill_from_info={invoice.bill_from_info}
      bill_to={invoice.bill_to}
      bill_to_info={invoice.bill_to_info}
      sub_total={invoice.sub_total}
      vat={invoice.vat}
      grand_total={invoice.grand_total}
      items={invoice.ITEMS}
    />
  ) : (
    <div className={classes.centered}>No Invoices Found.</div>
  );
};

export default InvoiceItem;
