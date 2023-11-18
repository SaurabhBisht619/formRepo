import React, { useState } from "react";
import "./styles.css";
import { useNavigate } from "react-router-dom";
import { path } from "../../constants/constant";
import Input from "../../common/Input";
import Button from "../../common/Button";
const Login = () => {
  const navigate = useNavigate();
  const [formValues, setFormValues] = useState({
    password: "",
    phno: "",
  });

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormValues({
      ...formValues,
      [name]: value,
    });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    console.log(e);
  };

  return (
    <div className="wrapper">
      <form className="childWrapper" onSubmit={handleSubmit}>
        <Input
          type="tel"
          placeholder="Enter phone no"
          customStyle={{ border: "2px solid red" }}
          label="Phone no"
          onChange={(e) => handleChange(e)}
          name="phno"
          value={formValues.phno}
        />
        <Input
          type="password"
          placeholder="Password"
          label="Password"
          onChange={(e) => handleChange(e)}
          name="password"
          value={formValues.password}
        />
        <Button label="Submit" type="submit" />
      </form>
      <button className="abc" onClick={() => navigate(path.signup)}>
        Create new account
      </button>
      <button className="abc" onClick={() => navigate(path.myProfile)}>
        My Profile
      </button>
    </div>
  );
};

export default Login;
