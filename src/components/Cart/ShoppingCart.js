import React from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faShoppingCart } from "@fortawesome/free-solid-svg-icons";

import classes from "../Cart/ShoppingCart.module.css";

const ShoppingCart = () => {
  return (
    <div className={classes.wrapper}>
      <FontAwesomeIcon icon={faShoppingCart}></FontAwesomeIcon>
      <div className={classes["shopping-cart-count"]}>
        <span>4</span>
      </div>
    </div>
  );
};

export default ShoppingCart;
