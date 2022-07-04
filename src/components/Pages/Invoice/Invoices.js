import React from "react";

import { useSelector } from "react-redux";

import { Fragment } from "react";

import InvoiceItemDescription from "./InvoiceItemDescription";
import AllInvoices from "./AllInvoices";

const Invoices = (props) => {
  const showViewPage = useSelector((state) => state.ui.viewPageIsVisible);

  return (
    <Fragment>
      {showViewPage ? (
        <InvoiceItemDescription isShrinked={props.isShrinkedContent} />
      ) : (
        <AllInvoices isShrinked={props.isShrinkedContent} />
      )}
    </Fragment>
  );
};

export default Invoices;
