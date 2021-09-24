import React from 'react';

import Card from '../shered/Card';
import ContactForm from './ContactForm';
import Line from '../shered/Line';


import './ContactMe.css'

function ContactMe(props) {
    return (
        <div className="contact-me__bg-image">
        <div className="contact-me">
        <Card>
         
            <div className="contact-me__header">Contact</div>
            <ContactForm />
       
        </Card>
        </div>
        </div>
    );
}

export default ContactMe;