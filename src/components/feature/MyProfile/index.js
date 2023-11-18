import React from "react";
import { useForm } from "react-hook-form";
import Button from "../../common/Button";
import Input from "../../common/Input";
import "./styles.css";
const MyProfile = () => {
  const { control, handleSubmit } = useForm({
    defaultValues: {
      fName: "",
      lName: "",
      email: "",
      pNo: "",
    },
  });

  const onSubmit = (data) => {
    console.log(data);
  };

  return (
    <div>
      <form onSubmit={handleSubmit(onSubmit)}>
        <Input
          type="text"
          placeholder="First Name"
          label="First Name"
          name="fName"
          control={control}
        />
        <Input
          type="text"
          placeholder="Last Name"
          label="Last Name"
          name="lName"
          control={control}
        />
        <Input
          type="text"
          placeholder="Enter email"
          label="Email"
          name="email"
          control={control}
        />
        <Input
          type="number"
          placeholder="Enter no"
          label="Phone no"
          name="pNo"
          control={control}
        />
        <Button label="Submit" />
      </form>
    </div>
  );
};

export default MyProfile;
