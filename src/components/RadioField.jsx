import {
  RadioGroup,
  Radio,
  FormControlLabel,
  FormControl,
  FormHelperText,
} from "@mui/material";
import { Controller } from "react-hook-form";

function RadioField({
  name,
  control,
  options,
  rules,
}) {
  return (
    <Controller
      name={name}
      control={control}
      rules={rules}
      render={({ field, fieldState: { error } }) => (
        <FormControl error={!!error}>
          <RadioGroup {...field}>
            {options.map((option) => (
              <FormControlLabel
                key={option}
                value={option}
                control={<Radio />}
                label={option}
              />
            ))}
          </RadioGroup>

          <FormHelperText>{error?.message}</FormHelperText>
        </FormControl>
      )}
    />
  );
}

export default RadioField;