import React from "react";
import { useForm } from "react-hook-form";
import Button from "../../common/Button";
import Input from "../../common/Input";
import "./styles.css";
const SigUp = () => {
  const { control, handleSubmit } = useForm({
    defaultValues: {
      firstName: "",
      phoneNo: "",
      password: "",
    },
  });

  const getValues = (data) => {
    console.log(data);
  };
  return (
    <div className="wrapper">
      <form className="childWrapper" onSubmit={handleSubmit(getValues)}>
        <Input
          type="text"
          placeholder="First Name"
          name="firstName"
          control={control}
        />
        <Input
          type="tel"
          placeholder="Enter Phone no"
          name="phoneNo"
          control={control}
        />
        <Input
          type="password"
          placeholder="Enter Password"
          name="password"
          control={control}
        />
        <Button label="Get values" />
      </form>
    </div>
  );
};

export default SigUp;
