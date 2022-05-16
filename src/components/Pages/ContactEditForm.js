import React from "react";

import classes from "../Pages/ContactEditForm.module.css";

import { useFormik } from "formik";

const ContactEditForm = (props) => {
  const validate = (values) => {
    const errors = {};

    if (!values.firstName) {
      errors.firstName = "Required";
    } else if (values.firstName.length < 3) {
      errors.firstName = "Must be 3 characters or more";
    }

    if (!values.lastName) {
      errors.lastName = "Required";
    } else if (values.lastName.length < 4) {
      errors.lastName = "Must be 4 characters or more";
    }

    if (!values.mobile) {
      errors.mobile = "Required";
    } else if (values.mobile.length < 11) {
      errors.mobile = "Must be 11 characters or more";
    }

    if (!values.home) {
      errors.home = "Required";
    } else if (values.home.length < 11) {
      errors.home = "Must be 11 characters or more";
    }

    if (!values.company) {
      errors.company = "Required";
    } else if (values.company.length < 4) {
      errors.company = "Must be 4 characters or more";
    }

    if (!values.work) {
      errors.work = "Required";
    } else if (values.work.length < 11) {
      errors.work = "Must be 11 characters or more";
    }

    if (!values.notes) {
      errors.notes = "Required";
    } else if (values.notes.length < 5) {
      errors.notes = "Must be 5 characters or more";
    }

    return errors;
  };

  const formik = useFormik({
    initialValues: {
      firstName: "",
      lastName: "",
      mobile: "",
      home: "",
      company: "",
      work: "",
      notes: "",
    },
    validate,
    onSubmit: (val) => {
      props.setFormIsShown(false);
      props.setSelectedContact(val);
    },
  });

  return (
    <form
      className={classes["add-contact-wrapper"]}
      onSubmit={formik.handleSubmit}
    >
      <div className={classes["image-wrapper"]}>
        <img
          src="https://ziadfathy.github.io/ZfTemplate/images/01.jpg"
          alt="#"
          width="120px"
          height="120px"
        ></img>
        <h1>No Name</h1>
      </div>
      <div className={classes["inputs-wrapper"]}>
        <div className={classes["contact-wrapper"]}>
          <label htmlFor="first-name">First Name:</label>
          <input
            className={classes["contacts-inputs"]}
            placeholder="First Name"
            type="text"
            name="firstName"
            id="firstName"
            onChange={formik.handleChange}
            value={formik.values.firstName}
            onBlur={formik.handleBlur}
          ></input>
          {formik.touched.firstName && formik.errors.firstName ? (
            <h5 className={classes.error}>{formik.errors.firstName}</h5>
          ) : null}
        </div>
        <div className={classes["contact-wrapper"]}>
          <label htmlFor="last-name">Last Name:</label>
          <input
            className={classes["contacts-inputs"]}
            placeholder="Last Name"
            type="text"
            name="lastName"
            id="lastName"
            onChange={formik.handleChange}
            value={formik.values.lastName}
            onBlur={formik.handleBlur}
          ></input>
          {formik.touched.lastName && formik.errors.lastName ? (
            <h5 className={classes.error}>{formik.errors.lastName}</h5>
          ) : null}
        </div>
        <div className={classes["contact-wrapper"]}>
          <label htmlFor="mobile">Mobile:</label>
          <input
            className={classes["contacts-inputs"]}
            placeholder="Mobile"
            type="text"
            name="mobile"
            id="mobile"
            onChange={formik.handleChange}
            value={formik.values.mobile}
            onBlur={formik.handleBlur}
          ></input>
          {formik.touched.mobile && formik.errors.mobile ? (
            <h5 className={classes.error}>{formik.errors.mobile}</h5>
          ) : null}
        </div>
        <div className={classes["contact-wrapper"]}>
          <label htmlFor="home">Home:</label>
          <input
            className={classes["contacts-inputs"]}
            placeholder="Home"
            type="text"
            name="home"
            id="home"
            onChange={formik.handleChange}
            value={formik.values.home}
            onBlur={formik.handleBlur}
          ></input>
          {formik.touched.home && formik.errors.home ? (
            <h5 className={classes.error}>{formik.errors.home}</h5>
          ) : null}
        </div>
        <div className={classes["contact-wrapper"]}>
          <label htmlFor="company">Company:</label>
          <input
            className={classes["contacts-inputs"]}
            placeholder="Company"
            type="text"
            name="company"
            id="company"
            onChange={formik.handleChange}
            value={formik.values.company}
            onBlur={formik.handleBlur}
          ></input>
          {formik.touched.company && formik.errors.company ? (
            <h5 className={classes.error}>{formik.errors.company}</h5>
          ) : null}
        </div>
        <div className={classes["contact-wrapper"]}>
          <label htmlFor="work">Work:</label>
          <input
            className={classes["contacts-inputs"]}
            placeholder="Work"
            type="text"
            name="work"
            id="work"
            onChange={formik.handleChange}
            value={formik.values.work}
            onBlur={formik.handleBlur}
          ></input>
          {formik.touched.work && formik.errors.work ? (
            <h5 className={classes.error}>{formik.errors.work}</h5>
          ) : null}
        </div>
        <div className={classes["contact-wrapper"]}>
          <label htmlFor="notes">Notes:</label>
          <textarea
            className={classes.notes}
            placeholder="Notes"
            type="textarea"
            rows="5"
            name="notes"
            id="notes"
            onChange={formik.handleChange}
            value={formik.values.notes}
            onBlur={formik.handleBlur}
          ></textarea>
          {formik.touched.notes && formik.errors.notes ? (
            <h5 className={classes.error}>{formik.errors.notes}</h5>
          ) : null}
        </div>
        <button
          type="submit"
          className={
            formik.isValid ? classes.submitBtn : classes["submitBtn-disabled"]
          }
          disabled={!formik.isValid}
        >
          Accept
        </button>
      </div>
    </form>
  );
};

export default ContactEditForm;
