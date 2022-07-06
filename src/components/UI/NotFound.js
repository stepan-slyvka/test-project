import React from "react";

import classes from "../UI/NotFound.module.css";

const NotFound = () => {
  return (
    <div className={classes.wrapper}>
      <h1>WARNING!</h1>
      <h3>This page is not found! Please, check your url!</h3>
    </div>
  );
};

export default NotFound;
