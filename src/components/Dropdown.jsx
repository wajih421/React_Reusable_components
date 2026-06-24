import {

FormControl,
InputLabel,
Select,
MenuItem

} from "@mui/material";

function Dropdown({

label,

value,

onChange,

options,

multiple = false

}){

return(

<FormControl fullWidth>

<InputLabel>
{label}
</InputLabel>

<Select

label={label}

value={value}

onChange={onChange}

multiple={multiple}

>

{

options.map((option)=>(

<MenuItem

key={option}

value={option}

>

{option}

</MenuItem>

))

}

</Select>

</FormControl>

);

}

export default Dropdown;