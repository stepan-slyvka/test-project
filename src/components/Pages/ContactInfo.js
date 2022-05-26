import React, { useState } from "react";

import classes from "../Pages/ContactInfo.module.css";

import ContactItem from "../Pages/ContactItem";
import ContactForm from "./ContactForm";
import ContactEditForm from "./ContactEditForm";

import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faPencil, faTimes, faCheck } from "@fortawesome/free-solid-svg-icons";

const ContactInfo = (props) => {
  const [formIsShown, setFormIsShown] = useState(false);
  const [isEditing, setIsEditing] = useState(false);

  const showEdit = () => {
    setIsEditing(true);
    setFormIsShown(true);
  };

  const showForm = () => {
    setFormIsShown(true);
  };

  const handleAdd = (val) => {
    const newList = props.contactsList.concat({
      id: Math.random(),
      name: val.firstName,
      surname: val.lastName,
      mobile: val.mobile,
      home: val.home,
      company: val.company,
      work: val.work,
      notes: val.notes,
    });

    props.setContactsList(newList);
    props.setSelectedContact(val);
  };

  // 2 POSSIBLE VARIANTS OF EDITING =====>

  // const handleEdit = (item) => {
  //   const updatedItems = props.contactsList.map((el) =>
  //     el.id === item.id ? item : el
  //   );

  //   props.setContactsList(updatedItems);
  // };

  // const handleEdit = (item) => {
  //   props.contactsList.forEach((elem, indx) => {
  //     if (elem.id === item.id) {
  //       props.setContactsList(indx);
  //     }
  //   });
  // };

  const handleEdit = (item) => {
    const updatedItems = props.contactsList.findIndex(
      (elem) => elem.id === item.id
    );

    props.setContactsList[updatedItems] = props.contactsList;
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
            <button className={classes["add-new-user-btn"]} onClick={showForm}>
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
            setIsEditing={setIsEditing}
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
            handleEdit={handleEdit}
            handleEditSuccess={props.handleEditSuccess}
          />
        )}
      </main>
    </section>
  );
};

export default ContactInfo;
