import React, { useState } from 'react';
import { useFormik, FormikProvider, Form } from 'formik';
import * as Yup from 'yup';

import UserInput from './UserInput';
import Button from '../shered/Button'

import './ContactForm.css';

function ContactForm(props) {

  const [ error, setError ] = useState(null);
  const contactSchema = Yup.object().shape({
    name: Yup.string()
      .max(60, "too long name")
      .required("required"),
    email: Yup.string()
      .max(60, "too long email")
      .email("incorrect email")
      .required("required"),
    message: Yup.string()
      .min(20, "message should be at least 20 characters long")
      .max(500, "message should not exceed 500 characters")
      .required("required")
  });
  // const contactSchema = Yup.object().shape({
  //   name: Yup.string()
  //     .max(60, "Za długie imię")
  //     .required("Wymagane pole"),
  //   email: Yup.string()
  //     .max(60, "Za długi adres email")
  //     .email("Nieprawidłowy adres email")
  //     .required("Wymagane pole"),
  //   message: Yup.string()
  //     .min(20, "Wiadomość powinna mieć przynajmniej 20 znaków")
  //     .max(500, "Wiadomość nie powinna miećwięcej niż 500 znaków")
  //     .required("Wymagane pole")
  // });

  const sendMessage = async (values) => {
    props.onStartSending();
    try {
      const response = await fetch(process.env.REACT_APP_SEND_EMAIL_URL, {
        method: "POST",
        headers: {
          "Content-Type": "application/json"
        },
        body: JSON.stringify(values),
      });
      if (response.status === 200) {
        props.onMessageSend();
      }
    } catch (err) {
      setError(err || "Somthing went wrong.");
    }
    props.onStopSending();
  };

  const formik = useFormik({
    initialValues: {
      name: "",
      email: "",
      message: "",
    },
    onSubmit: sendMessage,
    validationSchema: contactSchema,
  });
    return (
      <>
      {error && <p>{error}</p>}
      <FormikProvider value={formik}>
        <div className="contact-form__form">
        <Form>
        <UserInput
          label="name"
          id="name"
          name="name"
          type="text"
        />
        <UserInput
          label="email"
          id="email"
          name="email"
          type="email"
        />
        <UserInput
          label="message"
          id="message"
          name="message"
          type="text"
          large
        />
        <div className="contact-form__button">
          <Button type="submit" text="submit" />
        </div>
      </Form>
      </div>
      </FormikProvider>
      </>
    )
}

export default ContactForm;