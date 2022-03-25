import React from "react";

import classes from "../Pages/ContactInfo.module.css";

import ContactItem from "../Pages/ContactItem";

import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faPencil, faTimes } from "@fortawesome/free-solid-svg-icons";

const ContactInfo = (props) => {
  return (
    <section className={classes["contact-info"]}>
      <main className={classes["contact-better"]}>
        <div className={classes["more-info"]}>
          <div className={classes.buttons}>
            <button className={classes.pencil}>
              <FontAwesomeIcon icon={faPencil} />
            </button>
            <button className={classes.close}>
              <FontAwesomeIcon icon={faTimes} />
            </button>
            <button className={classes["add-new-user-btn"]}>
              Add New Contact
            </button>
          </div>
          <ContactItem
            key={props.contact.id}
            name={props.contact.name}
            mobile={props.contact.mobile}
            home={props.contact.home}
            company={props.contact.company}
            work={props.contact.work}
            notes={props.contact.notes}
          />
        </div>
      </main>
    </section>
  );
};

export default ContactInfo;
