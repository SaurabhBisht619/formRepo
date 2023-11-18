import React, { useState } from "react";
import "./styles.css";
import Input from "../../common/Input";
import Button from "../../common/Button";
const SigUp = () => {
  const [formData, setFormData] = useState({});

  const showValues = (e) => {
    const { name, value } = e.target;
    setFormData({ ...formData, [name]: value });
  };

  const getValues = (e) => {
    e.preventDefault();
    console.log(formData);
  };
  return (
    <div className="wrapper">
      <form className="childWrapper" onSubmit={getValues}>
        <Input
          type="text"
          placeholder="First Name"
          onChange={showValues}
          name="firstName"
        />
        <Input
          type="tel"
          placeholder="Enter Phone no"
          onChange={showValues}
          name="phoneNo"
        />
        <Input
          type="password"
          placeholder="Enter Password"
          onChange={showValues}
          name="password"
        />
        <Button label="Get values" />
      </form>
    </div>
  );
};

export default SigUp;
