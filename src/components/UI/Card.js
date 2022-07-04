import React from "react";

import classes from "./Card.module.css";

const Card = (props) => {
  return <div className={classes["content-wrapper"]}>{props.children}</div>;
};

export default Card;
