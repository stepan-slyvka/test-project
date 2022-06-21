import React from "react";

import classes from "./InvoiceItem.module.css";

const InvoiceItem = (props) => {
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
                    onClick={props.showEl}
                  >
                    Go To Invoices
                  </button>
                  <button type="button" className={classes["edit-invoice"]}>
                    Edit Invoice
                  </button>
                </div>
              </div>
              <div className={classes.content}>
                <div className={classes["invoice-info"]}>
                  <div className={classes.info}>
                    <h3>Invoice Info</h3>
                    <span>#1231</span>
                  </div>
                  <div className={classes.order}>
                    <p>
                      <span className={classes["order-status"]}>
                        Order Status:
                      </span>
                      <span className={classes.status}> Shipped</span>
                    </p>
                    <p>
                      <span className={classes["order-date"]}>Order Date:</span>
                      <span className={classes.date}> February 17th 2018</span>
                    </p>
                  </div>
                </div>
                <div className={classes.bills}>
                  <div className={classes["bill-from"]}>
                    <h3>Bill From</h3>
                    <div>
                      <p className={classes["bill-from-info"]}>
                        <span className={classes.name}>Pineapple Inc.</span>
                        <span className={classes.email}>
                          pineapple@company.com
                          <br></br>
                          <br></br> 86781 547th Ave, Osmond,
                          <br></br> NE, 68765
                          <br></br>
                          <br></br> Phone: +(402) 748-3970
                        </span>
                      </p>
                    </div>
                  </div>
                  <div className={classes["bill-to"]}>
                    <h3>Bill To</h3>
                    <p className={classes["bill-to-info"]}>
                      <span className={classes.name}>REDQ Inc.</span>
                      <span className={classes.email}>
                        redq@company.com <br></br>
                        <br></br> 405 Mulberry Rd, Mc Grady, <br></br> NC, 28649
                        <br></br>
                        <br></br>Fax: +0(863) 228-7064 <br></br> Phone: +(740)
                        927-9284
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
                    <tbody>
                      <tr>
                        <td>1</td>
                        <td>A box of happiness</td>
                        <td>200</td>
                        <td>14</td>
                        <td>2800</td>
                      </tr>
                      <tr>
                        <td>2</td>
                        <td>Unicorn Tears</td>
                        <td>500</td>
                        <td>14</td>
                        <td>7000</td>
                      </tr>
                      <tr>
                        <td>3</td>
                        <td>Rainbow Machine</td>
                        <td>700</td>
                        <td>5</td>
                        <td>3500</td>
                      </tr>
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
              </div>
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
