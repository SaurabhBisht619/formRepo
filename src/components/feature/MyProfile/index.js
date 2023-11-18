import React, { useState } from "react";
import "./styles.css";
import Input from "../../common/Input";
import Button from "../../common/Button";
const MyProfile = () => {
  const [formData, setFormData] = useState({
    fName: "",
    lName: "",
    email: "",
    pNo: "",
  });

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData({
      ...formData,
      [name]: value,
    });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    console.log(formData);
  };

  return (
    <div>
      <form onSubmit={handleSubmit}>
        <Input
          type="text"
          placeholder="First Name"
          label="First Name"
          onChange={(e) => handleChange(e)}
          name="fName"
        />
        <Input
          type="text"
          placeholder="Last Name"
          label="Last Name"
          onChange={(e) => handleChange(e)}
          name="lName"
        />
        <Input
          type="text"
          placeholder="Enter email"
          label="Email"
          onChange={(e) => handleChange(e)}
          name="email"
        />
        <Input
          type="number"
          placeholder="Enter no"
          label="Phone no"
          onChange={(e) => handleChange(e)}
          name="pNo"
        />
        <Button label="Submit" />
      </form>
    </div>
  );
};

export default MyProfile;
