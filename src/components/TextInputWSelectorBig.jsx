import * as React from "react";
import TextField from "@mui/material/TextField";
import { MenuItem } from "@mui/material";
import { borderRadiuosTextField } from "../theme/Themes";




export default function TextInputWSelectorBig({id, label, type,idNum,autoComplete,disabled,fontSize,textColor,backgroundColor,hoverColor,position,bottom,right,top,left,margin,text,value,helperText,error,size, width, height,getText,items, ...rest }) {
  const changeData = (data) => {
    props.getText(data);
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
      select
      defaultValue={""}
      error={error}
      helperText={helperText}
      {...rest}
      InputProps={{ sx: { borderRadius: borderRadiuosTextField } }}
    >
      {items.map((option) => (
        <MenuItem key={option} value={option}>
          {option}
        </MenuItem>
      ))}
    </TextField>
  );
}
