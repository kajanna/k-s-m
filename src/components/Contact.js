import React from 'react';

import ContactForm from './ContactForm';
import AfterMessageInfo from './AfterMessageInfo';
import LoadingAnimation from '../shered/LoadingAnimation';
import useSendMessage from '../shered/useSendMessage';

import './Contact.css'


function Contact(props) {
  const { messageIsSend, sendingMessage, error, sendMessage, clear } = useSendMessage();
  return (
    <section id="contact" className="contact__bg-image">
      <div className="contact_main">
        {!messageIsSend && !sendingMessage && <ContactForm onMessageSend={sendMessage} />}
        <div className={sendingMessage ? null : "contact--hidden"}>
          <LoadingAnimation />
        </div>
        <div className={messageIsSend && !sendingMessage ? null : "contact--hidden"}>
            <AfterMessageInfo onClear={clear} error={error} />
        </div>
      </div>
    </section>
  );
}

export default Contact;