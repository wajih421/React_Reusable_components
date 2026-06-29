import { useForm } from "react-hook-form";

import InputField from "./components/InputField";
import Dropdown from "./components/Dropdown";
import RadioField from "./components/RadioField";
import CheckboxField from "./components/CheckboxField";
import DateField from "./components/DateField";
import FileUpload from "./components/FileUpload";

import "./App.css";

function App() {
  const { control, handleSubmit } = useForm({
    defaultValues: {
      name: "",
      age: "",
      description: "",
      status: "",
      skills: [],
      gender: "",
      agree: false,
      date: "",
      file: null,
    },
  });

  const submit = (data) => {
    console.log(data);
  };

  return (
    <div className="form-container">
      <h1 className="form-title">Student Registration Form</h1>

      <form onSubmit={handleSubmit(submit)}>
<InputField
  label="Name"
  name="name"
  control={control}
  rules={{
    required: "Name is required",
  }}
/>
<InputField
  label="Age"
  name="age"
  control={control}
  type="number"
  rules={{
    required: "Age is required",
    min: {
      value: 18,
      message: "Age must be at least 18",
    },
    max: {
      value: 35,
      message: "Age must not exceed 35",
    },
  }}
/>
        <InputField
  label="Description"
  name="description"
  control={control}
  multiline
  rows={4}
  rules={{
    required: "Description is required",
    maxLength: {
      value: 30,
      message: "Maximum 30 characters allowed",
    },
  }}
/>

        <Dropdown
  label="Status"
  name="status"
  control={control}
  options={["Active", "Progress", "Completed"]}
  rules={{
    required: "Status is required",
  }}
/>

<Dropdown
  label="Skills"
  name="skills"
  control={control}
  multiple
  options={["React", "Node", "MongoDB"]}
  rules={{
    required: "Please select at least one skill",
  }}
/>

        <RadioField
  name="gender"
  control={control}
  options={["Male", "Female"]}
  rules={{
    required: "Please select a gender",
  }}
/>

        <CheckboxField
  label="Accept Terms"
  name="terms"
  control={control}
  rules={{
    validate: (value) => value || "Please accept the terms",
  }}
/>
<DateField
  name="date"
  control={control}
  rules={{
    required: "Date is required",
  }}
/>
<FileUpload
  name="image"
  control={control}
  rules={{
    required: "File is required",
  }}
/>
        <button type="submit">Submit</button>
      </form>
    </div>
  );
}

export default App;
