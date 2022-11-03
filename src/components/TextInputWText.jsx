import * as React from "react";
import TextField from "@mui/material/TextField";
import { InputAdornment } from "@mui/material";
import { borderRadiuosTextField } from "../theme/Themes";


export default function TextInputWText({id, label, type,idNum,autoComplete,disabled,fontSize,textColor,backgroundColor,hoverColor,position,bottom,right,top,left,margin,text,value,helperText,error,size, width, height,getText,items, ...rest }) {
  
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
      defaultValue={value}
      autoComplete={autoComplete}
      variant='outlined'
      type={type}
      error={error}
      helperText={helperText}
      {...rest}
      InputProps={{
        startAdornment: <InputAdornment position='start'>{text}</InputAdornment>,
        sx: { height: 35, borderRadius: borderRadiuosTextField },
      }}
    />
  );
}
