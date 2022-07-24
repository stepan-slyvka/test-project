import React from "react";

import classes from "./Invoice.module.css";

import { useDispatch } from "react-redux";
import { Link } from "react-router-dom";

import { invoiceActions } from "../../store/invoice-slice";

import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";

import { faTrash } from "@fortawesome/free-solid-svg-icons";

const Invoice = (props) => {
  const { id, invoice_num, bill_from, bill_to, status } = props.invoiceItem;

  const dispatch = useDispatch();

  const removeInvoiceItem = () => {
    dispatch(invoiceActions.removeInvoice(id));
  };

  return (
    <tr className={classes.height} key={id}>
      <td>
        <span className={classes.checkbox}>
          <input type="checkbox"></input>
        </span>
      </td>
      <td>
        <span>{invoice_num}</span>
      </td>
      <td>
        <span>{bill_from}</span>
      </td>
      <td>
        <span>{bill_to}</span>
      </td>
      <td>
        <span>14300</span>
        {/* This should be a dynamic value later */}
      </td>
      <td>
        <span
          className={`${
            status === "Pending" ? classes["status-pending"] : ""
          } ${status === "Delivered" ? classes["status-delivered"] : ""} ${
            status === "Shipped" ? classes["status-shipped"] : ""
          }`}
        >
          {status}
        </span>
      </td>
      <td>
        <div className={classes.buttons}>
          <Link to={`/invoices/invoice-description/${id}`}>
            <button className={classes["view-btn"]}>View</button>
          </Link>
          <button className={classes["delete-btn"]} onClick={removeInvoiceItem}>
            <FontAwesomeIcon icon={faTrash} />
          </button>
        </div>
      </td>
    </tr>
  );
};

export default Invoice;
