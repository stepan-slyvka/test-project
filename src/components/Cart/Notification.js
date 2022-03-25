import React from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faBell } from "@fortawesome/free-solid-svg-icons";
import classes from "../Cart/Notification.module.css";

const Bell = () => {
  return (
    <div className={classes.wrapper}>
      <FontAwesomeIcon icon={faBell}></FontAwesomeIcon>
      <div className={classes["notifications-count"]}>
        <span>4</span>
      </div>
    </div>
  );
};

export default Bell;
