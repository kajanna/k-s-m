import React from 'react';
import { useFormik, FormikProvider, Form } from 'formik';
import * as Yup from 'yup';

import UserInput from './UserInput';
import Button from '../shared/Button'

import './ContactForm.css';

function ContactForm(props) {

  const contactSchema = Yup.object().shape({
    name: Yup.string()
      .max(60, "too long name")
      .required("this field is required"),
    email: Yup.string()
      .email("email address format is incorrect")
      .required("this field is required"),
    message: Yup.string()
      .max(500, "message should not exceed 500 characters")
      .required("this field is required")
  });
 
  const sendMessage = async (values) => {
    props.onMessageSend(values);
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
      <div className="contact-form">
      <div className="contact-form__header">
        <div className="contact-form__text">Contact</div>
      </div>
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
</div>
    )
}

export default ContactForm;