import {
  Checkbox,
  FormControl,
  FormControlLabel,
  FormHelperText,
} from "@mui/material";

import { Controller } from "react-hook-form";

function CheckboxField({
  name,
  label,
  control,
  rules,
}) {
  return (
    <Controller
      name={name}
      control={control}
      rules={rules}
      render={({ field, fieldState: { error } }) => (
        <FormControl error={!!error}>
          <FormControlLabel
            label={label}
            control={
              <Checkbox
                {...field}
                checked={field.value || false}
              />
            }
          />

          <FormHelperText>{error?.message}</FormHelperText>
        </FormControl>
      )}
    />
  );
}

export default CheckboxField;