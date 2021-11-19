import React,  {useState } from 'react';

import Card from '../shered/Card';
import ContactForm from './ContactForm';
import AfterMessageInfo from './AfterMessageInfo';

import './Contact.css'


function Contact(props) {
  const [ messageIsSend, setMessageIsSend ] = useState(false);
  const clearMessageIsSend = () => setMessageIsSend(false)
  return (
    <section id="contact" className="contact__bg-image">
     
        <div className="contact__main">
          <div className="contact__header">
            <div className="contact__text">Contact</div>
  
          </div>
          {!messageIsSend 
           ? <ContactForm onMessageSend={()=> setMessageIsSend(true)}/>
           : <AfterMessageInfo clearMessageIsSend={clearMessageIsSend}/>
          }
        </div>
     
    </section>
  );
}

export default Contact;