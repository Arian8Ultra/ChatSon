// Description: This is a text input component with normal style but with a big size that is used in the application
import * as React from "react";
import TextField from "@mui/material/TextField";
import { borderRadiuosTextField } from "../../theme/Themes";


function TextInputNormalBig({id, label, type,idNum,autoComplete,disabled,fontSize,textColor,backgroundColor,hoverColor,position,bottom,right,top,left,margin,text,value,helperText,error,size, width, height,getText, ...rest }) {

  const changeData = (data) => {
    getText(data);
  };
  const [Sheight, setSheight] = React.useState();
  const [Bheight, setBheight] = React.useState();

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
      sx={{ boxShadow: 0, borderRadius: borderRadiuosTextField }}
      InputProps={{ sx: { borderRadius: borderRadiuosTextField } }}
      InputLabelProps={{
        size: "normal",
      }}
    />
  );
}
export default TextInputNormalBig