import { TextField } from "@mui/material";

function DateField({

value,
onChange

}) {

  return (

    <TextField

      fullWidth

      label="Date"

      type="date"

      value={value}

      onChange={onChange}

    

    />

  );

}

export default DateField;