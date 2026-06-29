import {

  FormControl,
  InputLabel,
  Select,
  MenuItem,
  FormHelperText

} from "@mui/material";

import { Controller } from "react-hook-form";

function Dropdown({

  name,
  label,
  control,
  options,
  multiple = false

}) {

  return (

    <Controller

      name={name}

      control={control}

      rules={{
        required: `${label} is required`
      }}

      render={({ field, fieldState: { error } }) => (

        <FormControl

          fullWidth

          error={!!error}

        >

          <InputLabel>

            {label}

          </InputLabel>

          <Select

            {...field}

            label={label}

            multiple={multiple}

            value={multiple ? field.value || [] : field.value || ""}

          >

            {

              options.map((option) => (

                <MenuItem

                  key={option}

                  value={option}

                >

                  {option}

                </MenuItem>

              ))

            }

          </Select>

          <FormHelperText>

            {error ? error.message : ""}

          </FormHelperText>

        </FormControl>

      )}

    />

  );

}

export default Dropdown;