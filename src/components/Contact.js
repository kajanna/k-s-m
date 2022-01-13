import React from 'react';

import ContactForm from './ContactForm';
import AfterMessageInfo from './AfterMessageInfo';
import AnimatedUnmount from '../shered/AnimatedUnmount';
import LoadingAnimation from '../shered/LoadingAnimation';
import useSendMessage from '../shered/useSendMessage';

import './Contact.css'


function Contact(props) {
  const { messageIsSend, sendingMessage, error, sendMessage, clear} = useSendMessage();

  return (
    <section id="contact" className="contact__bg-image">
      <div className="contact_main">
        <AnimatedUnmount show={!messageIsSend && !sendingMessage}>
          <ContactForm onMessageSend={sendMessage} />
        </AnimatedUnmount>
        <AnimatedUnmount show={sendingMessage}>
          <LoadingAnimation />
        </AnimatedUnmount>
        <AnimatedUnmount show={messageIsSend && !sendingMessage}>
          <div className="contact__elements">
            <AfterMessageInfo onClear={clear} error={error} />
          </div>
        </AnimatedUnmount>
      </div>
    </section>
  );
}

export default Contact;