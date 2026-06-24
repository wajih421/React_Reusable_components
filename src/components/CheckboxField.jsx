import {

Checkbox,
FormControlLabel

} from "@mui/material";

function CheckboxField({

label,

checked,

onChange

}){

return(

<FormControlLabel

label={label}

control={

<Checkbox

checked={checked}

onChange={onChange}

/>

}

/>

);

}

export default CheckboxField;