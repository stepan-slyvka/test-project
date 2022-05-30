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

  const handleEditSuccess = (item) => {
    const updatedItems = props.contactsList.map((data) => {
      console.log("item-" + item.id);
      console.log("data-" + data.id);
      if (data.id === item.id) {
        console.log("id matches");
        return [
          {
            company: item.company,
            name: item.firstName,
            home: item.home,
            surname: item.lastName,
            mobile: item.mobile,
            notes: item.notes,
            work: item.work,
            id: item.id,
          },
        ];
      }
      return data;
    });
    console.log(item);
    props.setContactsList(updatedItems);
    console.log(updatedItems);
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
            id={props.contact.id}
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
            id={props.contact.id}
            firstName={props.contact.name}
            lastName={props.contact.surname}
            mobile={props.contact.mobile}
            home={props.contact.home}
            company={props.contact.company}
            work={props.contact.work}
            notes={props.contact.notes}
            handleEdit={handleEdit}
            handleEditSuccess={handleEditSuccess}
          />
        )}
      </main>
    </section>
  );
};

export default ContactInfo;
