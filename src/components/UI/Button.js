import React from "react";

import classes from "../UI/Button.module.css";

const Button = (props) => {
  return (
    <button type="submit" className={classes.btn}>
      {props.children}
    </button>
  );
};

export default Button;
