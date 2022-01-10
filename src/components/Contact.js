import React,  {useState } from 'react';

import ContactForm from './ContactForm';
import AfterMessageInfo from './AfterMessageInfo';
import AnimatedUnmount from '../shered/AnimatedUnmount';
import LoadingAnimation from '../shered/LoadingAnimation';

import './Contact.css'


function Contact(props) {
  const [ messageIsSend, setMessageIsSend ] = useState(false);
  const [ sendingMessage, setSendingMessage ] = useState(false);

  const afterMessageSend = () => {
    setMessageIsSend(true);
  }
  const clearMessageIsSend = () => {
    setMessageIsSend(false);
  };

  const startSendingMessage = () => {
    setSendingMessage(true);
  }
  const stopSendingMessage = () => {
    setSendingMessage(false);
  };
  return (
    <section id="contact" className="contact__bg-image">
      {sendingMessage && !messageIsSend && <LoadingAnimation />}
      <AnimatedUnmount show={!messageIsSend}>
        <div className="contact__main">
          <div className="contact__header">
            <div className="contact__text">Contact</div>
          </div>
          <ContactForm 
            onMessageSend={afterMessageSend} 
            onStartSending={startSendingMessage}
            onStopSending={stopSendingMessage}/>
        </div>
      </AnimatedUnmount>
    {messageIsSend && !sendingMessage && <div className="contact__main">
          <AfterMessageInfo clearMessageIsSend={clearMessageIsSend} />
        </div>} 
    </section>
  );
}

export default Contact;