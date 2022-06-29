import React from "react";

import { useSelector } from "react-redux";

import { Fragment } from "react";

import InvoiceItem from "./InvoiceItem";
import AllInvoices from "./AllInvoices";

const Invoices = (props) => {
  const showViewPage = useSelector((state) => state.ui.viewPageIsVisible);

  return (
    <Fragment>
      {showViewPage ? (
        <InvoiceItem isShrinked={props.isShrinkedContent} />
      ) : (
        <AllInvoices isShrinked={props.isShrinkedContent} />
      )}
    </Fragment>
  );
};

export default Invoices;
