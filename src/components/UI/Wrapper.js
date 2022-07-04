import React from "react";

import classes from "./Wrapper.module.css";

const Wrapper = (props) => {
  return (
    <section className={classes.section}>
      <main
        className={
          props.isShrinked ? classes["shrinked-wrapper"] : classes.wrapper
        }
      >
        {props.children}
      </main>
    </section>
  );
};

export default Wrapper;
