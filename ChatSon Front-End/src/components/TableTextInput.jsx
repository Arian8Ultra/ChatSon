// Purpose: This component is used to create a text input field for the table component
// importing the necessary components and hooks from react and material-ui 
import * as React from "react";
import TextField from "@mui/material/TextField";


function TableTextInput({id, label, type,idNum,autoComplete,disabled,fontSize,textColor,backgroundColor,hoverColor,position,bottom,right,top,left,margin,text,value,helperText,error,size, width, height,getText, ...rest }) {
  
  const changeData = (data) => {
    // setting and pushing the new input to higher levels
    getText(data);
  };
  return (
    <TextField
      onChange={(newValue) => changeData(newValue.target.value)}
      id={id}
      name={id}
      value={value}
      fullWidth
      variant='standard'
      label={label}
      type={type}
      error={error}
      helperText={helperText}
    />
  );
}
export default TableTextInput
