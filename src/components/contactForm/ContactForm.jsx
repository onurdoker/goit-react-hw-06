import { useId } from "react";
import { useDispatch, useSelector } from "react-redux";
import { nanoid } from "nanoid";
import * as Yup from "yup";
import { ErrorMessage, Field, Form, Formik } from "formik";

import { selectContacts, addContact } from "../../redux/contactsSlice.js";
import styles from "./ContactForm.module.css";

const ContactForm = () => {
  const nameId = useId();
  const numberId = useId();
  const dispatch = useDispatch();
  const contacts = useSelector(selectContacts);
  
  const FeedbackSchema = Yup.object()
                            .shape({
                                     name: Yup.string()
                                              .min(3,
                                                   "Name must be at least 3 characters long")
                                              .max(50,
                                                   "Name must be maximum 50 character long")
                                              .matches(/^[A-Za-zĞÜŞİÖÇğüşıöç\s]+$/,
                                                       "Name must contain only letters")
                                              .required("Name is required"),
                                     number: Yup.string()
                                                .matches(/^\d{7}$/,
                                                         "The phone number must contain exactly 7 digits" +
                                                         " (for example: 1234567)")
                                                .required("Phone number is required"),
                                   });
  
  const handleSubmit = (values,
                        { resetForm }) => {
    const capitalizedName = values.name.charAt(0)
                                  .toUpperCase() + values.name.slice(1)
                                                         .toLowerCase();
    
    const exists = contacts.some((c) => c.name.toLowerCase() === capitalizedName.toLowerCase());
    if (exists) {
      alert("Contact with this name already exists!");
      return;
    }
    
    const formattedNumber = values.number.replace(/(\d{3})(\d{2})(\d{2})/,
                                                  "$1-$2-$3");
    
    dispatch(
        addContact({
                     id: nanoid(),
                     name: capitalizedName,
                     number: formattedNumber,
                   }),
    );
    resetForm();
  };
  
  return (
      <Formik
          initialValues={{
            name: "",
            number: "",
          }}
          validationSchema={FeedbackSchema}
          onSubmit={handleSubmit}
      >
        <Form className={styles.form}>
          <div className={styles.name}>
            <label htmlFor={nameId}>Name: </label>
            <Field
                type="text"
                name="name"
                id={nameId}
            />
            <ErrorMessage
                className={styles.error}
                name={"name"}
                component={"span"}
            />
          </div>
          
          <div className={styles.name}>
            <label htmlFor={numberId}>Number: </label>
            <Field
                type={"phone"}
                name={"number"}
                id={numberId}
            />
            <ErrorMessage
                className={styles.error}
                name={"number"}
                component={"span"}
            />
          </div>
          
          <div className={styles.name}>
            <button type={"submit"}>Add Contact</button>
          </div>
        </Form>
      
      </Formik>
  );
  
};
export default ContactForm;