import * as React from "react";
import TextField from "@mui/material/TextField";
import { borderRadiuosTextField } from "../../theme/Themes";


function TextInputNormal({id, label, type,idNum,autoComplete,disabled,fontSize,textColor,backgroundColor,hoverColor,position,bottom,right,top,left,margin,text,value,helperText,error,size, width, height,getText, ...rest }) {

  const changeData = (data) => {
    getText(data);
  };

  return (
    <TextField
      onChange={(newValue) => changeData(newValue.target.value)}
      name={id}
      label={label}
      fullWidth
      defaultValue={value}
      autoComplete={autoComplete}
      variant='outlined'
      type={type}
      disabled={disabled}
      error={error}
      helperText={helperText}
      sx={{ boxShadow: 0, height: 45, borderRadius: borderRadiuosTextField }}
      InputProps={{ sx: { height: 45, borderRadius: borderRadiuosTextField } }}
      {...rest}
      InputLabelProps={{
        size: size!=null ? size : 'small',
      }}
    />
  );
}

export default TextInputNormal;
