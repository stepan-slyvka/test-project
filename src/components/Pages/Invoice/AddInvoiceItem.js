import React, { useState } from "react";
import { useDispatch, useSelector } from "react-redux";

import { uiActions } from "../../store/ui-slice";

import classes from "./AddInvoiceItem.module.css";

import { useFormik } from "formik";

import DatePicker from "react-datepicker";
import "react-datepicker/dist/react-datepicker.css";

import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faCalendar } from "@fortawesome/free-solid-svg-icons";

import { faEllipsis } from "@fortawesome/free-solid-svg-icons";
import { invoiceActions } from "../../store/invoice-slice";

const AddInvoiceItem = (props) => {
  // const {} = props;

  const options = ["Pending", "Shipped", "Delivered"];

  const [startDate, setStartDate] = useState(new Date());
  const [selectedOption, setSelectedOption] = useState("Pending");

  const optionClickHandler = (value) => () => {
    setSelectedOption(value);
    dispatch(uiActions.toggleMoreOptions());
  };

  const addInvoiceHandler = (invoice) => {
    dispatch(
      invoiceActions.addNewInvoice({
        invoiceNumber: invoice.number,
        billFrom: invoice.bill_from,
        billFromAddress: invoice.bill_from_address,
        billTo: invoice.bill_to,
        billToAddress: invoice.bill_to_address,
      })
    );
  };

  const formikInvoice = useFormik({
    initialValues: {
      invoiceNumber: "",
      billFrom: "",
      billFromAddress: "",
      billTo: "",
      billToAddress: "",
      itemName: "",
      unitCosts: "",
      unit: "",
      // date: startDate,
    },
    onSubmit: (val) => {
      dispatch(invoiceActions.addNewInvoice(val));
      dispatch(uiActions.toggleAddInvoice());
    },
  });

  // const addInvoiceHandler = (newInvoice) => {
  //   const contact = {
  //     invoiceNumber: newInvoice.number,
  //     billFrom: newInvoice.bill_from,
  //   };
  //   state.invoices(contact);
  // };

  const dispatch = useDispatch();

  const toggleAddInvoices = () => {
    dispatch(uiActions.toggleAddInvoice());
  };

  const toggleMoreOptions = () => {
    dispatch(uiActions.toggleMoreOptions());
  };

  const showOtherOptions = useSelector(
    (state) => state.ui.selectMoreOptionsIsVisible
  );

  return (
    <form onSubmit={formikInvoice.handleSubmit}>
      <section className={classes.section}>
        <main className={classes.wrapper}>
          <div className={classes["content-wrapper"]}>
            <div className={classes.content}>
              <div className={classes["buttons-wrapper"]}>
                <button
                  type="button"
                  className={classes["cancel-btn"]}
                  onClick={toggleAddInvoices}
                >
                  Cancel
                </button>
                <button
                  type="submit"
                  className={classes["save-btn"]}
                  onClick={addInvoiceHandler}
                >
                  Save
                </button>
              </div>
              <div className={classes["invoice-info-wrapper"]}>
                <div className={classes["invoice-info"]}>
                  <h3>Invoice Info</h3>
                  <input
                    placeholder="Number"
                    type="text"
                    name="invoiceNumber"
                    id="invoiceNumber"
                    onChange={formikInvoice.handleChange}
                    value={formikInvoice.values.invoiceNumber}
                    onBlur={formikInvoice.handleBlur}
                  ></input>
                </div>
                <div className={classes["right-side-column"]}>
                  <div className={classes["order-status"]}>
                    <span>Order Status: </span>
                    <div className={classes.buttons}>
                      {showOtherOptions && (
                        <ul className={classes.options}>
                          {options.map((option) => (
                            <li
                              onClick={optionClickHandler(option)}
                              key={Math.random()}
                            >
                              {option}
                            </li>
                          ))}
                        </ul>
                      )}
                      <button type="button" className={classes.status}>
                        {selectedOption}
                      </button>
                      <button
                        type="button"
                        className={classes.dots}
                        onClick={toggleMoreOptions}
                      >
                        <FontAwesomeIcon icon={faEllipsis} />
                      </button>
                    </div>
                  </div>
                  <div className={classes["order-date"]}>
                    <span>Order Date:</span>
                    <DatePicker
                      className={classes["order-date-input"]}
                      selected={startDate}
                      onChange={(val) => setStartDate(val)}
                    />
                    <FontAwesomeIcon
                      icon={faCalendar}
                      className={classes.calendar}
                    ></FontAwesomeIcon>
                  </div>
                </div>
              </div>
              <div className={classes["order-bills"]}>
                <div className={classes["bill-from"]}>
                  <input
                    placeholder="Bill From"
                    type="text"
                    name="billFrom"
                    id="billFrom"
                    onChange={formikInvoice.handleChange}
                    value={formikInvoice.values.billFrom}
                    onBlur={formikInvoice.handleBlur}
                  ></input>
                  <textarea
                    placeholder="Bill From Address"
                    name="billFromAddress"
                    id="billFromAddress"
                    onChange={formikInvoice.handleChange}
                    value={formikInvoice.values.billFromAddress}
                    onBlur={formikInvoice.handleBlur}
                  ></textarea>
                </div>
                <div className={classes["bill-to"]}>
                  <input
                    placeholder="Bill To"
                    type="text"
                    name="billTo"
                    id="billTo"
                    onChange={formikInvoice.handleChange}
                    value={formikInvoice.values.billTo}
                    onBlur={formikInvoice.handleBlur}
                  ></input>
                  <textarea
                    placeholder="Bill To Address"
                    name="billToAddress"
                    id="billToAddress"
                    onChange={formikInvoice.handleChange}
                    value={formikInvoice.values.billToAddress}
                    onBlur={formikInvoice.handleBlur}
                  ></textarea>
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
                          name="itemName"
                          id="itemName"
                          onChange={formikInvoice.handleChange}
                          value={formikInvoice.values.itemName}
                          onBlur={formikInvoice.handleBlur}
                        ></input>
                      </td>
                      <td>
                        <input
                          placeholder="Unit Costs"
                          className={classes.inputs}
                          name="unitCosts"
                          id="unitCosts"
                          onChange={formikInvoice.handleChange}
                          value={formikInvoice.values.unitCosts}
                          onBlur={formikInvoice.handleBlur}
                        ></input>
                      </td>
                      <td>
                        <input
                          placeholder="Unit"
                          className={classes.inputs}
                          name="unit"
                          id="unit"
                          onChange={formikInvoice.handleChange}
                          value={formikInvoice.values.unit}
                          onBlur={formikInvoice.handleBlur}
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
    </form>
  );
};

export default AddInvoiceItem;
