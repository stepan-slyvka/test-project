import React from "react";

import { useParams } from "react-router-dom";

import InvoiceItemDescription from "../Invoice/InvoiceItemDescription";

import { INVOICES_LIST } from "./InvoicesList";

const InvoiceItem = () => {
  const params = useParams();

  const invoice = INVOICES_LIST.find(
    (invoice) => invoice.id === params.invoiceId
  );

  return (
    <InvoiceItemDescription
      invoice_num={invoice.invoice_num}
      status={invoice.status}
      order_date={invoice.order_date}
      bill_from={invoice.bill_from}
      bill_from_address={invoice.bill_from_address}
      bill_from_email={invoice.bill_from_email}
      bill_from_fax={invoice.bill_from_fax}
      bill_from_phone={invoice.bill_from_phone}
      bill_to={invoice.bill_to}
      bill_to_address={invoice.bill_to_address}
      bill_to_email={invoice.bill_to_email}
      bill_to_fax={invoice.bill_to_fax}
      bill_to_phone={invoice.bill_to_phone}
    />
  );
};

export default InvoiceItem;
