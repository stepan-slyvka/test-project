import React, { useState } from "react";

import classes from "../Pages/ContactInfo.module.css";

import ContactItem from "../Pages/ContactItem";
import ContactForm from "./ContactForm";

import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faPencil, faTimes, faCheck } from "@fortawesome/free-solid-svg-icons";
import ContactEditForm from "./ContactEditForm";

const ContactInfo = (props) => {
  const [formIsShown, setFormIsShown] = useState(false);
  const [isEditing, setIsEditing] = useState(false);

  const showEdit = () => {
    setIsEditing(true);
<<<<<<< HEAD
    setFormIsShown(true);
=======
		setFormIsShown(true);
>>>>>>> a3761183d703af67290656d1119ccf7c5fcbe04f
  };

  const showEl = () => {
    setFormIsShown(true);
  };

  const handleAdd = (val) => {
    const newList = props.contactsList.concat({
      id: Math.random(),
      name: val.firstName + " " + val.lastName,
      mobile: val.mobile,
      home: val.home,
      company: val.company,
      work: val.work,
      notes: val.notes,
    });

    props.setContactsList(newList);
    props.setSelectedContact(val);
  };

  return (
    <section className={classes["contact-info"]}>
      <main className={classes["contact-better"]}>
        {!formIsShown ? (
          <div className={classes.buttons}>
            {!formIsShown ? (
              <button onClick={showEdit} className={classes.pencil}>
                <FontAwesomeIcon icon={faPencil} />
              </button>
            ) : (
              <button className={classes.check}>
                <FontAwesomeIcon icon={faCheck} />
              </button>
            )}
            <button
              className={classes.close}
              onClick={() => props.handleDelete(props.contact.id)}
            >
              <FontAwesomeIcon icon={faTimes} />
            </button>
            <button className={classes["add-new-user-btn"]} onClick={showEl}>
              Add New Contact
            </button>
          </div>
        ) : (
          <div className={classes.buttons}></div>
        )}
        
        
        
        {!formIsShown ? (
          <ContactItem
            key={props.contact.id}
            name={props.contact.name}
            surname={props.contact.surname}
            mobile={props.contact.mobile}
            home={props.contact.home}
            company={props.contact.company}
            work={props.contact.work}
            notes={props.contact.notes}
          />
        ) : !isEditing ? (
          <ContactForm
            setFormIsShown={setFormIsShown}
            handleAdd={handleAdd}
            setSelectedContact={props.setSelectedContact}
          />
        ) : (
          <ContactEditForm
            setFormIsShown={setFormIsShown}
            setSelectedContact={props.setSelectedContact}
            firstName={props.contact.name}
            lastName={props.contact.surname}
            mobile={props.contact.mobile}
            home={props.contact.home}
            company={props.contact.company}
            work={props.contact.work}
            notes={props.contact.notes}
            handleEdit={props.handleEdit}
          />
        )}
      </main>
    </section>
  );
};

export default ContactInfo;
