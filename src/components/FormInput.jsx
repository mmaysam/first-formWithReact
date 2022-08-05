import React, { useState } from "react";
import "./formInput.css";

const FormInput = (props) => {
  const [focused, setFocused] = useState(false);
  const { label, errorMessage, onChange, id, ...inputProps } = props;
  const handleFocused = (e) => {
    setFocused(true);
  };
  return (
    <div className="formInputs">
      <label>{label}</label>
      <input
        {...inputProps}
        onChange={onChange}
        onBlur={handleFocused}
        focused={focused.toString()}
      />
      <span>{errorMessage}</span>
    </div>
  );
};

export default FormInput;
