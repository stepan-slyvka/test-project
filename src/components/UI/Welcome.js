import React from "react";

import classes from "../UI/Welcome.module.css";

const Welcome = () => {
  return (
    <div className={classes.wrapper}>
      <h1>IMPORTANT!</h1>
      <h3>
        Welcome to my website! You can visit Invoice and Contacts page.
        Unfortunately, other pages aren't ready yet.
      </h3>
    </div>
  );
};

export default Welcome;
