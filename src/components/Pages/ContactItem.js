import React from "react";

import classes from "./ContactItem.module.css";

const ContactItem = (props) => {
  return (
    <div className={classes["person-info"]}>
      <div className={classes["card-wrapper"]}>
        <div className={classes["image"]}>
          <img
            src="https://ziadfathy.github.io/ZfTemplate/images/01.jpg"
            alt="#"
            width="120px"
            height="120px"
          ></img>
        </div>
        <h1>
          {props.name} {props.surname}
        </h1>
      </div>
      <div className={classes["additional-contact-wrapper"]}>
        <div className={classes.useful}>
          <p className={classes.heading}>Mobile :</p>
          <p className={classes.text}>{props.mobile}</p>
        </div>
        <div className={classes.useful}>
          <p className={classes.heading}>Home :</p>
          <p className={classes.text}>{props.home}</p>
        </div>
        <div className={classes.useful}>
          <p className={classes.heading}>Company :</p>
          <p className={classes.text}>{props.company}</p>
        </div>
        <div className={classes.useful}>
          <p className={classes.heading}>Work :</p>
          <p className={classes.text}>{props.work}</p>
        </div>
        <div className={classes.useful}>
          <p className={classes.heading}>Notes :</p>
          <p className={classes.text}>{props.notes}</p>
        </div>
      </div>
    </div>
  );
};

export default ContactItem;
