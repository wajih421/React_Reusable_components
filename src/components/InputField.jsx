import { TextField } from "@mui/material";
import { Controller } from "react-hook-form";

function InputField({

  label,
  name,
  control,
  type = "text",
  multiline = false,
  rows = 1,

}) {

  return (

    <Controller

      name={name}

      control={control}

      rules={
  label === "Description"
    ? {
        required: "Description is required",
        maxLength: {
          value: 30,
          message: "Maximum 30 characters allowed",
        },
      }

    : label === "Age"
    ? {
        required: "Age is required",
        min: {
          value: 18,
          message: "Age must be at least 18",
        },
        max: {
          value: 35,
          message: "Age must not exceed 35",
        },
      }

    : {
        required: `${label} is required`,
      }
}

      render={({ field, fieldState: { error } }) => (

        <TextField

          {...field}

          value={field.value || ""}

          fullWidth

          label={label}

          type={type}

          multiline={multiline}

          rows={rows}

          error={!!error}

          helperText={error ? error.message : ""}

        />

      )}

    />

  );

}

export default InputField;