import React from "react";

import { useSelector } from "react-redux";

import { Fragment } from "react";

import InvoiceItemDescription from "./InvoiceItemDescription";
import AllInvoices from "./AllInvoices";

export const INVOICES_LIST = [
  {
    id: Math.random(),
    number: Math.random().toFixed(2),
    invoice_num: "#1232",
    bill_from: "Pineapple Inc.",
    bill_to: "REDQ Inc.",
    total_cost: "14630",
    status: "Pending",
    order_date: "February 17th 2018",
    bill_from_email: "pineapple@company.com",
    bill_from_address: "86781 547th Ave, Osmond, NE, 68765",
    bill_from_phone: "+(402) 748-3970",
    bill_from_fax: "",
    bill_to_email: "redq@company.com",
    bill_to_address: "405 Mulberry Rd, Mc Grady, NC, 28649",
    bill_to_phone: "+(740) 927-9284",
    bill_to_fax: "+0(863) 228-7064",
  },
  {
    id: Math.random(),
    number: Math.random().toFixed(2),
    invoice_num: "#1232",
    bill_from: "AMD Inc.",
    bill_to: "Intel Inc.",
    total_cost: "14630",
    status: "Delivered",
    order_date: "February 17th 2018",
    bill_from_email: "pineapple@company.com",
    bill_from_address: "86781 547th Ave, Osmond, NE, 68765",
    bill_from_phone: "+(402) 748-3970",
    bill_from_fax: "",
    bill_to_email: "redq@company.com",
    bill_to_address: "405 Mulberry Rd, Mc Grady, NC, 28649",
    bill_to_phone: "+(740) 927-9284",
    bill_to_fax: "+0(863) 228-7064",
  },
  {
    id: Math.random(),
    number: Math.random().toFixed(2),
    invoice_num: "#1232",
    bill_from: "Apple Inc.",
    bill_to: "Samsung",
    total_cost: "14630",
    status: "Shipped",
    order_date: "February 17th 2018",
    bill_from_email: "pineapple@company.com",
    bill_from_address: "86781 547th Ave, Osmond, NE, 68765",
    bill_from_phone: "+(402) 748-3970",
    bill_from_fax: "",
    bill_to_email: "redq@company.com",
    bill_to_address: "405 Mulberry Rd, Mc Grady, NC, 28649",
    bill_to_phone: "+(740) 927-9284",
    bill_to_fax: "+0(863) 228-7064",
  },
];

export const ITEMS = [
  {
    item_name: "A box of happiness",
    unit_costs: "200",
    unit: "14",
    price: "2800",
    sub_total: "133300",
    vat: "13300",
    grand_total: "14630",
  },
  {
    item_name: "Unicorn Tears",
    unit_costs: "500",
    unit: "14",
    price: "1700",
    sub_total: "133300",
    vat: "13300",
    grand_total: "14630",
  },
  {
    item_name: "Rainbow Machine",
    unit_costs: "700",
    unit: "5",
    price: "3500",
    sub_total: "133300",
    vat: "13300",
    grand_total: "14630",
  },
];

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
