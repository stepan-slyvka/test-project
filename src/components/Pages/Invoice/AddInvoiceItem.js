import React, { useState } from "react";
import { useDispatch, useSelector } from "react-redux";

import { uiActions } from "../../store/ui-slice";

import classes from "./AddInvoiceItem.module.css";

import { useFormik } from "formik";

import Wrapper from "../../UI/Wrapper";
import Card from "../../UI/Card";
import Footer from "../../UI/Footer";
import Button from "../../UI/Button";

import DatePicker from "react-datepicker";
import "react-datepicker/dist/react-datepicker.css";

import { v4 as uuidv4 } from "uuid";

import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faCalendar } from "@fortawesome/free-solid-svg-icons";

import { faEllipsis } from "@fortawesome/free-solid-svg-icons";
import { invoiceActions } from "../../store/invoice-slice";
import { Link, useNavigate } from "react-router-dom";

const AddInvoiceItem = (props) => {
  const navigate = useNavigate();

  const date = new Date();

  const options = ["Pending", "Shipped", "Delivered"];

  // const inputs = [{ item_name: "", unit_costs: "", unit: "" }];

  const [startDate, setStartDate] = useState(date);
  const [selectedOption, setSelectedOption] = useState(options[0]);
  // const [listItems, setListItems] = useState(inputs);
  // const [subtotalValue, setSubtotal] = useState(0);
  // const [totalVatPercentage, setTotalVatParcentage] = useState(0);
  // const [totalVatValue, setTotalVatValue] = useState(0);
  // const [grandTotalValue, setGrandTotalValue] = useState(0);

  // const listenTotalVat = (event) => {
  //   const totalVat = parseInt(
  //     (parseFloat(event.target.value) * parseFloat(subtotalValue)) / 100
  //   );
  //   const grandTotal = subtotalValue + totalVat;

  //   setGrandTotalValue(grandTotal);
  //   setTotalVatParcentage(parseInt(event.target.value));
  //   setTotalVatValue(totalVat);
  // };

  const optionClickHandler = (value) => () => {
    setSelectedOption(value);
    dispatch(uiActions.toggleMoreOptions());
  };

  const addInvoiceHandler = (invoice) => {
    dispatch(
      invoiceActions.addNewInvoice({
        id: uuidv4(),
        invoiceNumber: invoice.invoiceNumber,
        billFrom: invoice.billFrom,
        billFromInfo: invoice.billFromInfo,
        billTo: invoice.billTo,
        billToInfo: invoice.billToInfo,
        status: selectedOption,
        order_date: startDate.toUTCString(),
        grand_total: props.grandTotalValue,
        ITEMS: [...updateValuesOnSubmit()],
      })
    );
  };

  const formikInvoice = useFormik({
    initialValues: {
      invoiceNumber: "#",
      billFrom: "",
      billFromInfo: "",
      billTo: "",
      billToInfo: "",
    },
    onSubmit: (val) => {
      addInvoiceHandler(val);
      navigate("/invoices", { replace: true });
    },
  });

  const dispatch = useDispatch();

  const toggleMoreOptions = () => {
    dispatch(uiActions.toggleMoreOptions());
  };

  const showOtherOptions = useSelector(
    (state) => state.ui.selectMoreOptionsIsVisible
  );

  let counter = 1;

  const addItemHandler = () => {
    props.setListItems(
      props.listItems.concat({ item_name: "", unit_costs: "", unit: "" })
    );
  };

  // const calculateTotal = () => {
  //   let subtotal = 0;

  //   listItems.map((item) => {
  //     const itemTotal = parseFloat(item.unit_costs) * parseFloat(item.unit);
  //     return (subtotal = subtotal + itemTotal);
  //   });

  //   setSubtotal(subtotal);
  // };

  const updateItemHandler = (index, inputName, value) => {
    props.listItems[index] = { ...props.listItems[index], [inputName]: value };
    props.calculateTotal();
  };

  const updateValuesOnSubmit = () => {
    return props.listItems;
  };

  return (
    <form onSubmit={formikInvoice.handleSubmit}>
      <Wrapper isShrinked={props.isShrinked}>
        <Card>
          <div className={classes.content}>
            <div className={classes["buttons-wrapper"]}>
              <Link to="/invoices">
                <button type="button" className={classes["cancel-btn"]}>
                  Cancel
                </button>
              </Link>
              <Button>Save</Button>
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
                        {options.map((option, index) => (
                          <li onClick={optionClickHandler(option)} key={index}>
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
                    dateFormat="MM/dd/yyyy"
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
                  placeholder="Bill From Info"
                  name="billFromInfo"
                  id="billFromInfo"
                  onChange={formikInvoice.handleChange}
                  value={formikInvoice.values.billFromInfo}
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
                  placeholder="Bill To Info"
                  name="billToInfo"
                  id="billToInfo"
                  onChange={formikInvoice.handleChange}
                  value={formikInvoice.values.billToInfo}
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
                  {props.listItems.map((item, index) => (
                    <tr key={index}>
                      <td className={classes["more-padding"]}>{counter++}</td>
                      <td>
                        <input
                          placeholder="Item Name"
                          className={classes.inputs}
                          name="itemName"
                          id="itemName"
                          onChange={(e) =>
                            updateItemHandler(
                              index,
                              "item_name",
                              e.currentTarget.value
                            )
                          }
                          value={formikInvoice.values.item_name}
                          onBlur={formikInvoice.handleBlur}
                        ></input>
                      </td>
                      <td>
                        <input
                          placeholder="Unit Costs"
                          className={classes.inputs}
                          name="unitCosts"
                          id="unitCosts"
                          onChange={(e) =>
                            updateItemHandler(
                              index,
                              "unit_costs",
                              e.currentTarget.value
                            )
                          }
                          value={formikInvoice.values.unit_costs}
                          onBlur={formikInvoice.handleBlur}
                        ></input>
                      </td>
                      <td>
                        <input
                          placeholder="Unit"
                          className={classes.inputs}
                          name="unit"
                          id="unit"
                          onChange={(e) =>
                            updateItemHandler(
                              index,
                              "unit",
                              e.currentTarget.value
                            )
                          }
                          value={formikInvoice.values.units}
                          onBlur={formikInvoice.handleBlur}
                        ></input>
                      </td>
                      <td>{item.unit_costs * item.unit}</td>
                      <td></td>
                    </tr>
                  ))}
                </tbody>
              </table>
              <div className={classes["add-item-btn"]}>
                <button
                  onClick={addItemHandler}
                  type="button"
                  className={classes["add-item-btn"]}
                >
                  Add Item
                </button>
              </div>
              <div className={classes.total}>
                <p className={classes["sub-total"]}>
                  <span>Sub Total: </span>
                  <span>${props.subtotalValue}</span>
                </p>
                <div className={classes["total-vat"]}>
                  <span>Total Vat:</span>
                  <div className={classes["total-sum"]}>
                    <span className={classes["input-wrapper"]}>
                      <input
                        value={props.totalVatPercentage}
                        onChange={props.listenTotalVat}
                      ></input>
                      <span>%</span>
                    </span>
                    <span className={classes.sum}>${props.totalVatValue}</span>
                  </div>
                </div>
                <div className={classes["grand-total"]}>
                  <h3>Grand Total</h3>
                  <div className={classes.input}>
                    <span>${props.grandTotalValue}</span>
                  </div>
                </div>
              </div>
            </div>
            <div className={classes.dummy}></div>
          </div>
        </Card>
        <Footer />
      </Wrapper>
    </form>
  );
};

export default AddInvoiceItem;
