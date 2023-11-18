import React from "react";

const Button = ({ label, onClick, type }) => {
  return (
    <div>
      <button className="btn" onClick={onClick} type={type}>
        {label}
      </button>
    </div>
  );
};

export default Button;
