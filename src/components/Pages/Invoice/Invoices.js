import React, { useState } from "react";

import classes from "./Invoices.module.css";

import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";

import { faTrash, faChevronDown } from "@fortawesome/free-solid-svg-icons";

const Invoices = (props) => {
  const [showOptions, setShowOptions] = useState(false);

  const toggleOptions = () => {
    setShowOptions(!showOptions);
  };

  return (
    <section className={classes.section}>
      <main
        className={
          props.isShrinkedContent
            ? classes["shrinked-wrapper"]
            : classes.wrapper
        }
      >
        <div className={classes["content-wrapper"]}>
          <h1 className={classes.header}>Invoice</h1>
          <div className={classes.content}>
            <div className={classes["btn-wrapper"]}>
              <button className={classes["add-btn"]}>Add Invoice</button>
            </div>
            <div className={classes.invoices}>
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
                  {showOptions && (
                    <ul className={classes.list}>
                      <li>Select all invoices</li>
                      <li>Unselect all</li>
                      <li>Delete selected</li>
                    </ul>
                  )}
                  <tr>
                    <th className={classes.position}>
                      <span className={classes.checkbox}>
                        <input type="checkbox"></input>
                      </span>
                      <FontAwesomeIcon
                        icon={faChevronDown}
                        className={classes.chevron}
                        onClick={toggleOptions}
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
                  <tr className={classes.height}>
                    <td>
                      <span className={classes.checkbox}>
                        <input type="checkbox"></input>
                      </span>
                    </td>
                    <td>
                      <span>#1232</span>
                    </td>
                    <td>
                      <span>Pineapple Inc.</span>
                    </td>
                    <td>
                      <span>REDQ Inc</span>.
                    </td>
                    <td>
                      <span>14630</span>
                    </td>
                    <td>
                      <span className={classes["status-pending"]}>Pending</span>
                    </td>
                    <td>
                      <div className={classes.buttons}>
                        <button className={classes["view-btn"]}>View</button>
                        <button className={classes["delete-btn"]}>
                          <FontAwesomeIcon icon={faTrash} />
                        </button>
                      </div>
                    </td>
                  </tr>
                  <tr className={classes.height}>
                    <td>
                      <span className={classes.checkbox}>
                        <input type="checkbox"></input>
                      </span>
                    </td>
                    <td>
                      <span>#1232</span>
                    </td>
                    <td>
                      <span>Pineapple Inc.</span>
                    </td>
                    <td>
                      <span>REDQ Inc.</span>
                    </td>
                    <td>
                      <span>14630</span>
                    </td>
                    <td>
                      <span className={classes["status-delivered"]}>
                        Delivered
                      </span>
                    </td>
                    <td>
                      <div className={classes.buttons}>
                        <button className={classes["view-btn"]}>View</button>
                        <button className={classes["delete-btn"]}>
                          <FontAwesomeIcon icon={faTrash} />
                        </button>
                      </div>
                    </td>
                  </tr>
                  <tr className={classes.height}>
                    <td>
                      <span className={classes.checkbox}>
                        <input type="checkbox"></input>
                      </span>
                    </td>
                    <td>
                      <span>#1232</span>
                    </td>
                    <td>
                      <span>Pineapple Inc.</span>
                    </td>
                    <td>
                      <span>REDQ Inc.</span>
                    </td>
                    <td>
                      <span>14630</span>
                    </td>
                    <td>
                      <span className={classes["status-shipped"]}>Shipped</span>
                    </td>
                    <td>
                      <div className={classes.buttons}>
                        <button className={classes["view-btn"]}>View</button>
                        <button className={classes["delete-btn"]}>
                          <FontAwesomeIcon icon={faTrash} />
                        </button>
                      </div>
                    </td>
                  </tr>
                </tbody>
              </table>
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

export default Invoices;
