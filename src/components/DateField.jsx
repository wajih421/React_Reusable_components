import { TextField } from "@mui/material";
import { Controller } from "react-hook-form";

function DateField({
  name,
  control,
  label = "Date",
  rules,
}) {
  return (
    <Controller
      name={name}
      control={control}
      rules={rules}
      render={({ field, fieldState: { error } }) => (
        <TextField
          {...field}
          fullWidth
          label={label}
          type="date"
          
          error={!!error}
          helperText={error?.message}
        />
      )}
    />
  );
}

export default DateField;