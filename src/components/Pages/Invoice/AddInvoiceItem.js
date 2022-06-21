import React, { useState } from "react";

import classes from "./AddInvoiceItem.module.css";

import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";

import { faEllipsis } from "@fortawesome/free-solid-svg-icons";
import { faCalendar } from "@fortawesome/free-regular-svg-icons";

const AddInvoiceItem = () => {
  const [showOtherOptions, setShowOtherOptions] = useState(false);

  const toggleOtherOptions = () => {
    setShowOtherOptions(!showOtherOptions);
  };

  return (
    <section className={classes.section}>
      <main className={classes.wrapper}>
        <div className={classes["content-wrapper"]}>
          <div className={classes.content}>
            <div className={classes["buttons-wrapper"]}>
              <button type="button" className={classes["cancel-btn"]}>
                Cancel
              </button>
              <button type="button" className={classes["save-btn"]}>
                Save
              </button>
            </div>
            <div className={classes["invoice-info-wrapper"]}>
              <div className={classes["invoice-info"]}>
                <h3>Invoice Info</h3>
                <input
                  placeholder="Number"
                  type="text"
                  defaultValue="#1655387645882"
                ></input>
              </div>
              <div className={classes["right-side-column"]}>
                <div className={classes["order-status"]}>
                  <span>Order Status: </span>
                  <div className={classes.buttons}>
                    {showOtherOptions && (
                      <ul className={classes.options}>
                        <li>Pending</li>
                        <li>Shipped</li>
                        <li>Delivered</li>
                      </ul>
                    )}
                    <button className={classes.status}>Pending</button>
                    <button
                      className={classes.dots}
                      onClick={toggleOtherOptions}
                    >
                      <FontAwesomeIcon icon={faEllipsis} />
                    </button>
                  </div>
                </div>
                <div className={classes["order-date"]}>
                  <span>
                    Order Date:
                    <input
                      placeholder="Select date"
                      defaultValue="June 16th 2022"
                    ></input>
                    <FontAwesomeIcon
                      icon={faCalendar}
                      className={classes.calendar}
                    />
                  </span>
                </div>
              </div>
            </div>
            <div className={classes["order-bills"]}>
              <div className={classes["bill-from"]}>
                <input placeholder="Bill From" type="text"></input>
                <textarea placeholder="Bill From Address"></textarea>
              </div>
              <div className={classes["bill-to"]}>
                <input placeholder="Bill To" type="text"></input>
                <textarea placeholder="Bill To Address"></textarea>
              </div>
            </div>
            <div className={classes["table-wrapper"]}>
              <table>
                <colgroup>
                  <col className={classes.col1}></col>
                  <col className={classes.col2}></col>
                  <col className={classes.col3}></col>
                  <col className={classes.col4}></col>
                  <col className={classes.col5}></col>
                  <col className={classes.col6}></col>
                </colgroup>
                <thead>
                  <tr>
                    <td className={classes["more-padding"]}>#</td>
                    <td>Item Name</td>
                    <td>Unit Costs</td>
                    <td>Unit</td>
                    <td>Price</td>
                    <td></td>
                  </tr>
                </thead>
                <tbody>
                  <tr>
                    <td className={classes["more-padding"]}>1</td>
                    <td>
                      <input
                        placeholder="Item Name"
                        className={classes.inputs}
                      ></input>
                    </td>
                    <td>
                      <input
                        placeholder="Unit Costs"
                        defaultValue="0"
                        className={classes.inputs}
                      ></input>
                    </td>
                    <td>
                      <input
                        placeholder="Unit"
                        defaultValue="0"
                        className={classes.inputs}
                      ></input>
                    </td>
                    <td>0</td>
                    <td></td>
                  </tr>
                </tbody>
              </table>
              <div className={classes["add-item-btn"]}>
                <button>Add Item</button>
              </div>
              <div className={classes.total}>
                <p className={classes["sub-total"]}>
                  <span>Sub Total: </span>
                  <span>$0</span>
                </p>
                <div className={classes["total-vat"]}>
                  <span>Total Vat:</span>
                  <div className={classes["total-sum"]}>
                    <span className={classes["input-wrapper"]}>
                      <input type="text" defaultValue="10"></input>
                      <span>%</span>
                    </span>
                    <span className={classes.sum}>$0</span>
                  </div>
                </div>
                <div className={classes["grand-total"]}>
                  <h3>Grand Total</h3>
                  <div className={classes.input}>
                    <input type="text" defaultValue="$"></input>
                    <span>0</span>
                  </div>
                </div>
              </div>
            </div>
            <div className={classes.dummy}></div>
          </div>
        </div>
        <footer className={classes.footer}>
          Isomorphic @ 2022 Created by RedQ, Inc
        </footer>
      </main>
    </section>
  );
};

export default AddInvoiceItem;
