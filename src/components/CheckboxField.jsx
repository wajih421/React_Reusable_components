import {

  Checkbox,
  FormControl,
  FormControlLabel,
  FormHelperText

} from "@mui/material";

import { Controller } from "react-hook-form";

function CheckboxField({

  name,
  label,
  control

}) {

  return (

    <Controller

      name={name}

      control={control}

      rules={{
        validate: (value) => value || "Please accept the terms"
      }}

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

          <FormHelperText>

            {error ? error.message : ""}

          </FormHelperText>

        </FormControl>

      )}

    />

  );

}

export default CheckboxField;