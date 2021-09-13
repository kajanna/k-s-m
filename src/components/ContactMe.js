import React from 'react';

import Card from '../shered/Card';
import Line from '../shered/Line';
import UserInput from './UserInput';

import './ContactMe.css'

function ContactMe(props) {
    return (
        <div className="contact-me__bg-image">
        <div className="contact-me">
        <Card>
            <div className="contact-me__header">Contact</div>
            <div className="contact-me_form">
                <form>
                <UserInput name="name"/>
                <UserInput name="email"/>
                <UserInput name="message"/>
                </form>
            </div>
        </Card>
        </div>
        </div>
    );
}

export default ContactMe;