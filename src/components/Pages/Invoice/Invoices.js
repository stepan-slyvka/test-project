import React from "react";

// import { useSelector } from "react-redux";

import { Fragment } from "react";

import { Routes, Route, useParams } from "react-router-dom";

import AllInvoices from "./AllInvoices";
import AddInvoiceItem from "./AddInvoiceItem";
import EditInvoiceItem from "./EditInvoiceItem";
import InvoiceItem from "./InvoiceItem";
import InvoiceItemDescription from "./InvoiceItemDescription";
import { INVOICES_LIST } from "../Invoice/InvoicesList";

const Invoices = (props) => {
  // const showViewPage = useSelector((state) => state.ui.viewPageIsVisible);

  const params = useParams();

  const invoice = INVOICES_LIST.find(
    (invoice) => invoice.id === params.invoiceId
  );

  return (
    <Fragment>
      <Routes>
        <Route path="/" element={<AllInvoices />} />
        <Route path={`invoice-description/*`} element={<InvoiceItem />}>
          <Route
            path={`${params.invoiceId}`}
            element={<InvoiceItemDescription />}
          />
        </Route>
        <Route path="add-invoice" element={<AddInvoiceItem />} />
        <Route path="edit-invoice" element={<EditInvoiceItem />} />
      </Routes>
    </Fragment>
  );
};

export default Invoices;
