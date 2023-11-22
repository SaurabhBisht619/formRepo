import React from "react";
import { Controller, useForm } from "react-hook-form";
import { useNavigate } from "react-router-dom";
import Button from "../../common/Button";
import Input from "../../common/Input";
import { path } from "../../constants/constant";
import "./styles.css";
const Login = () => {
  const navigate = useNavigate();

  const { control, handleSubmit, getValues, formState, watch } = useForm({
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
            required: "this filed is Required",
          }}
        />
        {watch("select") === "second" && (
          <Button label="Submit" type="submit" />
        )}

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
