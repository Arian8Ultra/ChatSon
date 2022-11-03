import * as React from "react";
import TextField from "@mui/material/TextField";
import { borderRadiuosTextField } from "../theme/Themes";


export default function TextInputShrink({id, label, type,idNum,autoComplete,disabled,fontSize,textColor,backgroundColor,hoverColor,position,bottom,right,top,left,margin,text,value,helperText,error,size, width, height,getText, ...rest }) {
 
  const changeData = (data) => {
    getText(data);
  };
  return (
    <TextField
      onChange={(newValue) => changeData(newValue.target.value)}
      id={id}
      name={id}
      label={label}
      fullWidth
      autoComplete={autoComplete}
      variant='outlined'
      type={type}
      defaultValue={value}
      error={error}
      helperText={helperText}
      InputProps={{ sx: { height: 35, borderRadius: borderRadiuosTextField } }}
      InputLabelProps={{
        size: "small",
        shrink: true,
      }}
    />
  );
}
