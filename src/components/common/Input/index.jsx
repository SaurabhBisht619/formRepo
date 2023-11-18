import React from "react";
import "./styles.css";
import { Controller } from "react-hook-form";
const Input = ({
  type,
  placeholder,
  onChange,
  label,
  customStyle,
  name,
  value,
  control,
}) => {
  return (
    <Controller
      render={({ field }) => {
        return (
          <div>
            {!!label && <label>{label}</label>}
            <input
              value={field.value}
              type={type}
              placeholder={placeholder}
              className="input"
              style={customStyle}
              onChange={field.onChange}
            />
          </div>
        );
      }}
      name={name}
      control={control}
    />
  );
};

export default Input;
