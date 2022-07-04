import React, { Fragment } from "react";
import { useDispatch, useSelector } from "react-redux";
import { uiActions } from "../../store/ui-slice";
import { invoiceActions } from "../../store/invoice-slice";
import { INVOICES_LIST } from "../../store/invoice-slice";

import Wrapper from "../../UI/Wrapper";
import Card from "../../UI/Card";
import Footer from "../../UI/Footer";
import Button from "../../UI/Button";

import classes from "./AllInvoices.module.css";

import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";

import { faTrash, faChevronDown } from "@fortawesome/free-solid-svg-icons";
import AddInvoiceItem from "./AddInvoiceItem";

const AllInvoices = (props) => {
  const { id } = props;

  const dispatch = useDispatch();

  const toggleAddInvoices = () => {
    dispatch(uiActions.toggleAddInvoice());
  };

  const toggleSelectOptions = () => {
    dispatch(uiActions.toggleSelectOptions());
  };

  const toggleViewPage = () => {
    dispatch(uiActions.toggleViewPage());
  };

  const removeInvoiceItem = () => {
    dispatch(invoiceActions.removeInvoice({ id }));
  };

  const showMoreOptions = useSelector(
    (state) => state.ui.selectOptionsIsVisible
  );

  const showAddInvoice = useSelector(
    (state) => state.ui.addInvoicePageIsVisible
  );

  return (
    <Fragment>
      {!showAddInvoice ? (
        <Wrapper isShrinked={props.isShrinked}>
          <Card>
            <h1 className={classes.header}>Invoice</h1>
            <div className={classes.content}>
              <div
                className={classes["btn-wrapper"]}
                onClick={toggleAddInvoices}
              >
                <Button>Add Invoice</Button>
              </div>
              <div className={classes.invoices}>
                {showMoreOptions && (
                  <ul className={classes.list}>
                    <li>Select all invoices</li>
                    <li>Unselect all</li>
                    <li>Delete selected</li>
                  </ul>
                )}
                <table>
                  <colgroup>
                    <col className={classes.col1}></col>
                    <col className={classes.col2}></col>
                    <col className={classes.col3}></col>
                    <col className={classes.col4}></col>
                    <col className={classes.col5}></col>
                    <col className={classes.col6}></col>
                    <col className={classes.col7}></col>
                  </colgroup>
                  <thead className={classes["table-head"]}>
                    <tr>
                      <th className={classes.position}>
                        <span className={classes.checkbox}>
                          <input type="checkbox"></input>
                        </span>
                        <FontAwesomeIcon
                          icon={faChevronDown}
                          className={classes.chevron}
                          onClick={toggleSelectOptions}
                        />
                      </th>
                      <th>
                        <span className={classes["thead-text"]}>Number</span>
                      </th>
                      <th>
                        <span className={classes["thead-text"]}>Bill From</span>
                      </th>
                      <th>
                        <span className={classes["thead-text"]}>Bill To</span>
                      </th>
                      <th>
                        <span className={classes["thead-text"]}>
                          Total Cost
                        </span>
                      </th>
                      <th>
                        <span className={classes["thead-text"]}>Status</span>
                      </th>
                    </tr>
                  </thead>
                  <tbody>
                    {INVOICES_LIST.map((invoice, index) => (
                      <Fragment key={index}>
                        <tr
                          className={classes.height}
                          key={index}
                          id={invoice.id}
                        >
                          <td>
                            <span className={classes.checkbox}>
                              <input type="checkbox"></input>
                            </span>
                          </td>
                          <td>
                            <span>{invoice.invoice_num}</span>
                          </td>
                          <td>
                            <span>{invoice.bill_from}</span>
                          </td>
                          <td>
                            <span>{invoice.bill_to}</span>
                          </td>
                          <td>
                            <span>14300</span>
                          </td>
                          <td>
                            <span
                              className={`${
                                invoice.status === "Pending"
                                  ? classes["status-pending"]
                                  : ""
                              } ${
                                invoice.status === "Delivered"
                                  ? classes["status-delivered"]
                                  : ""
                              } ${
                                invoice.status === "Shipped"
                                  ? classes["status-shipped"]
                                  : ""
                              }`}
                            >
                              {invoice.status}
                            </span>
                          </td>
                          <td>
                            <div className={classes.buttons}>
                              <button
                                className={classes["view-btn"]}
                                onClick={toggleViewPage}
                              >
                                View
                              </button>
                              <button
                                className={classes["delete-btn"]}
                                onClick={removeInvoiceItem}
                              >
                                <FontAwesomeIcon icon={faTrash} />
                              </button>
                            </div>
                          </td>
                        </tr>
                      </Fragment>
                    ))}
                  </tbody>
                </table>
              </div>
            </div>
          </Card>
          <Footer />
        </Wrapper>
      ) : (
        <AddInvoiceItem isShrinked={props.isShrinked} />
      )}
    </Fragment>
  );
};

export default AllInvoices;
