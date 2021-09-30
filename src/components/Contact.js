import React from 'react';

import Card from '../shered/Card';
import ContactForm from './ContactForm';
import Line from '../shered/Line';


import './Contact.css'

function Contact(props) {
  return (
    <section id="contact" className="contact__bg-image">
      <div className="contact">
        <Card>
          <div className="contact__header">
            <div className="contact__text">Contact</div>
            <Line />
          </div>
          <ContactForm />
        </Card>
      </div>
    </section>
  );
}

export default Contact;