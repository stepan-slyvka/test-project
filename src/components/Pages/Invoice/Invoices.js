import React, { useState } from "react";

import { Fragment } from "react";

import InvoiceItem from "./InvoiceItem";
import AllInvoices from "./AllInvoices";

const Invoices = (props) => {
  const [viewInfo, setViewInfo] = useState(false);

  const showInfo = () => {
    setViewInfo(!viewInfo);
  };

  const show = () => {
    setViewInfo(false);
  };

  return (
    <Fragment>
      {viewInfo ? (
        <InvoiceItem showEl={show} isShrinked={props.isShrinkedContent} />
      ) : (
        <AllInvoices
          toggleInfo={showInfo}
          isShrinked={props.isShrinkedContent}
        />
      )}
    </Fragment>
  );
};

export default Invoices;
