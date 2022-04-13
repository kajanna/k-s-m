import React from "react";

import ContactForm from "./ContactForm";
import AfterMessageInfo from "./AfterMessageInfo";
import LoadingAnimation from "../shared/LoadingAnimation";
import useSendMessage from "../shared/useSendMessage";

import "./Contact.css";

const Contact = () => {
  const { messageIsSend, sendingMessage, error, sendMessage, clear } =
    useSendMessage();
  return (
    <section id="contact" className="contact__bg">
      <div>
        {!messageIsSend && !sendingMessage && (
          <ContactForm onMessageSend={sendMessage} />
        )}
        {sendingMessage && <LoadingAnimation />}
        {messageIsSend && !sendingMessage && (
          <AfterMessageInfo onClear={clear} error={error} />
        )}
      </div>
    </section>
  );
};

export default Contact;
