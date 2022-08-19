import React from "react";

import { Fragment, useState } from "react";

import { Routes, Route, useParams } from "react-router-dom";

import AllInvoices from "./AllInvoices";
import AddInvoiceItem from "./AddInvoiceItem";
import EditInvoiceItem from "./EditInvoiceItem";
import InvoiceItem from "./InvoiceItem";
import InvoiceItemDescription from "./InvoiceItemDescription";
import EditInvoice from "./EditInvoice";

const Invoices = () => {
  const params = useParams();

  const inputs = [{ item_name: "", unit_costs: "", unit: "" }];

  const [subtotalValue, setSubtotal] = useState(0);
  const [totalVatPercentage, setTotalVatParcentage] = useState(0);
  const [totalVatValue, setTotalVatValue] = useState(0);
  const [grandTotalValue, setGrandTotalValue] = useState(0);
  const [listItems, setListItems] = useState(inputs);

  const calculateTotal = () => {
    let subtotal = 0;

    listItems.map((item) => {
      const itemTotal = parseFloat(item.unit_costs) * parseFloat(item.unit);
      return (subtotal = subtotal + itemTotal);
    });

    setSubtotal(subtotal);
  };

  const listenTotalVat = (event) => {
    const totalVat = parseInt(
      (parseFloat(event.target.value) * parseFloat(subtotalValue)) / 100
    );
    const grandTotal = subtotalValue + totalVat;

    setGrandTotalValue(grandTotal);
    setTotalVatParcentage(parseInt(event.target.value));
    setTotalVatValue(totalVat);
  };

  return (
    <Fragment>
      <Routes>
        <Route
          path="/"
          element={<AllInvoices grandTotalValue={grandTotalValue} />}
        />
        <Route
          path={`invoice-description/:invoiceId`}
          element={
            <InvoiceItem
              subTotalValue={subtotalValue}
              totalVatValue={totalVatValue}
              grandTotalValue={grandTotalValue}
            />
          }
        >
          <Route
            path={`${params.invoiceId}`}
            element={<InvoiceItemDescription />}
          />
        </Route>
        <Route
          path="add-invoice"
          element={
            <AddInvoiceItem
              grandTotalValue={grandTotalValue}
              totalVatValue={totalVatValue}
              calculateTotal={calculateTotal}
              subtotalValue={subtotalValue}
              totalVatPercentage={totalVatPercentage}
              listenTotalVat={listenTotalVat}
              setListItems={setListItems}
              listItems={listItems}
            />
          }
        />
        <Route path={`edit-invoice/:invoiceId`} element={<EditInvoice />}>
          <Route path={`${params.invoiceId}`} element={<EditInvoiceItem />} />
        </Route>
      </Routes>
    </Fragment>
  );
};

export default Invoices;
