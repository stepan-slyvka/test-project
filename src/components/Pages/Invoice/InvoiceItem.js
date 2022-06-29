import React from "react";

import { useDispatch } from "react-redux";
import { INVOICES } from "../../store/invoice-slice";
import { uiActions } from "../../store/ui-slice";
import { ITEMS } from "../../store/invoice-slice";

import classes from "./InvoiceItem.module.css";

const InvoiceItem = (props) => {
  const dispatch = useDispatch();

  const toggleViewPage = () => {
    dispatch(uiActions.toggleViewPage());
  };

  let counter = 1;

  return (
    <section className={classes.section}>
      <main
        className={props.isShrinked ? classes["main-shrinked"] : classes.main}
      >
        <div className={classes.wrapper}>
          <div className={classes["content-wrapper"]}>
            <div className={classes["main-wrapper"]}>
              <div className={classes["upper-buttons"]}>
                <div className={classes["upper-buttons-wrapper"]}>
                  <button
                    type="button"
                    className={classes["go-to-invoices"]}
                    onClick={toggleViewPage}
                  >
                    Go To Invoices
                  </button>
                  <button type="button" className={classes["edit-invoice"]}>
                    Edit Invoice
                  </button>
                </div>
              </div>
              {INVOICES.map((invoice, index) => (
                <div className={classes.content} key={index}>
                  <div className={classes["invoice-info"]}>
                    <div className={classes.info}>
                      <h3>Invoice Info</h3>
                      <span>{invoice.invoice_num}</span>
                    </div>
                    <div className={classes.order}>
                      <p>
                        <span className={classes["order-status"]}>
                          Order Status:
                        </span>
                        <span className={classes.status}>{invoice.status}</span>
                      </p>
                      <p>
                        <span className={classes["order-date"]}>
                          Order Date:
                        </span>
                        <span className={classes.date}>
                          {invoice.order_date}
                        </span>
                      </p>
                    </div>
                  </div>
                  <div className={classes.bills}>
                    <div className={classes["bill-from"]}>
                      <h3>Bill From</h3>
                      <div>
                        <p className={classes["bill-from-info"]}>
                          <span className={classes.name}>
                            {invoice.bill_from}
                          </span>
                          <span className={classes.email}>
                            {invoice.bill_from_email}
                            <br></br>
                            <br></br> {invoice.bill_from_address}
                            <br></br>
                            <br></br>
                            <br></br> {invoice.bill_from_phone}
                          </span>
                        </p>
                      </div>
                    </div>
                    <div className={classes["bill-to"]}>
                      <h3>Bill To</h3>
                      <p className={classes["bill-to-info"]}>
                        <span className={classes.name}>{invoice.bill_to}</span>
                        <span className={classes.email}>
                          {invoice.bill_to_email} <br></br>
                          <br></br> {invoice.bill_to_address} <br></br>
                          <br></br>
                          <br></br>
                          {invoice.bill_to_fax} <br></br>{" "}
                          {invoice.bill_to_phone}
                        </span>
                      </p>
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
                      {ITEMS.map((items, index) => (
                        <tbody key={index}>
                          <tr>
                            <td>{counter++}</td>
                            <td>{items.item_name}</td>
                            <td>{items.unit_costs}</td>
                            <td>{items.unit}</td>
                            <td>{items.price}</td>
                          </tr>
                        </tbody>
                      ))}
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
                </div>
              ))}
              <div className={classes["lower-btn"]}>
                <button type="button">Send Invoice</button>
              </div>
            </div>
          </div>
        </div>
        <footer className={classes.footer}>
          Isomorphic @ 2022 Created by RedQ, Inc
        </footer>
      </main>
    </section>
  );
};

export default InvoiceItem;
