import React, { useState} from 'react';

import { useField } from 'formik';

import './UserInput.css'

function UserInput({ label, large, ...props }) {
  const [field, meta] = useField(props);

  const [didFocus, setDidFocus] = useState(false);
  const handleFocus = () => setDidFocus(true);
  const showFeedback = !!didFocus || meta.touched;

  return (
    <div className="user-input">
      <label className="user-input__label" htmlFor={field.name}>
        {label}
      </label>
      {large ? (
        <textarea
          className="user-input__textarea"
          rows={3}
          {...props}
          {...field}
        />
      ) : (
        <input
          className="user-input__input"
          {...props}
          {...field}
          onFocus={handleFocus}
        />
      )}
      <div className="user-input__error-text">
      {showFeedback ? meta.error && meta.error : ''} 
      </div>
    </div>
  );
}

export default UserInput;