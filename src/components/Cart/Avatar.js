import React from "react";

import girlImage from "../../images/girlImage.jpg";

import classes from "../Cart/Avatar.module.css";

const Avatar = () => {
  return (
    <div className={classes.avatar}>
      <div className={classes.wrapper}>
        <img
          className={classes.avatar}
          src={girlImage}
          alt="avatar of a person"
        />
        <div className={classes["online-status"]}></div>
      </div>
    </div>
  );
};

export default Avatar;
