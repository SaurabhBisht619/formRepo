import React from "react";
import "./styles.css";
const Input = ({
  type,
  placeholder,
  onChange,
  label,
  customStyle,
  name,
  value,
}) => {
  return (
    <div>
      {!!label && <label>{label}</label>}
      <input
        name={name}
        type={type}
        placeholder={placeholder}
        onChange={onChange}
        className="input"
        style={customStyle}
        value={value}
      />
    </div>
  );
};

export default Input;
