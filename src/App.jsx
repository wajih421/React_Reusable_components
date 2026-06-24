import { useState } from "react";
import { useForm } from "react-hook-form";

import InputField from "./components/InputField";
import Dropdown from "./components/Dropdown";
import RadioField from "./components/RadioField";
import CheckboxField from "./components/CheckboxField";
import DateField from "./components/DateField";
import FileUpload from "./components/FileUpload";

function App() {

  const { register, handleSubmit } = useForm();

  const [status, setStatus] = useState("");

  const [skills, setSkills] = useState([]);

  const [gender, setGender] = useState("");

  const [agree, setAgree] = useState(false);

  const [date, setDate] = useState("");

  const [file, setFile] = useState(null);

  const submit = (data) => {

    console.log("Form Data:", data);

    console.log("Status:", status);

    console.log("Skills:", skills);

    console.log("Gender:", gender);

    console.log("Agree:", agree);

    console.log("Date:", date);

    console.log("File:", file);

  };

  return (

    <div
      style={{
        maxWidth: "600px",
        margin: "30px auto",
        display: "flex",
        flexDirection: "column",
        gap: "20px"
      }}
    >

      <h1>Reusable Form Components</h1>

      <form onSubmit={handleSubmit(submit)}>

        <InputField
          label="Name"
          name="name"
          register={register}
          type="text"
        />

        <br /><br />

        <InputField
          label="Age"
          name="age"
          register={register}
          type="number"
        />

        <br /><br />

        <InputField
          label="Description"
          name="description"
          register={register}
          multiline
          rows={4}
        />

        <br /><br />

        <Dropdown
          label="Status"
          value={status}
          onChange={(e) => setStatus(e.target.value)}
          options={[
            "Active",
            "Progress",
            "Completed"
          ]}
        />

        <br /><br />

        <Dropdown
          label="Skills"
          multiple
          value={skills}
          onChange={(e) => setSkills(e.target.value)}
          options={[
            "React",
            "Node",
            "MongoDB"
          ]}
        />

        <br /><br />

        <RadioField
          value={gender}
          onChange={(e) => setGender(e.target.value)}
          options={[
            "Male",
            "Female"
          ]}
        />

        <br /><br />

        <CheckboxField
          label="Accept Terms"
          checked={agree}
          onChange={(e) => setAgree(e.target.checked)}
        />

        <br /><br />

        <DateField
          value={date}
          onChange={(e) => setDate(e.target.value)}
        />

        <br /><br />

        <FileUpload
          onChange={(e) => setFile(e.target.files[0])}
        />

        <br /><br />

        <button type="submit">
          Submit
        </button>

      </form>

    </div>

  );

}

export default App;