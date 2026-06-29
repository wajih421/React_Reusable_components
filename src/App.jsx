import { useForm } from "react-hook-form";

import InputField from "./components/InputField";
import Dropdown from "./components/Dropdown";
import RadioField from "./components/RadioField";
import CheckboxField from "./components/CheckboxField";
import DateField from "./components/DateField";
import FileUpload from "./components/FileUpload";

import "./App.css";

function App() {

  const {

    control,
    handleSubmit

  } = useForm({

    defaultValues: {

      name: "",
      age: "",
      description: "",
      status: "",
      skills: [],
      gender: "",
      agree: false,
      date: "",
      file: null

    }

  });

  const submit = (data) => {

    console.log(data);

  };

  return (

    <div className="form-container">

      <h1 className="form-title">

        Student Registration Form

      </h1>

      <form onSubmit={handleSubmit(submit)}>

        <InputField

          label="Name"

          name="name"

          control={control}

        />

        <InputField

          label="Age"

          name="age"

          type="number"

          control={control}

        />

        <InputField

          label="Description"

          name="description"

          multiline

          rows={4}

          control={control}

        />

        <Dropdown

          label="Status"

          name="status"

          control={control}

          options={["Active", "Progress", "Completed"]}

        />

        <Dropdown

          label="Skills"

          name="skills"

          control={control}

          multiple

          options={["React", "Node", "MongoDB"]}

        />

        <RadioField

          name="gender"

          control={control}

          options={["Male", "Female"]}

        />

        <CheckboxField

          name="agree"

          label="Accept Terms & Conditions"

          control={control}

        />

        <DateField

          name="date"

          control={control}

        />

        <FileUpload

          name="file"

          control={control}

        />

        <button type="submit">

          Submit

        </button>

      </form>

    </div>

  );

}

export default App;