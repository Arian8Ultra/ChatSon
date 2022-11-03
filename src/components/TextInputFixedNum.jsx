import { InputAdornment } from "@mui/material";
import TextField from "@mui/material/TextField";
import * as React from "react";
import { borderRadiuosTextField } from "../theme/Themes";


export default function TextInputFixedNum({id, label, type,idNum,autoComplete,disabled,fontSize,textColor,backgroundColor,hoverColor,position,bottom,right,top,left,margin,text,value,helperText,error,size, width, height,getText, ...rest }) {

  const changeData = (data) => {
    props.getText(value);
    console.log(data);
  };

  const error = () => {
    if (value <= 0 || value == null) {
      return true;
    } else {
      return false;
    }
  };

  return (
    <TextField
      onChange={(newValue) => changeData(newValue.target.value)}
      label={label}
      fullWidth
      autoComplete={autoComplete}
      variant='outlined'
      type={type}
      error={error()}
      helperText={helperText}
      value={value}
      disabled={disabled}
      InputProps={{
        startAdornment: <InputAdornment position='start'>{text}</InputAdornment>,
        sx: { height: 35, borderRadius: borderRadiuosTextField },
      }}
    />
  );
}
