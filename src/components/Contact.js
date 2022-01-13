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
        {console.log(`messageIsSend: ${messageIsSend}, sendingMessage: ${sendingMessage}, error: ${error}`)}
      <div className="contact_main">
      <AnimatedUnmount show={!messageIsSend && !sendingMessage }>
        <div className="contact__elements">
          <div className="contact__header">
            <div className="contact__text">Contact</div>
          </div>
          <ContactForm
            onMessageSend={sendMessage}
          />
        </div>
      </AnimatedUnmount>
      <AnimatedUnmount show={messageIsSend && !sendingMessage}>
       <div className="contact__elements">
          <AfterMessageInfo 
            onClear ={clear}
            error={error}/>
        </div>
      </AnimatedUnmount>
      <AnimatedUnmount show={sendingMessage}>
     <LoadingAnimation />
      </AnimatedUnmount>
      </div>
    </section>
  );
}

export default Contact;