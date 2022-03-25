import React from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faComments } from "@fortawesome/free-solid-svg-icons";

import classes from "../Cart/Messages.module.css";

const Messages = () => {
  return (
    <div className={classes.wrapper}>
      <FontAwesomeIcon icon={faComments}></FontAwesomeIcon>
      <div className={classes["comments-count"]}>
        <span>4</span>
      </div>
    </div>
  );
};

export default Messages;
