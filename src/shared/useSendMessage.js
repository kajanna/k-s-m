import { useState } from "react";

const useSendMessage = () => {
  const [messageIsSend, setMessageIsSend] = useState(false);
  const [sendingMessage, setSendingMessage] = useState(false);
  const [error, setError] = useState(null);

  const clear = () => {
    setError(null);
    setMessageIsSend(false);
  };

  const sendMessage = async (values) => {
    setSendingMessage(true);
    try {
      const response = await fetch(process.env.REACT_APP_SEND_EMAIL_URL, {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify(values),
      });
      if (response.status === 200) {
        setSendingMessage(false);
        setMessageIsSend(true);
      }
    } catch (error) {
      setSendingMessage(false);
      setMessageIsSend(true);
      setError(error.message || "Something went wrong.");
    }
  };

  return { messageIsSend, sendingMessage, error, sendMessage, clear };
};

export default useSendMessage;
