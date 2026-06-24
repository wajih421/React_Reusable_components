import { TextField } from "@mui/material";

function InputField({

label,
name,
register,

type = "text",

multiline = false,

rows = 1

}){

return(

<TextField

fullWidth

label={label}

type={type}

multiline={multiline}

rows={rows}

{...register(name)}

/>

);

}

export default InputField;