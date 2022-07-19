import React, { Fragment } from "react";
import { useDispatch, useSelector } from "react-redux";
import { uiActions } from "../../store/ui-slice";
import { Link } from "react-router-dom";

import Invoice from "./Invoice";
import Wrapper from "../../UI/Wrapper";
import Card from "../../UI/Card";
import Footer from "../../UI/Footer";
import Button from "../../UI/Button";

import classes from "./AllInvoices.module.css";

import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";

import { faChevronDown } from "@fortawesome/free-solid-svg-icons";

const AllInvoices = (props) => {
  const dispatch = useDispatch();

  const toggleSelectOptions = () => {
    dispatch(uiActions.toggleSelectOptions());
  };

  const showMoreOptions = useSelector(
    (state) => state.ui.selectOptionsIsVisible
  );

  const invoiceList = useSelector((state) => state.invoice.invoices);

  return (
    <Fragment>
      <Wrapper isShrinked={props.isShrinked}>
        <Card>
          <h1 className={classes.header}>Invoice</h1>
          <div className={classes.content}>
            <div className={classes["btn-wrapper"]}>
              <Link to="/invoices/add-invoice">
                <Button>Add Invoice</Button>
              </Link>
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
                      <span className={classes["thead-text"]}>Total Cost</span>
                    </th>
                    <th>
                      <span className={classes["thead-text"]}>Status</span>
                    </th>
                  </tr>
                </thead>
                <tbody>
                  {invoiceList.map((invoice, index) => (
                    <Invoice
                      key={index}
                      invoiceItem={{
                        id: invoice.id,
                        invoice_num: invoice.invoice_num,
                        bill_from: invoice.bill_from,
                        bill_to: invoice.bill_to,
                        status: invoice.status,
                      }}
                    />
                  ))}
                </tbody>
              </table>
            </div>
          </div>
        </Card>
        <Footer />
      </Wrapper>
    </Fragment>
  );
};

export default AllInvoices;
