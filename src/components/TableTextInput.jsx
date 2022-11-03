import * as React from "react";
import TextField from "@mui/material/TextField";
import { borderRadiuosTextField } from "../../theme/Themes";


function TableTextInput({id, label, type,idNum,autoComplete,disabled,fontSize,textColor,backgroundColor,hoverColor,position,bottom,right,top,left,margin,text,value,helperText,error,size, width, height,getText, ...rest }) {
  
  const changeData = (data) => {
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
