import { TextField } from "@mui/material";
import { Controller } from "react-hook-form";

function InputField({
  label,
  name,
  control,
  rules,
  type = "text",
  multiline = false,
  rows = 1,
}) {
  return (
    <Controller
      name={name}
      control={control}
      rules={rules}
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
          helperText={error?.message}
        />
      )}
    />
  );
}

export default InputField;