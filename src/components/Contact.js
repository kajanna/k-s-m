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
          <iframe title="contact-form" src="https://docs.google.com/forms/d/e/1FAIpQLSfrMvRyFvQTl2KUb6mdQLreKAxWzrcCggKar6FiqSla-PYGMQ/viewform?embedded=true" 
          width="440" height="304" frameborder="0" marginheight="0" marginwidth="0">Ładuję…</iframe>
          {/* <ContactForm /> */}
        </Card>
      </div>
    </section>
  );
}

export default Contact;