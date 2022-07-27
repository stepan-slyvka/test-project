import React from "react";

import Wrapper from "../../UI/Wrapper";
import Footer from "../../UI/Footer";

import classes from "./InvoiceItemDescription.module.css";

import { Link } from "react-router-dom";

import { useParams } from "react-router-dom";

const InvoiceItemDescription = (props) => {
  const { invoiceId } = useParams();

  let counter = 1;

  return (
    <Wrapper isShrinked={props.isShrinked}>
      <div className={classes.wrapper}>
        <div className={classes["content-wrapper"]}>
          <div className={classes["main-wrapper"]}>
            <div className={classes["upper-buttons"]}>
              <div className={classes["upper-buttons-wrapper"]}>
                <Link to="/invoices">
                  <button type="button" className={classes["go-to-invoices"]}>
                    Go To Invoices
                  </button>
                </Link>
                <Link to={`/invoices/edit-invoice/${invoiceId}`}>
                  <button type="button" className={classes["edit-invoice"]}>
                    Edit Invoice
                  </button>
                </Link>
              </div>
            </div>
            <div className={classes["invoice-info"]}>
              <div className={classes.info}>
                <h3>Invoice Info</h3>
                <span>{props.invoiceNumber}</span>
              </div>
              <div className={classes.order}>
                <p>
                  <span className={classes["order-status"]}>Order Status:</span>
                  <span className={classes.status}>{props.status}</span>
                </p>
                <p>
                  <span className={classes["order-date"]}>Order Date:</span>
                  <span className={classes.date}>{props.order_date}</span>
                </p>
              </div>
            </div>
            <div className={classes.bills}>
              <div className={classes["bill-from"]}>
                <h3>Bill From</h3>
                <div>
                  <p className={classes["bill-from-info"]}>
                    <span className={classes.name}>{props.bill_from}</span>
                    <span className={classes.email}>
                      {props.bill_from_info}
                    </span>
                  </p>
                </div>
              </div>
              <div className={classes["bill-to"]}>
                <h3>Bill To</h3>
                <div>
                  <p className={classes["bill-to-info"]}>
                    <span className={classes.name}>{props.bill_to}</span>
                    <span className={classes.email}>{props.bill_to_info}</span>
                  </p>
                </div>
              </div>
            </div>
            <div className={classes.table}>
              <table>
                <colgroup>
                  <col className={classes.col1}></col>
                  <col className={classes.col2}></col>
                  <col className={classes.col3}></col>
                  <col className={classes.col4}></col>
                  <col className={classes.col5}></col>
                </colgroup>
                <thead>
                  <tr>
                    <td>#</td>
                    <td>Item Name</td>
                    <td>Unit Costs</td>
                    <td>Unit</td>
                    <td>Price</td>
                  </tr>
                </thead>
                <tbody>
                  {props.items.map((item, index) => (
                    <tr key={index}>
                      <td>{counter++}</td>
                      <td>{item.item_name}</td>
                      <td>{item.unit_costs}</td>
                      <td>{item.unit}</td>
                      <td>{item.price}</td>
                    </tr>
                  ))}
                </tbody>
              </table>
            </div>
            <div className={classes.total}>
              <p>
                Sub-total:
                <span>$13300</span>
              </p>
              <p>
                Vat:
                <span>$13300</span>
              </p>
              <h3>
                Grand Total:
                <span>$14630</span>
              </h3>
            </div>
            <div className={classes["lower-btn"]}>
              <button type="button">Send Invoice</button>
            </div>
          </div>
        </div>
      </div>
      <Footer />
    </Wrapper>
  );
};

export default InvoiceItemDescription;
