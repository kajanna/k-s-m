import React from 'react';
import { useFormik, FormikProvider, Form } from 'formik';
import * as Yup from 'yup';

import UserInput from './UserInput';
import Button from '../shered/Button'

import './ContactForm.css';

const contactSchema = Yup.object().shape({
  name: Yup.string()
    .max(60, "Za długie imię")
    .required("Wymagane pole"),
  email: Yup.string()
    .max(60, "Za długi adres email")
    .email("Nieprawidłowy adres email")
    .required("Wymagane pole"),
  message: Yup.string()
    .min(20, "Wiadomość powinna mieć przynajmniej 20 znaków")
    .max(500, "Wiadomość nie powinna miećwięcej niż 500 znaków")
    .required("Wymagane pole")
});

function ContactForm() {
  const formik = useFormik({
    initialValues: {
      name: "",
      email: "",
      message: "",
    },
    onSubmit: async (values) => {
      alert(JSON.stringify(values, null, 2));
    },
    validationSchema: contactSchema,
  });

    return (
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
    )
}

export default ContactForm;