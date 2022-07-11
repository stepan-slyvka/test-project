import React from "react";

import { Fragment } from "react";

import { Routes, Route, useParams } from "react-router-dom";

import AllInvoices from "./AllInvoices";
import AddInvoiceItem from "./AddInvoiceItem";
import EditInvoiceItem from "./EditInvoiceItem";
import InvoiceItem from "./InvoiceItem";
import InvoiceItemDescription from "./InvoiceItemDescription";

const Invoices = () => {
  const params = useParams();

  return (
    <Fragment>
      <Routes>
        <Route path="/" element={<AllInvoices />} />
        <Route
          path={`invoice-description/:invoiceId`}
          element={<InvoiceItem />}
        >
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
