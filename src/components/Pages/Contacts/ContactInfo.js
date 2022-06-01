import React, { useContext } from "react";

import classes from "../Contacts/ContactInfo.module.css";

import ContactItem from "../Contacts/ContactItem";
import ContactForm from "../Contacts/ContactForm";
import ContactEditForm from "../Contacts/ContactEditForm";
import Context from "../../context/contacts-context";

import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faPencil, faTimes, faCheck } from "@fortawesome/free-solid-svg-icons";

// TRYING OUT USEREDUCER HOOK

// const formReducer = (state, action) => {
//   if (action.type === "SHOW_EDIT") {
//     return { formIsShown: true, isEditing: true };
//   }
//   if (action.type === "SHOW_FORM") {
//     return { formIsShown: true, isEditing: false };
//   }
//   return { formIsShown: false, isEditing: false };
// };

const ContactInfo = (props) => {
  const ctx = useContext(Context);
  // THIS IS OLD VERSION! DON'T DELETE CODE!

  // const [formIsShown, setFormIsShown] = useState(false);
  // const [isEditing, setIsEditing] = useState(false);

  // // const [formState, dispatchForm] = useReducer(formReducer, {
  // //   formIsShown: false,
  // //   isEditing: false,
  // // });

  // const showEdit = () => {
  //   setIsEditing(true);
  //   setFormIsShown(true);
  //   // dispatchForm({ type: "SHOW_EDIT" });
  // };

  // const showForm = () => {
  //   setFormIsShown(true);
  //   // dispatchForm({ type: "SHOW_FORM" });
  // };

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
      if (data.id === item.id) {
        return {
          company: item.company,
          name: item.firstName,
          home: item.home,
          surname: item.lastName,
          mobile: item.mobile,
          notes: item.notes,
          work: item.work,
          id: item.id,
        };
      }
      return data;
    });
    props.setContactsList(updatedItems);
  };

  return (
    <section className={classes["contact-info"]}>
      <main className={classes["contact-better"]}>
        {!ctx.formIsShown ? (
          <div className={classes.buttons}>
            {!ctx.formIsShown ? (
              <button onClick={ctx.showEdit} className={classes.pencil}>
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
            <button
              className={classes["add-new-user-btn"]}
              onClick={ctx.showForm}
            >
              Add New Contact
            </button>
          </div>
        ) : (
          <div className={classes.buttons}></div>
        )}

        {!ctx.formIsShown ? (
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
        ) : !ctx.isEditing ? (
          <ContactForm
            setFormIsShown={ctx.setFormIsShown}
            handleAdd={handleAdd}
            setSelectedContact={props.setSelectedContact}
            setIsEditing={ctx.setIsEditing}
          />
        ) : (
          <ContactEditForm
            setFormIsShown={ctx.setFormIsShown}
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
