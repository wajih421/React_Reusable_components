import {

RadioGroup,
Radio,
FormControlLabel

} from "@mui/material";

function RadioField({

value,

onChange,

options

}){

return(

<RadioGroup

value={value}

onChange={onChange}

>

{

options.map((option)=>(

<FormControlLabel

key={option}

value={option}

control={<Radio />}

label={option}

/>

))

}

</RadioGroup>

);

}

export default RadioField;