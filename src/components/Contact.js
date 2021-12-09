import React,  {useState } from 'react';

import ContactForm from './ContactForm';
import AfterMessageInfo from './AfterMessageInfo';
import AnimatedUnmount from '../shered/AnimatedUnmount'

import './Contact.css'

function Contact(props) {
  const [ messageIsSend, setMessageIsSend ] = useState(false);

  const afterMessageSend = () => {
    setMessageIsSend(true);
  }
  const clearMessageIsSend = () => {
    setMessageIsSend(false);
  };
  return (
    
    <section id="contact" className="contact__bg-image">
      {console.log(messageIsSend)}
      <AnimatedUnmount show={!messageIsSend}>
        <div className="contact__main">
          <div className="contact__header">
            <div className="contact__text">Contact</div>
          </div>
          <ContactForm onMessageSend={afterMessageSend} />
        </div>
      </AnimatedUnmount>
    {messageIsSend && <div className="contact__main">
          <AfterMessageInfo clearMessageIsSend={clearMessageIsSend} />
        </div>}
    </section>
  );
}

export default Contact;