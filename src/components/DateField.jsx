import { TextField } from "@mui/material";
import { Controller } from "react-hook-form";

function DateField({

  name,
  control,
  label = "Date"

}) {

  return (

    <Controller

      name={name}

      control={control}

      rules={{
        required: "Date is required"
      }}

      render={({ field, fieldState: { error } }) => (

        <TextField

          {...field}

          fullWidth

          label={label}

          type="date"

          

          error={!!error}

          helperText={error ? error.message : ""}

        />

      )}

    />

  );

}

export default DateField;