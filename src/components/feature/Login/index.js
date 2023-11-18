import React, { useState } from "react";
import "./styles.css";
import { useNavigate } from "react-router-dom";
import { path } from "../../constants/constant";
import Input from "../../common/Input";
import Button from "../../common/Button";
import { Controller, useForm } from "react-hook-form";
const Login = () => {
  const navigate = useNavigate();

  const { register, control, handleSubmit, watch, getValues, formState } =
    useForm({
      defaultValues: {
        password: "asdasdas",
        phno: "sdasdsa",
        select: "",
      },
    });

  const { errors, isValid } = formState;

  console.log(errors, isValid);

  const onSubmit = (data) => {
    console.log(data, "=====");
  };

  return (
    <div className="wrapper">
      <form className="childWrapper" onSubmit={handleSubmit(onSubmit)}>
        <Input
          type="tel"
          placeholder="Enter phone no"
          customStyle={{ border: "2px solid red" }}
          label="Phone no"
          name="phno"
          control={control}
        />
        <Input
          type="password"
          placeholder="Password"
          label="Password"
          name="password"
          control={control}
        />
        <Controller
          render={({ field }) => {
            return (
              <select
                name=""
                id=""
                onChange={field.onChange}
                value={field.value}
              >
                <option value="first">First</option>
                <option value="second">Second</option>
              </select>
            );
          }}
          name="select"
          control={control}
          rules={{
            required: "this filed is reqq",
          }}
        />
        {/*{watch("select") === "second" && (
          <Button label="Submit" type="submit" />
        )} */}

        <Button label="Submit" type="submit" />
      </form>
      <button className="abc" onClick={() => navigate(path.signup)}>
        Create new account
      </button>
      <button className="abc" onClick={() => navigate(path.myProfile)}>
        My Profile
      </button>
      <button className="abc" onClick={() => console.log(getValues("phno"))}>
        get values
      </button>
    </div>
  );
};

export default Login;
