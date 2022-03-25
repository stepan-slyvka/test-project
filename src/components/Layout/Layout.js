import React from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faBars } from "@fortawesome/free-solid-svg-icons";

import classes from "../Layout/Layout.module.css";
import Search from "../Cart/Search";
import Bell from "../Cart/Notification";
import Messages from "../Cart/Messages";
import ShoppingCart from "../Cart/ShoppingCart";
import { Fragment } from "react/cjs/react.production.min";
import Avatar from "../Cart/Avatar";

const Layout = (props) => {
  return (
    <Fragment>
      <header
        className={
          props.isShrinkedLayout ? classes["header-shrinked"] : classes.header
        }
      >
        <div className={classes.menu}>
          <div className={classes.bars} onClick={props.onToggle}>
            <FontAwesomeIcon icon={faBars}></FontAwesomeIcon>
          </div>
        </div>
        <div
          className={
            props.isShrinkedLayout ? classes["icon-shrinked"] : classes.icon
          }
        >
          <Search />
          <Bell />
          <Messages />
          <ShoppingCart />
          <Avatar />
        </div>
      </header>
    </Fragment>
  );
};

export default Layout;
