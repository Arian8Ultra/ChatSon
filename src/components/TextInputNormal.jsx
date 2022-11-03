import * as React from "react";
import TextField from "@mui/material/TextField";
import { borderRadiuosTextField } from "../../theme/Themes";


function TextInputNormal({id, label, type,idNum,autoComplete,disabled,fontSize,textColor,backgroundColor,hoverColor,position,bottom,right,top,left,margin,text,value,helperText,error,size, width, height,getText, ...rest }) {

  const changeData = (data) => {
    props.getText(data);
  };

  return (
    <TextField
      onChange={(newValue) => changeData(newValue.target.value)}
      name={id}
      label={label}
      fullWidth
      defaultValue={props.value}
      autoComplete={autoComplete}
      variant='outlined'
      type={type}
      disabled={disabled}
      error={error}
      helperText={helperText}
      sx={{ boxShadow: 0, height: 10, borderRadius: borderRadiuosTextField }}
      InputProps={{ sx: { height: height, borderRadius: borderRadiuosTextField } }}
      {...rest}
      InputLabelProps={{
        size: size,
      }}
    />
  );
}

export default TextInputNormal
